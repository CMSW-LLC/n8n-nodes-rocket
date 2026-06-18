/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
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
			displayName: 'CNPJ',
			name: 'cnpj',
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
	const parametros: IDataObject = {
		'NIRE': this.getNodeParameter('nire', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'IE': this.getNodeParameter('ie', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'cadesp_icms', parametros);
}
