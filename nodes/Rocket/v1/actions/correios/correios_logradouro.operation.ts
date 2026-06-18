/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['correios'], operation: ['correios_logradouro'] } },
	},
	{
			displayName: 'LOCALIDADE',
			name: 'localidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['correios'], operation: ['correios_logradouro'] } },
			required: true,
		},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['correios'], operation: ['correios_logradouro'] } },
			required: true,
		},
	{
			displayName: 'NUMERO',
			name: 'numero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['correios'], operation: ['correios_logradouro'] } },
		},
	{
			displayName: 'LOGRADOURO',
			name: 'logradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['correios'], operation: ['correios_logradouro'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'LOCALIDADE': this.getNodeParameter('localidade', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
		'NUMERO': this.getNodeParameter('numero', i) as string,
		'LOGRADOURO': this.getNodeParameter('logradouro', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'correios_logradouro', parametros);
}
