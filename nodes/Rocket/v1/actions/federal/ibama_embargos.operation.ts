/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['ibama_embargos'] } },
	},
	{
			displayName: 'CNPJCPF',
			name: 'cnpjcpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibama_embargos'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CNPJCPF': this.getNodeParameter('cnpjcpf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'ibama_embargos', parametros);
}
