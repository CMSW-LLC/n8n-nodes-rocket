/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['usa_criminal'], operation: ['interpol'] } },
	},
	{
			displayName: 'FORE NAMES',
			name: 'foreNames',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['interpol'] } },
		},
	{
			displayName: 'LAST NAME',
			name: 'lastName',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['interpol'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'FORE_NAMES': this.getNodeParameter('foreNames', i) as string,
		'LAST_NAME': this.getNodeParameter('lastName', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'interpol',
		parametros,
		webhookUrl,
	});
}
