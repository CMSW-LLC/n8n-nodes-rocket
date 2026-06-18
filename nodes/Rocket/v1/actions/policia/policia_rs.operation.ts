/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['policia'], operation: ['policia_rs'] } },
	},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rs'] } },
			required: true,
		},
	{
			displayName: 'DATA NASCIMENTO',
			name: 'dataNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rs'] } },
			required: true,
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rs'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'DATA_NASCIMENTO': this.getNodeParameter('dataNascimento', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'policia_rs', parametros);
}
