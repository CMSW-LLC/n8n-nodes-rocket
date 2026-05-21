/**
 * Gera a árvore nodes/Rocket/v1/actions/** (um diretório por resource, um *.operation.ts por provedor),
 * além de actions/router.ts, actions/versionDescription.ts e actions/node.type.ts.
 *
 * Base: list-providers.json + list-groups-providers.json (igual à v2).
 * Config opcional: factory-providers-v1.config.json — { "includeGroupIds": [28, 18] } ou {} para todos os grupos.
 */

import * as fs from 'fs';
import * as path from 'path';

import {
	escapeString,
	groupLabelToFileBase,
	groupLabelToResourceSlug,
	isEmailFieldName,
	isPasswordLikeFieldName,
	mapTipoCampo,
	resourceSlugToExportPrefix,
	singularizeFileBase,
	toCamelCase,
	toSentenceCase,
	toTitleCase,
} from './factory-string-utils';
import type { Provider } from './providers-types';
import { parseProvidersData } from './providers-types';

const LIST_PROVIDERS_PATH = './scripts/list-providers.json';
const LIST_GROUPS_PATH = './scripts/list-groups-providers.json';
const CONFIG_PATH = './scripts/factory-providers-v1.config.json';
const V1_ACTIONS_DIR = './nodes/Rocket/v1/actions';

const GEN_MARKER = 'Arquivo gerado automaticamente por scripts/factory-providers-v1.ts';

interface GroupRow {
	id_grupo_provedor: number;
	descricao_grupo: string | null;
}

interface V1Config {
	includeGroupIds?: number[];
}

interface ParamRow {
	nome_param: string;
	descricao: string;
	id_tipo_campo: number;
	is_mandatory: number;
}

interface GroupBundle {
	id: number;
	descricaoGrupo: string;
	resourceSlug: string;
	fileBase: string;
	exportPrefix: string;
	providers: Provider[];
}

function loadJson<T>(relPath: string): T {
	const p = path.resolve(process.cwd(), relPath);
	if (!fs.existsSync(p)) {
		throw new Error(`Falta ${p}`);
	}
	return JSON.parse(fs.readFileSync(p, 'utf-8')) as T;
}

function loadConfig(): V1Config | null {
	const p = path.resolve(process.cwd(), CONFIG_PATH);
	if (!fs.existsSync(p)) {
		return null;
	}
	return JSON.parse(fs.readFileSync(p, 'utf-8')) as V1Config;
}

function parseGroupRows(data: unknown): GroupRow[] {
	if (!Array.isArray(data)) {
		return [];
	}
	return data as GroupRow[];
}

function generateOperationField(param: ParamRow, resourceSlug: string, nomeChave: string): string {
	const rawLabel = (param.descricao?.trim() || param.nome_param).replace(/\s+/g, ' ');
	const displayName = toTitleCase(rawLabel);
	const nodeName = toCamelCase(param.nome_param);
	const type = mapTipoCampo(param.id_tipo_campo);
	const required = param.is_mandatory === 1;
	const defaultVal = type === 'number' ? '0' : "''";
	const disp = `{ show: { resource: ['${escapeString(resourceSlug)}'], operation: ['${escapeString(nomeChave)}'] } }`;
	const requiredLine = required ? `\n\t\t\trequired: true,` : '';
	const typeOptionsLine =
		type === 'string' && isPasswordLikeFieldName(param.nome_param)
			? `\n\t\t\ttypeOptions: { password: true },`
			: '';
	const placeholderLine =
		type === 'string' && isEmailFieldName(param.nome_param)
			? `\n\t\t\tplaceholder: 'name@email.com',`
			: '';

	return `	{
			displayName: '${escapeString(displayName)}',
			name: '${escapeString(nodeName)}',
			type: '${type}',
			default: ${defaultVal},
			displayOptions: ${disp},${typeOptionsLine}${placeholderLine}${requiredLine}
		},`;
}

