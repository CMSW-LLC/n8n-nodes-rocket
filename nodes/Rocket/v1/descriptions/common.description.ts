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
		'Opcional. Se preenchida, execução assíncrona: a API retorna ticket (202) e envia o resultado para esta URL (ex.: …/n8n/callback). Se vazia, execução síncrona: o node aguarda e retorna os dados do provedor na mesma chamada (timeout até 120s). Não use a URL do próprio webhook N8N de entrada.',
	placeholder: 'https://rocket-api-cache.cmsw.com/n8n/callback',
};
