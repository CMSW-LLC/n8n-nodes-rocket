/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

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
	const parametros: IDataObject = {
		'ANO': this.getNodeParameter('ano', i) as string,
		'EMPRESA': this.getNodeParameter('empresa', i) as string,
		'TIPO_DEF': this.getNodeParameter('tipoDef', i) as string,
		'BALANCO': this.getNodeParameter('balanco', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'bovespa_balanco_financeiro', parametros);
}
