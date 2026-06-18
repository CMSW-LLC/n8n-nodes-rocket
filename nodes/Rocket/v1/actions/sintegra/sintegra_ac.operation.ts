/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_ac'] } },
	},
	{
			displayName: 'CPF CNPJ IE',
			name: 'cpfCnpjIe',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_ac'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF_CNPJ_IE': this.getNodeParameter('cpfCnpjIe', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'sintegra_ac', parametros);
}