function generateOperationFile(
	provider: Provider,
	resourceSlug: string,
): { fileName: string; content: string; exportKey: string } {
	const nomeChave = provider.nome_chave;
	const fileName = `${nomeChave}.operation.ts`;
	const fields = (provider.parametros || []).map((p) => generateOperationField(p as ParamRow, resourceSlug, nomeChave));
	const opDisp = `{ show: { resource: ['${escapeString(resourceSlug)}'], operation: ['${escapeString(nomeChave)}'] } }`;
	const commonPropertyBlocks = `	{
		...webhookUrlDescription,
		displayOptions: ${opDisp},
	},`;

	const paramLines: string[] = [];
	for (const p of provider.parametros || []) {
		const camelKey = toCamelCase(p.nome_param);
		const escapedParamName = escapeString(p.nome_param);
		const type = mapTipoCampo(p.id_tipo_campo);
		const cast = type === 'number' ? 'as number' : 'as string';
		paramLines.push(`\t\t'${escapedParamName}': this.getNodeParameter('${escapeString(camelKey)}', i) ${cast},`);
	}

	const content = `/* ${GEN_MARKER} - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
${commonPropertyBlocks}
${fields.join('\n')}
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
${paramLines.join('\n')}
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: '${escapeString(nomeChave)}',
		parametros,
		webhookUrl,
	});
}
`;

	return { fileName, content, exportKey: nomeChave };
}

function generateResourceIndex(resourceSlug: string, providers: Provider[], opFiles: { exportKey: string; fileName: string }[]): string {
	const imports = opFiles
		.map((o) => `import * as ${o.exportKey} from './${o.fileName.replace(/\.ts$/, '')}';`)
		.join('\n');

	const reExports = opFiles.map((o) => o.exportKey).join(', ');

	// Ordena por nome de exibição para satisfazer node-param-options-type-unsorted-items
	const sortedProviders = [...providers].sort((a, b) =>
		toTitleCase(a.descricao).localeCompare(toTitleCase(b.descricao), 'pt-BR', { sensitivity: 'base' }),
	);

	const optionsLiteral = sortedProviders
		.map(
			(p) => `			{
				name: '${escapeString(toTitleCase(p.descricao))}',
				value: '${escapeString(p.nome_chave)}',
				action: '${escapeString(toSentenceCase(toTitleCase(p.descricao)))}',
			}`,
		)
		.join(',\n');

	const firstOp = sortedProviders[0]?.nome_chave ?? '';

	const spreads = opFiles.map((o) => `\t...${o.exportKey}.description,`).join('\n');

	return `/* ${GEN_MARKER} - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

${imports}

export { ${reExports} };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['${escapeString(resourceSlug)}'],
			},
		},
		options: [
${optionsLiteral}
		],
		default: '${escapeString(firstOp)}',
	},
];

export const description: INodeProperties[] = [
	...operations,
${spreads}
];
`;
}

function unionTypeLiterals(values: string[]): string {
	if (values.length === 0) {
		return 'never';
	}
	return values.map((v) => `'${escapeString(v)}'`).join(' | ');
}

function generateNodeType(bundles: GroupBundle[]): string {
	const lines = bundles.map((b) => {
		const ops = b.providers.map((p) => p.nome_chave);
		return `\t'${escapeString(b.resourceSlug)}': ${unionTypeLiterals(ops)};`;
	});

	return `/* ${GEN_MARKER} - não editar manualmente */

import type { AllEntities } from 'n8n-workflow';

type NodeMap = {
${lines.join('\n')}
};

export type RocketType = AllEntities<NodeMap>;
`;
}

function generateVersionDescription(bundles: GroupBundle[]): string {
	const importLines: string[] = [];
	const spreadLines: string[] = [];
	for (const b of bundles) {
		const alias = b.exportPrefix;
		importLines.push(`import * as ${alias} from './${b.resourceSlug}';`);
		spreadLines.push(`\t\t...${alias}.description,`);
	}

	const resourceOptions = bundles
		.map(
			(b) =>
				`\t\t\t\t{ name: '${escapeString(b.descricaoGrupo)}', value: '${escapeString(b.resourceSlug)}' },`,
		)
		.join('\n');

	const defaultRes = bundles[0]?.resourceSlug ?? '';

	return `/* eslint-disable n8n-nodes-base/node-filename-against-convention */
/* ${GEN_MARKER} - não editar manualmente */

import { NodeConnectionTypes, type INodeTypeDescription } from 'n8n-workflow';

${importLines.join('\n')}

export const versionDescription: INodeTypeDescription = {
	displayName: 'Rocket',
	name: 'rocket',
	icon: { light: 'file:rocket.svg', dark: 'file:rocket-dark.svg' },
	group: ['transform'],
	version: 1,
	subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
	description: 'Consulta dados de provedores de serviços',
	defaults: {
		name: 'Rocket',
	},
	inputs: [NodeConnectionTypes.Main],
	outputs: [NodeConnectionTypes.Main],
	credentials: [
		{
			name: 'rocketApi',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
${resourceOptions}
			],
			default: '${escapeString(defaultRes)}',
		},
${spreadLines.join('\n')}
	],
};
`;
}

