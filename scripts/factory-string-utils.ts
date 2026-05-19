/**
 * Utilitários partilhados pelos scripts factory-providers-v1 / factory-providers-v2 / factory-providers-v3.
 *
 * Title/sentence case usa os mesmos pacotes do eslint-plugin-n8n-nodes-base
 * (`title-case` e `sentence-case`) para o código gerado passar no lint do release.
 */

import { sentenceCase } from 'sentence-case';
import { titleCase } from 'title-case';

export function mapTipoCampo(idTipoCampo: number): 'string' | 'number' {
	if (idTipoCampo === 2 || idTipoCampo === 3 || idTipoCampo === 4) {
		return 'number';
	}
	return 'string';
}

export function escapeString(s: string): string {
	return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}

/** Normaliza separadores antes de aplicar title case. */
function normalizeLabel(s: string): string {
	return s
		.replace(/_/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

/** Corrige typos da API tipo "BIg" → "Big" antes do title case. */
function normalizeWordCasing(word: string): string {
	if (/^[A-Z]{2,}[a-z]/.test(word) && word !== word.toUpperCase()) {
		return word.charAt(0) + word.slice(1).toLowerCase();
	}
	return word;
}

function isAllUppercaseWord(word: string): boolean {
	return word === word.toUpperCase();
}

/** Typos conhecidos retornados pela API Rocket (descricao do provedor). */
const KNOWN_DESCRIPTION_TYPOS: ReadonlyArray<[RegExp, string]> = [[/\bBIg\b/g, 'Big']];

/**
 * Limpa a descricao vinda da API antes de gerar name/action (evita "B ig boost" no lint).
 */
export function sanitizeProviderDescription(descricao: string): string {
	let s = normalizeLabel(descricao);
	for (const [pattern, replacement] of KNOWN_DESCRIPTION_TYPOS) {
		s = s.replace(pattern, replacement);
	}
	return s
		.split(/\s+/)
		.map(normalizeWordCasing)
		.join(' ');
}

/** Mesma validação do eslint `node-param-operation-option-action-miscased`. */
export function isOperationOptionActionValid(action: string): boolean {
	const withoutAllUppercase = action
		.split(/\s+/)
		.filter((word) => !isAllUppercaseWord(word))
		.join(' ');
	return withoutAllUppercase === sentenceCase(withoutAllUppercase);
}

/** Mesma validação do eslint `node-param-display-name-miscased` (options.name). */
export function isOperationOptionNameValid(name: string): boolean {
	return name === titleCase(name);
}

/**
 * Title case compatível com `node-param-display-name-miscased` (pacote `title-case`).
 */
export function toTitleCase(s: string): string {
	if (!s) return s;
	const normalized = normalizeLabel(s)
		.split(/\s+/)
		.map(normalizeWordCasing)
		.join(' ');
	return titleCase(normalized);
}

/**
 * Sentence case compatível com `node-param-operation-option-action-miscased` (pacote `sentence-case`).
 */
export function toSentenceCase(s: string): string {
	if (!s) return s;
	return sentenceCase(s);
}

/**
 * Action de operation option — mesma lógica do eslint (ignora palavras 100% maiúsculas, ex.: API).
 */
export function toOperationAction(name: string): string {
	const withoutAllUppercase = name
		.split(/\s+/)
		.filter((word) => !isAllUppercaseWord(word))
		.join(' ');
	return sentenceCase(withoutAllUppercase || name);
}

/**
 * `name` + `action` de uma operation option (options do parâmetro Operation).
 */
export function toOperationOptionLabels(descricao: string): { name: string; action: string } {
	let sanitized = sanitizeProviderDescription(descricao);
	// title-case preserva frases 100% em maiúsculas (ex.: "BIG BOOST API")
	if (/^[A-Z0-9\s\-/]+$/.test(sanitized) && /[A-Z]{2,}/.test(sanitized)) {
		sanitized = sanitized.toLowerCase();
	}
	let name = toTitleCase(sanitized);
	let action = toOperationAction(name);

	// Garante valores que passam no ESLint (evita circular fix, ex. bigboost/BIg)
	if (!isOperationOptionNameValid(name)) {
		name = toTitleCase(sanitized.toLowerCase());
	}
	if (!isOperationOptionActionValid(action)) {
		action = toOperationAction(name);
	}
	if (!isOperationOptionActionValid(action)) {
		action = sentenceCase(
			name
				.split(/\s+/)
				.filter((w) => !isAllUppercaseWord(w))
				.join(' '),
		);
	}

	return { name, action };
}

/**
 * Converte UPPER_SNAKE_CASE ou snake_case para camelCase.
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
 * Retorna true se o nome do parâmetro sugere dado sensível (senha, token, etc.).
 */
export function isPasswordLikeFieldName(nomeParam: string): boolean {
	if (!nomeParam) return false;
	const normalized = nomeParam.toLowerCase().replace(/[-_\s]/g, '');
	return /(senha|password|passwd|secret|chave|token)/.test(normalized);
}

/**
 * Retorna true se o nome do parâmetro sugere um campo de e-mail.
 */
export function isEmailFieldName(nomeParam: string): boolean {
	if (!nomeParam) return false;
	const lower = nomeParam.toLowerCase();
	return /\b(email|e_mail)\b/.test(lower);
}

/**
 * Converte o fileBase gerado para a forma singular (regra n8n filename convention).
 */
export function singularizeFileBase(fileBase: string): string {
	if (!fileBase) return fileBase;
	if (!/^[A-Z0-9]+$/.test(fileBase)) return fileBase;
	if (fileBase.endsWith('DATA')) {
		return fileBase.slice(0, -4) + 'DATUM';
	}
	if (fileBase.endsWith('S') && fileBase.length > 1) {
		return fileBase.slice(0, -1);
	}
	return fileBase;
}
