/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_decisao_automatica'] } },
	},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_decisao_automatica'] } },
		},
	{
			displayName: 'SALE ORIGIN',
			name: 'saleOrigin',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_decisao_automatica'] } },
		},
	{
			displayName: 'AUTOMATICALLY DISAPPROVED',
			name: 'automaticallyDisapproved',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_decisao_automatica'] } },
		},
	{
			displayName: 'SALE ID',
			name: 'saleId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_decisao_automatica'] } },
			required: true,
		},
	{
			displayName: 'AUTOMATICALLY APPROVED',
			name: 'automaticallyApproved',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_decisao_automatica'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'SALE_ORIGIN': this.getNodeParameter('saleOrigin', i) as string,
		'AUTOMATICALLY_DISAPPROVED': this.getNodeParameter('automaticallyDisapproved', i) as string,
		'SALE_ID': this.getNodeParameter('saleId', i) as string,
		'AUTOMATICALLY_APPROVED': this.getNodeParameter('automaticallyApproved', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'alloha_indicar_decisao_automatica',
		parametros,
		webhookUrl,
	});
}
