/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['registro_br'] } },
	},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['registro_br'] } },
		},
	{
			displayName: 'URL',
			name: 'url',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['registro_br'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'URL': this.getNodeParameter('url', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'registro_br', parametros);
}
