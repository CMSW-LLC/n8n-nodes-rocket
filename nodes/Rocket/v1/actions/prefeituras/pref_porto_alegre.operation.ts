/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['prefeituras'], operation: ['pref_porto_alegre'] } },
	},
	{
			displayName: 'TIPO',
			name: 'tipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['pref_porto_alegre'] } },
			required: true,
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['pref_porto_alegre'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'TIPO': this.getNodeParameter('tipo', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'pref_porto_alegre', parametros);
}
