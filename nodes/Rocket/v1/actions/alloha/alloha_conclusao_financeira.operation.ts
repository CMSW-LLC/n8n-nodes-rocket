/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['alloha'], operation: ['alloha_conclusao_financeira'] } },
	},
	{
			displayName: 'STATUS SPC',
			name: 'statusSpc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_conclusao_financeira'] } },
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_conclusao_financeira'] } },
		},
	{
			displayName: 'STATUS SERASA',
			name: 'statusSerasa',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_conclusao_financeira'] } },
		},
	{
			displayName: 'STATUS RF',
			name: 'statusRf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_conclusao_financeira'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_conclusao_financeira'] } },
			required: true,
		},
	{
			displayName: 'SALE ID',
			name: 'saleId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_conclusao_financeira'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'STATUS_SPC': this.getNodeParameter('statusSpc', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'STATUS_SERASA': this.getNodeParameter('statusSerasa', i) as string,
		'STATUS_RF': this.getNodeParameter('statusRf', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'SALE_ID': this.getNodeParameter('saleId', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'alloha_conclusao_financeira',
		parametros,
		webhookUrl,
	});
}