function generateRouter(bundles: GroupBundle[]): string {
	const importLines: string[] = [];
	const handlerBlocks: string[] = [];

	for (const b of bundles) {
		const alias = b.exportPrefix;
		importLines.push(`import * as ${alias} from './${b.resourceSlug}';`);
		const inner = b.providers
			.map(
				(p) =>
					`\t\t\t'${escapeString(p.nome_chave)}': ${alias}['${escapeString(p.nome_chave)}'].execute,`,
			)
			.join('\n');
		handlerBlocks.push(`\t'${escapeString(b.resourceSlug)}': {\n${inner}\n\t},`);
	}

	return `/* ${GEN_MARKER} - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

${importLines.join('\n')}
import type { RocketType } from './node.type';

type OperationHandler = (this: IExecuteFunctions, i: number) => Promise<IDataObject | IDataObject[]>;

const operationHandlers: Record<RocketType['resource'], Record<string, OperationHandler>> = {
${handlerBlocks.join('\n')}
};

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];
	const resource = this.getNodeParameter('resource', 0) as RocketType['resource'];
	const operation = this.getNodeParameter('operation', 0) as RocketType['operation'];
	let responseData: IDataObject | IDataObject[];
	const resourceHandlers = operationHandlers[resource];
	const operationHandler = resourceHandlers?.[operation];

	if (!operationHandler) {
		throw new NodeOperationError(
			this.getNode(),
			\`The operation "\${operation}" is not supported for resource "\${resource}"!\`,
		);
	}

	for (let i = 0; i < items.length; i++) {
		try {
			responseData = await operationHandler.call(this, i);

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			returnData.push(...executionData);
		} catch (error) {
			if (this.continueOnFail()) {
				const executionErrorData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray({ error: (error as Error).message }),
					{ itemData: { item: i } },
				);
				returnData.push(...executionErrorData);
				continue;
			}
			throw error;
		}
	}

	return [returnData];
}
`;
}

function isValidIdent(s: string): boolean {
	return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(s);
}

function removeOrphanActionDirs(actionsDir: string, expectedSlugs: Set<string>): void {
	if (!fs.existsSync(actionsDir)) {
		return;
	}
	for (const name of fs.readdirSync(actionsDir, { withFileTypes: true })) {
		if (!name.isDirectory()) {
			continue;
		}
		const slug = name.name;
		const indexPath = path.join(actionsDir, slug, 'index.ts');
		if (!fs.existsSync(indexPath)) {
			continue;
		}
		const head = fs.readFileSync(indexPath, 'utf-8').slice(0, 800);
		if (!head.includes('factory-providers-v1.ts')) {
			continue;
		}
		if (!expectedSlugs.has(slug)) {
			fs.rmSync(path.join(actionsDir, slug), { recursive: true, force: true });
			console.log(`Removido (órfão v1): actions/${slug}/`);
		}
	}
}

/** Remove *.operation.ts que não correspondem aos nome_chave atuais (evita duplicados só por casing). */
function removeStaleOperationFiles(resourceDir: string, currentNomeChaves: Set<string>): void {
	if (!fs.existsSync(resourceDir)) {
		return;
	}
	const suffix = '.operation.ts';
	for (const ent of fs.readdirSync(resourceDir, { withFileTypes: true })) {
		if (!ent.isFile() || !ent.name.endsWith(suffix)) {
			continue;
		}
		const base = ent.name.slice(0, -suffix.length);
		if (!currentNomeChaves.has(base)) {
			const full = path.join(resourceDir, ent.name);
			fs.unlinkSync(full);
			console.log(`Removido (operação obsoleta): ${path.relative(process.cwd(), full)}`);
		}
	}
}

