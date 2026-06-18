/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_go'] } },
	},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_go'] } },
			required: true,
		},
	{
			displayName: 'NOME PARTE',
			name: 'nomeParte',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_go'] } },
		},
	{
			displayName: 'GRAU',
			name: 'grau',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_go'] } },
		},
	{
			displayName: 'CAPITAL INTERIOR',
			name: 'capitalInterior',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_go'] } },
		},
	{
			displayName: 'NUM PROCESSO',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_go'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
		'NOME_PARTE': this.getNodeParameter('nomeParte', i) as string,
		'GRAU': this.getNodeParameter('grau', i) as string,
		'CAPITAL_INTERIOR': this.getNodeParameter('capitalInterior', i) as string,
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tj_go', parametros);
}
