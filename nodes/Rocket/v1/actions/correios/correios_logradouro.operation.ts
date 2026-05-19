/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['correios'], operation: ['correios_logradouro'] } },
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
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NUMERO': this.getNodeParameter('numero', i) as string,
		'LOGRADOURO': this.getNodeParameter('logradouro', i) as string,
		'LOCALIDADE': this.getNodeParameter('localidade', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'correios_logradouro',
		parametros,
		webhookUrl,
	});
}
