/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['bovespa'], operation: ['bovespa_balanco_financeiro'] } },
	},
	{
			displayName: 'ANO',
			name: 'ano',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bovespa'], operation: ['bovespa_balanco_financeiro'] } },
			required: true,
		},
	{
			displayName: 'EMPRESA',
			name: 'empresa',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bovespa'], operation: ['bovespa_balanco_financeiro'] } },
		},
	{
			displayName: 'TIPO DEF',
			name: 'tipoDef',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bovespa'], operation: ['bovespa_balanco_financeiro'] } },
		},
	{
			displayName: 'BALANCO',
			name: 'balanco',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bovespa'], operation: ['bovespa_balanco_financeiro'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bovespa'], operation: ['bovespa_balanco_financeiro'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'ANO': this.getNodeParameter('ano', i) as string,
		'EMPRESA': this.getNodeParameter('empresa', i) as string,
		'TIPO_DEF': this.getNodeParameter('tipoDef', i) as string,
		'BALANCO': this.getNodeParameter('balanco', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'bovespa_balanco_financeiro',
		parametros,
		webhookUrl,
	});
}
