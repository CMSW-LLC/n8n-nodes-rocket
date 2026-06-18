/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
	},
	{
			displayName: 'NOME PARTE',
			name: 'nomeParte',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
		},
	{
			displayName: 'INSTANCIA',
			name: 'instancia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
		},
	{
			displayName: 'NUMERO PROCESSO',
			name: 'numeroProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
		},
	{
			displayName: 'DOCUMENTO PARTE',
			name: 'documentoParte',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME_PARTE': this.getNodeParameter('nomeParte', i) as string,
		'INSTANCIA': this.getNodeParameter('instancia', i) as string,
		'NUMERO_PROCESSO': this.getNodeParameter('numeroProcesso', i) as string,
		'DOCUMENTO_PARTE': this.getNodeParameter('documentoParte', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tj_sc', parametros);
}
