/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['secr_da_fazenda'], operation: ['cadesp_icms'] } },
	},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['secr_da_fazenda'], operation: ['cadesp_icms'] } },
		},
	{
			displayName: 'Nire',
			name: 'nire',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['secr_da_fazenda'], operation: ['cadesp_icms'] } },
		},
	{
			displayName: 'Inscricao Estadual',
			name: 'ie',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['secr_da_fazenda'], operation: ['cadesp_icms'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'NIRE': this.getNodeParameter('nire', i) as string,
		'IE': this.getNodeParameter('ie', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'cadesp_icms',
		parametros,
		webhookUrl,
	});
}
