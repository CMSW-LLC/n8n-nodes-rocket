/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia_ceis'] } },
	},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia_ceis'] } },
		},
	{
			displayName: 'CNPJ CPF',
			name: 'cnpjCpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia_ceis'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'CNPJ_CPF': this.getNodeParameter('cnpjCpf', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'portal_transparencia_ceis',
		parametros,
		webhookUrl,
	});
}
