/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['policia'], operation: ['policia_ms'] } },
	},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_ms'] } },
			required: true,
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_ms'] } },
			required: true,
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_ms'] } },
			required: true,
		},
	{
			displayName: 'DT NASC',
			name: 'dtNasc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_ms'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'MAE': this.getNodeParameter('mae', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'DT_NASC': this.getNodeParameter('dtNasc', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'policia_ms', parametros);
}
