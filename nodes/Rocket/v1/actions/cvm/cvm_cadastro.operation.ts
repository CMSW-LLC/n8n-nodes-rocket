/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cvm'], operation: ['cvm_cadastro'] } },
	},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cvm'], operation: ['cvm_cadastro'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cvm'], operation: ['cvm_cadastro'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'cvm_cadastro', parametros);
}
