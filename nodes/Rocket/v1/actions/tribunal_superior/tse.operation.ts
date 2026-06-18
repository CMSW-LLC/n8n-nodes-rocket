/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_superior'], operation: ['tse'] } },
	},
	{
			displayName: 'DT NASCIMENTO',
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
	const parametros: IDataObject = {
		'DT_NASCIMENTO': this.getNodeParameter('dtNascimento', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'MAE': this.getNodeParameter('mae', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tse', parametros);
}
