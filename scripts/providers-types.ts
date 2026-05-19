/**
 * Tipos e utilitários partilhados entre factory-providers.ts e factory-providers-v1.ts
 */

export interface Parametro {
	id_list_param: string;
	nome_param: string;
	descricao: string;
	id_tipo_campo: number;
	is_mandatory: number;
}

export interface Provider {
	id_site_provedor: number;
	nome_chave: string;
	descricao: string;
	id_grupo_provedor: number;
	descricao_grupo: string;
	parametros: Parametro[];
}

export function parseProvidersData(data: unknown): Provider[] {
	if (Array.isArray(data)) {
		return data;
	}
	const obj = data as { provedores?: Provider[]; data?: Provider[] };
	return obj.provedores ?? obj.data ?? [];
}
