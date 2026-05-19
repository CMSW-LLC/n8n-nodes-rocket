/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_fim_analise'] } },
	},
	{
			displayName: 'SALE ID',
			name: 'saleId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_fim_analise'] } },
			required: true,
		},
	{
			displayName: 'SALE ORIGIN',
			name: 'saleOrigin',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_fim_analise'] } },
		},
	{
			displayName: 'ANALYSIS COMPLETED',
			name: 'analysisCompleted',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_fim_analise'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_indicar_fim_analise'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'SALE_ID': this.getNodeParameter('saleId', i) as string,
		'SALE_ORIGIN': this.getNodeParameter('saleOrigin', i) as string,
		'ANALYSIS_COMPLETED': this.getNodeParameter('analysisCompleted', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'alloha_indicar_fim_analise',
		parametros,
		webhookUrl,
	});
}
