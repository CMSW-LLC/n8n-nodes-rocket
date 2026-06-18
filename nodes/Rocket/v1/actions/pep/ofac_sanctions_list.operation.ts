/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
	},
	{
			displayName: 'STATE PROVINCE',
			name: 'stateProvince',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
		},
	{
			displayName: 'COUNTRY',
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
			displayName: 'PROGRAM',
			name: 'program',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['ofac_sanctions_list'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'STATE_PROVINCE': this.getNodeParameter('stateProvince', i) as string,
		'COUNTRY': this.getNodeParameter('country', i) as string,
		'NAME': this.getNodeParameter('name', i) as string,
		'SCORE': this.getNodeParameter('score', i) as string,
		'LIST': this.getNodeParameter('list', i) as string,
		'PROGRAM': this.getNodeParameter('program', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'ofac_sanctions_list', parametros);
}