function main(): void {
	const providers = parseProvidersData(loadJson<unknown>(LIST_PROVIDERS_PATH));
	if (providers.length === 0) {
		throw new Error('list-providers.json sem provedores');
	}

	const groupRows = parseGroupRows(loadJson<unknown>(LIST_GROUPS_PATH));
	const groupOrder = new Map<number, number>();
	groupRows.forEach((row, idx) => {
		groupOrder.set(row.id_grupo_provedor, idx);
	});

	const byGroup = new Map<number, Provider[]>();
	for (const p of providers) {
		const id = p.id_grupo_provedor;
		if (!byGroup.has(id)) {
			byGroup.set(id, []);
		}
		byGroup.get(id)!.push(p);
	}

	const config = loadConfig();
	let groupIds = [...byGroup.keys()];
	if (config?.includeGroupIds && config.includeGroupIds.length > 0) {
		const allow = new Set(config.includeGroupIds);
		groupIds = groupIds.filter((id) => allow.has(id));
	}

	groupIds.sort((a, b) => {
		const oa = groupOrder.get(a) ?? 99999;
		const ob = groupOrder.get(b) ?? 99999;
		if (oa !== ob) {
			return oa - ob;
		}
		const da = byGroup.get(a)![0].descricao_grupo ?? '';
		const db = byGroup.get(b)![0].descricao_grupo ?? '';
		return da.localeCompare(db, 'pt-BR');
	});

	const usedFileBases = new Set<string>();
	const usedResourceSlugs = new Set<string>();
	const usedExportPrefixes = new Set<string>();

	const bundles: GroupBundle[] = [];

	for (const gid of groupIds) {
		const plist = byGroup.get(gid);
		if (!plist || plist.length === 0) {
			continue;
		}
		plist.sort((a, b) => a.descricao.localeCompare(b.descricao, 'pt-BR'));

		const descricaoGrupo = plist[0].descricao_grupo?.trim() || `Grupo_${gid}`;
		let fileBase = singularizeFileBase(groupLabelToFileBase(descricaoGrupo));
		if (usedFileBases.has(fileBase)) {
			fileBase = `${fileBase}_${gid}`;
		}
		usedFileBases.add(fileBase);

		let resourceSlug = groupLabelToResourceSlug(descricaoGrupo);
		if (usedResourceSlugs.has(resourceSlug)) {
			resourceSlug = `${resourceSlug}_${gid}`;
		}
		usedResourceSlugs.add(resourceSlug);

		let exportPrefix = resourceSlugToExportPrefix(resourceSlug);
		if (usedExportPrefixes.has(exportPrefix) || !isValidIdent(exportPrefix)) {
			exportPrefix = `g${gid}Res`;
		}
		usedExportPrefixes.add(exportPrefix);

		bundles.push({
			id: gid,
			descricaoGrupo,
			resourceSlug,
			fileBase,
			exportPrefix,
			providers: plist,
		});
	}

	if (bundles.length === 0) {
		throw new Error('Nenhum grupo a gerar (filtro ou dados vazios).');
	}

	const actionsAbs = path.resolve(process.cwd(), V1_ACTIONS_DIR);
	if (!fs.existsSync(actionsAbs)) {
		fs.mkdirSync(actionsAbs, { recursive: true });
	}

	const expectedSlugs = new Set(bundles.map((b) => b.resourceSlug));
	removeOrphanActionDirs(actionsAbs, expectedSlugs);

	for (const b of bundles) {
		const dir = path.join(actionsAbs, b.resourceSlug);
		fs.mkdirSync(dir, { recursive: true });
		removeStaleOperationFiles(dir, new Set(b.providers.map((p) => p.nome_chave)));

		const opMeta: { exportKey: string; fileName: string }[] = [];
		for (const p of b.providers) {
			const { fileName, content, exportKey } = generateOperationFile(p, b.resourceSlug);
			if (!isValidIdent(exportKey)) {
				throw new Error(`nome_chave inválido como identificador: ${exportKey}`);
			}
			fs.writeFileSync(path.join(dir, fileName), content, 'utf-8');
			opMeta.push({ exportKey, fileName });
		}

		const indexContent = generateResourceIndex(b.resourceSlug, b.providers, opMeta);
		fs.writeFileSync(path.join(dir, 'index.ts'), indexContent, 'utf-8');
		console.log(`Gerado: nodes/Rocket/v1/actions/${b.resourceSlug}/ (${b.providers.length} operações)`);
	}

	fs.writeFileSync(path.join(actionsAbs, 'node.type.ts'), generateNodeType(bundles), 'utf-8');
	console.log('Gerado: nodes/Rocket/v1/actions/node.type.ts');

	fs.writeFileSync(path.join(actionsAbs, 'versionDescription.ts'), generateVersionDescription(bundles), 'utf-8');
	console.log('Gerado: nodes/Rocket/v1/actions/versionDescription.ts');

	fs.writeFileSync(path.join(actionsAbs, 'router.ts'), generateRouter(bundles), 'utf-8');
	console.log('Gerado: nodes/Rocket/v1/actions/router.ts');
}

try {
	main();
} catch (err) {
	console.error(err);
	process.exit(1);
}
