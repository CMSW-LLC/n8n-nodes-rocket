/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_superior'], operation: ['tse'] } },
	},
	{
			displayName: 'DT Nascimento',
			name: 'dtNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_superior'], operation: ['tse'] } },
			required: true,
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_superior'], operation: ['tse'] } },
			required: true,
		},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_superior'], operation: ['tse'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'DT_NASCIMENTO': this.getNodeParameter('dtNascimento', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'MAE': this.getNodeParameter('mae', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'tse',
		parametros,
		webhookUrl,
	});
}
