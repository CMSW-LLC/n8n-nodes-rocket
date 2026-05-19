/**
 * Busca scripts/list-groups-providers.json a partir da API Rocket.
 * Sempre recria o arquivo (existente ou não) para garantir dados atualizados.
 * Se a API não estiver disponível e o arquivo já existir, mantém o existente como fallback.
 */

import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

const API_URL = process.env.N8N_RCK_API_URL + 'provedores/grupos';
const LIST_GROUPS_PROVIDERS_PATH = './scripts/list-groups-providers.json';

interface GroupProvider {
	id_grupo_provedor: number;
	descricao_grupo: string | null;
}

function parseGroupProvidersData(data: unknown): GroupProvider[] {
	if (Array.isArray(data)) {
		return data as GroupProvider[];
	}
	const obj = data as { grupos?: GroupProvider[]; data?: GroupProvider[] };
	return obj.grupos ?? obj.data ?? [];
}

function sortGroups(groups: GroupProvider[]): GroupProvider[] {
	return [...groups].sort((a, b) => {
		const descricaoA = (a.descricao_grupo ?? '').toLowerCase();
		const descricaoB = (b.descricao_grupo ?? '').toLowerCase();
		return descricaoA.localeCompare(descricaoB, 'pt-BR');
	});
}

function ensureOutputDir(outputPath: string): void {
	const outputDir = path.dirname(outputPath);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
}

function writeJson(outputPath: string, groups: GroupProvider[]): void {
	ensureOutputDir(outputPath);
	fs.writeFileSync(outputPath, JSON.stringify(sortGroups(groups), null, 2), 'utf-8');
}

async function main(): Promise<void> {
	const outputPath = path.resolve(process.cwd(), LIST_GROUPS_PROVIDERS_PATH);
	const apiKey = process.env.CMSW_API_KEY ?? '';

	try {
		const response = await fetch(API_URL, {
			headers: apiKey ? { 'x-api-key': apiKey } : undefined,
		});

		if (!response.ok) {
			throw new Error(
				`Falha ao buscar grupos de provedores: ${response.status} ${response.statusText}`,
			);
		}

		const data = (await response.json()) as unknown;
		const groups = parseGroupProvidersData(data);
		if (groups.length === 0) {
			throw new Error('API retornou nenhum grupo de provedor');
		}

		writeJson(outputPath, groups);
		console.log(
			`API consultada. Dados salvos em ${outputPath} (${groups.length} grupos de provedores)`,
		);
	} catch (err) {
		if (fs.existsSync(outputPath)) {
			console.warn(
				`API não disponível (${(err as Error).message}). Mantendo arquivo existente: ${outputPath}`,
			);
			return;
		}
		throw new Error(
			`API não disponível e nenhum arquivo local encontrado em ${outputPath}.\n` +
				`Configure CMSW_API_KEY e verifique a conectividade com ${API_URL}.\n` +
				`Erro original: ${(err as Error).message}`,
		);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
