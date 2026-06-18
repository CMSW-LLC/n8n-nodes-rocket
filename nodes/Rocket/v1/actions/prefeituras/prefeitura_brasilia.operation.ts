/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_brasilia'] } },
	},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_brasilia'] } },
		},
	{
			displayName: 'CFDF',
			name: 'cfdf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_brasilia'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_brasilia'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'CFDF': this.getNodeParameter('cfdf', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'prefeitura_brasilia', parametros);
}
