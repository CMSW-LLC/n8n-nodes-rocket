/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_5regiao'] } },
	},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_5regiao'] } },
		},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_5regiao'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'trf_5regiao', parametros);
}
