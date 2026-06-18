/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['usa_criminal'], operation: ['dockets_justia'] } },
	},
	{
			displayName: 'PARTY NAME',
			name: 'partyName',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['dockets_justia'] } },
			required: true,
		},
	{
			displayName: 'JUDGE',
			name: 'judge',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['dockets_justia'] } },
		},
	{
			displayName: 'STATE',
			name: 'state',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['dockets_justia'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'PARTY_NAME': this.getNodeParameter('partyName', i) as string,
		'JUDGE': this.getNodeParameter('judge', i) as string,
		'STATE': this.getNodeParameter('state', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'dockets_justia', parametros);
}
