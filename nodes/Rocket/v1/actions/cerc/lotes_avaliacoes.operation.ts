/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cerc'], operation: ['lotes_avaliacoes'] } },
	},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['lotes_avaliacoes'] } },
		},
	{
			displayName: 'LOTE ID',
			name: 'loteId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['lotes_avaliacoes'] } },
			required: true,
		},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['lotes_avaliacoes'] } },
			typeOptions: { password: true },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'LOTE_ID': this.getNodeParameter('loteId', i) as string,
		'TOKEN': this.getNodeParameter('token', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'lotes_avaliacoes', parametros);
}
