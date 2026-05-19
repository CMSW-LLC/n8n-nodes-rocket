/**
 * Busca scripts/list-providers.json a partir da API Rocket.
 * Sempre recria o arquivo (existente ou não) para garantir dados atualizados.
 * Se a API não estiver disponível e o arquivo já existir, mantém o existente como fallback.
 */

import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

import { sanitizeProviderDescription } from './factory-string-utils';
import { parseProvidersData, type Provider } from './providers-types';

function sanitizeProvidersList(providers: Provider[]): Provider[] {
	return providers.map((p) => ({
		...p,
		descricao: sanitizeProviderDescription(p.descricao),
	}));
}

function sanitizeProvidersRaw(raw: unknown): unknown {
	const providers = parseProvidersData(raw);
	if (providers.length === 0) {
		return raw;
	}
	const sanitized = sanitizeProvidersList(providers);
	if (Array.isArray(raw)) {
		return sanitized;
	}
	const obj = raw as { provedores?: Provider[]; data?: Provider[] };
	if (obj.provedores) {
		return { ...obj, provedores: sanitized };
	}
	if (obj.data) {
		return { ...obj, data: sanitized };
	}
	return sanitized;
}

const API_URL = process.env.N8N_RCK_API_URL + 'provedores';
const LIST_PROVIDERS_PATH = './scripts/list-providers.json';

async function main(): Promise<void> {
	const listProvidersPath = path.resolve(process.cwd(), LIST_PROVIDERS_PATH);
	const apiKey = process.env.CMSW_API_KEY ?? '';

	try {
		const response = await fetch(API_URL, {
			headers: apiKey ? { 'x-api-key': apiKey } : undefined,
		});
		if (!response.ok) {
			throw new Error(`Falha ao buscar provedores: ${response.status} ${response.statusText}`);
		}
		const raw = (await response.json()) as unknown;
		const providers = parseProvidersData(raw);
		if (providers.length === 0) {
			throw new Error('API retornou nenhum provedor');
		}

		const sanitizedRaw = sanitizeProvidersRaw(raw);

		const listProvidersDir = path.dirname(listProvidersPath);
		if (!fs.existsSync(listProvidersDir)) {
			fs.mkdirSync(listProvidersDir, { recursive: true });
		}
		fs.writeFileSync(listProvidersPath, JSON.stringify(sanitizedRaw, null, 2), 'utf-8');
		console.log(`API consultada. Dados salvos em ${listProvidersPath} (${providers.length} provedores)`);
	} catch (err) {
		if (fs.existsSync(listProvidersPath)) {
			console.warn(
				`API não disponível (${(err as Error).message}). Mantendo arquivo existente: ${listProvidersPath}`,
			);
			return;
		}
		throw new Error(
			`API não disponível e nenhum arquivo local encontrado em ${listProvidersPath}.\n` +
				`Configure CMSW_API_KEY e verifique a conectividade com ${API_URL}.\n` +
				`Erro original: ${(err as Error).message}`,
		);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
