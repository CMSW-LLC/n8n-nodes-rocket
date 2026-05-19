/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['csnu'] } },
	},
	{
			displayName: 'MONTH',
			name: 'month',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['csnu'] } },
		},
	{
			displayName: 'NAME',
			name: 'name',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['csnu'] } },
			required: true,
		},
	{
			displayName: 'YEAR',
			name: 'year',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['csnu'] } },
		},
	{
			displayName: 'DAY',
			name: 'day',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['csnu'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'MONTH': this.getNodeParameter('month', i) as string,
		'NAME': this.getNodeParameter('name', i) as string,
		'YEAR': this.getNodeParameter('year', i) as string,
		'DAY': this.getNodeParameter('day', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'csnu',
		parametros,
		webhookUrl,
	});
}
