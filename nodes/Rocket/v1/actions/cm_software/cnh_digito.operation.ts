/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_digito'] } },
	},
	{
			displayName: 'CNH',
			name: 'cnh',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_digito'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CNH': this.getNodeParameter('cnh', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'cnh_digito', parametros);
}
