/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['accuity'] } },
	},
	{
			displayName: 'LAST NAME',
			name: 'lastName',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['accuity'] } },
			required: true,
		},
	{
			displayName: 'YEAR OF BIRTH',
			name: 'yearOfBirth',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['accuity'] } },
			required: true,
		},
	{
			displayName: 'FIRST NAME',
			name: 'firstName',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['accuity'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'LAST_NAME': this.getNodeParameter('lastName', i) as string,
		'YEAR_OF_BIRTH': this.getNodeParameter('yearOfBirth', i) as string,
		'FIRST_NAME': this.getNodeParameter('firstName', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'accuity',
		parametros,
		webhookUrl,
	});
}
