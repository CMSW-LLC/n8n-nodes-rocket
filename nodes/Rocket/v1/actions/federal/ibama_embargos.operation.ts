/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['ibama_embargos'] } },
	},
	{
			displayName: 'Cnpjcpf',
			name: 'cnpjcpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibama_embargos'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'CNPJCPF': this.getNodeParameter('cnpjcpf', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'ibama_embargos',
		parametros,
		webhookUrl,
	});
}
