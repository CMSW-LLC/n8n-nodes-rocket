import type { INodeProperties } from 'n8n-workflow';

/*
export const apiKeyDescription: INodeProperties = {
	displayName: 'API Key',
	name: 'apiKey',
	type: 'string',
	typeOptions: { password: true },
	default: '',
	description: 'Chave de API para autenticação no Rocket (header x-api-key)',
	placeholder: 'Informe a API Key',
	required: true,
}; */

export const webhookUrlDescription: INodeProperties = {
	displayName: 'URL Webhook',
	name: 'webhookUrl',
	type: 'string',
	default: '',
	description:
		'URL onde a Rocket API (rocket-api-cache) recebe o resultado assíncrono, ex.: …/n8n/callback. Não use a URL do próprio webhook N8N de entrada — isso re-dispara o fluxo e gera várias chamadas a execute-provider.',
	placeholder: 'https://rocket-api-cache.cmsw.com/n8n/callback',
	required: true,
};
