/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
	},
	{
			displayName: 'STATE Province',
			name: 'stateProvince',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
		},
	{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
		},
	{
			displayName: 'NAME',
			name: 'name',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
			required: true,
		},
	{
			displayName: 'SCORE',
			name: 'score',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
		},
	{
			displayName: 'LIST',
			name: 'list',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
		},
	{
			displayName: 'Program',
			name: 'program',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'STATE_PROVINCE': this.getNodeParameter('stateProvince', i) as string,
		'COUNTRY': this.getNodeParameter('country', i) as string,
		'NAME': this.getNodeParameter('name', i) as string,
		'SCORE': this.getNodeParameter('score', i) as string,
		'LIST': this.getNodeParameter('list', i) as string,
		'PROGRAM': this.getNodeParameter('program', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'ofac_sanctions_list',
		parametros,
		webhookUrl,
	});
}
