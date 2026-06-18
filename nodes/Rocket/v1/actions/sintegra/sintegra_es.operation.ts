/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_es'] } },
	},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_es'] } },
		},
	{
			displayName: 'IE',
			name: 'ie',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_es'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'IE': this.getNodeParameter('ie', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'sintegra_es', parametros);
}
