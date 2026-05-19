/**
 * Utilitários partilhados pelos scripts factory-providers-v1 / factory-providers-v2 / factory-providers-v3.
 */

export function mapTipoCampo(idTipoCampo: number): 'string' | 'number' {
	if (idTipoCampo === 2 || idTipoCampo === 3 || idTipoCampo === 4) {
		return 'number';
	}
	return 'string';
}

export function escapeString(s: string): string {
	return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}

/**
 * Converte qualquer string (UPPER_SNAKE_CASE, snake_case, camelCase, espaços) em Title Case.
 * Sequências de 2+ letras maiúsculas são tratadas como siglas e mantidas em caixa alta.
 * Ex: "LAST_NAME" → "Last Name" | "CPF_DO_CLIENTE" → "CPF do Cliente" | "dataVencimento" → "Data Vencimento"
 */
export function toTitleCase(s: string): string {
	return s
		.replace(/_/g, ' ')
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.split(/\s+/)
		.filter((w) => w.length > 0)
		.map((word) => {
			if (/^[A-Z]{2,}$/.test(word)) return word;
			// Regra n8n: "id" deve sempre ser "ID" em displayNames
			if (word.toLowerCase() === 'id') return 'ID';
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(' ')
		.trim();
}

/**
 * Converte UPPER_SNAKE_CASE ou snake_case para camelCase.
 * Ex: "LAST_NAME" → "lastName" | "cpf_do_cliente" → "cpfDoCliente"
 */
export function toCamelCase(s: string): string {
	const lower = s.toLowerCase();
	return lower.replace(/[^a-z0-9]+(.)/g, (_, chr: string) => (chr as string).toUpperCase());
}

/** Slug para valor do parâmetro resource (minúsculas, underscore). */
export function groupLabelToResourceSlug(descricaoGrupo: string): string {
	return (
		descricaoGrupo
			.trim()
			.toLowerCase()
			.replace(/\s+/g, '_')
			.replace(/[^a-z0-9_]/g, '')
			.replace(/_+/g, '_')
			.replace(/^_|_$/g, '') || 'grupo'
	);
}

/** Nome de ficheiro base: ACERTIDDescription -> ACERTID */
export function groupLabelToFileBase(descricaoGrupo: string): string {
	const compact = descricaoGrupo.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
	return compact || 'Grupo';
}

/** banco_central -> bancoCentral */
export function resourceSlugToExportPrefix(slug: string): string {
	return slug.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
}

/**
 * Converte para sentence case: apenas o primeiro caractere fica maiúsculo, o restante minúsculo.
 * Usado no campo `action` das options para satisfazer a regra
 * `node-param-operation-option-action-miscased` do n8n-nodes-base.
 * Ex: "Big Boost API Bigboost" → "Big boost api bigboost"
 */
export function toSentenceCase(s: string): string {
	if (!s) return s;
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

/**
 * Retorna true se o nome do parâmetro sugere dado sensível (senha, token, etc.).
 * Usado para adicionar `typeOptions: { password: true }` a campos string,
 * satisfazendo a regra `node-param-type-options-password-missing`.
 */
export function isPasswordLikeFieldName(nomeParam: string): boolean {
	if (!nomeParam) return false;
	const lower = nomeParam.toLowerCase();
	return /\b(senha|password|token|secret|chave)\b/.test(lower);
}

/**
 * Retorna true se o nome do parâmetro sugere um campo de e-mail.
 * Usado para adicionar `placeholder: 'name@email.com'`,
 * satisfazendo a regra `node-param-placeholder-missing-email`.
 */
export function isEmailFieldName(nomeParam: string): boolean {
	if (!nomeParam) return false;
	const lower = nomeParam.toLowerCase();
	return /\b(email|e_mail)\b/.test(lower);
}

/**
 * Converte o fileBase gerado para a forma singular, satisfazendo a regra
 * `node-resource-description-filename-against-convention` do n8n-nodes-base.
 *
 * Regras aplicadas (na ordem):
 *  1. Palavra toda em maiúsculas terminando em "DATA" → substitui por "DATUM"
 *     Ex: "BIGDATA" → "BIGDATUM"
 *  2. Palavra toda em maiúsculas terminando em "S" → remove o "S" final
 *     Ex: "CORREIOS" → "CORREIO", "PREFEITURAS" → "PREFEITURA"
 *  3. Outros casos (nomes mistos como "LexisNexis") → mantém sem alteração.
 */
export function singularizeFileBase(fileBase: string): string {
	if (!fileBase) return fileBase;
	// Aplica apenas a strings inteiramente em maiúsculas/dígitos (evita tocar em nomes mistos)
	if (!/^[A-Z0-9]+$/.test(fileBase)) return fileBase;
	// Caso especial: termina em "DATA" → "DATUM"
	if (fileBase.endsWith('DATA')) {
		return fileBase.slice(0, -4) + 'DATUM';
	}
	// Caso geral: termina em "S" → remove o "S"
	if (fileBase.endsWith('S') && fileBase.length > 1) {
		return fileBase.slice(0, -1);
	}
	return fileBase;
}
