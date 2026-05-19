/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['usa_criminal'], operation: ['dockets_justia'] } },
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
	{
			displayName: 'PARTY NAME',
			name: 'partyName',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['dockets_justia'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'JUDGE': this.getNodeParameter('judge', i) as string,
		'STATE': this.getNodeParameter('state', i) as string,
		'PARTY_NAME': this.getNodeParameter('partyName', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'dockets_justia',
		parametros,
		webhookUrl,
	});
}
