/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['idwall'], operation: ['idwall_midias_n_pj'] } },
	},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_midias_n_pj'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'RAZAO SOCIAL',
			name: 'razaoSocial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_midias_n_pj'] } },
			required: true,
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_midias_n_pj'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'TOKEN': this.getNodeParameter('token', i) as string,
		'RAZAO_SOCIAL': this.getNodeParameter('razaoSocial', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'idwall_midias_n_pj',
		parametros,
		webhookUrl,
	});
}
