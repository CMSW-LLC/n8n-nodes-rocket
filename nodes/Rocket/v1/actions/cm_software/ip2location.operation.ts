/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['ip2location'] } },
	},
	{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['ip2location'] } },
			required: true,
		},
	{
			displayName: 'KEY',
			name: 'key',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['ip2location'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'IP': this.getNodeParameter('ip', i) as string,
		'KEY': this.getNodeParameter('key', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'ip2location', parametros);
}
