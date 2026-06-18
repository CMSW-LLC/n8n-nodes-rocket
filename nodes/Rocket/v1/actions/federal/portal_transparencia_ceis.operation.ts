/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
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
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia_ceis'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CNPJ_CPF': this.getNodeParameter('cnpjCpf', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'portal_transparencia_ceis', parametros);
}
