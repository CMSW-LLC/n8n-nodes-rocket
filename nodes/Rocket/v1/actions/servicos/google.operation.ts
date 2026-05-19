/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['servicos'], operation: ['google'] } },
	},
	{
			displayName: 'KEY',
			name: 'key',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['servicos'], operation: ['google'] } },
			required: true,
		},
	{
			displayName: 'LOCALIZACAO',
			name: 'localizacao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['servicos'], operation: ['google'] } },
		},
	{
			displayName: 'NOME EXATO',
			name: 'nomeExato',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['servicos'], operation: ['google'] } },
		},
	{
			displayName: 'NOME E KEY EXATOS',
			name: 'nomeEKeyExatos',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['servicos'], operation: ['google'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['servicos'], operation: ['google'] } },
			required: true,
		},
	{
			displayName: 'KEY EXATO',
			name: 'keyExato',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['servicos'], operation: ['google'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'KEY': this.getNodeParameter('key', i) as string,
		'LOCALIZACAO': this.getNodeParameter('localizacao', i) as string,
		'NOME_EXATO': this.getNodeParameter('nomeExato', i) as string,
		'NOME_E_KEY_EXATOS': this.getNodeParameter('nomeEKeyExatos', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'KEY_EXATO': this.getNodeParameter('keyExato', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'google',
		parametros,
		webhookUrl,
	});
}
