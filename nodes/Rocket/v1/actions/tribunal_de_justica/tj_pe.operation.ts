/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
	},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
		},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
		},
	{
			displayName: 'PROCESSO',
			name: 'processo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
		},
	{
			displayName: 'ADVOGADO',
			name: 'advogado',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
		},
	{
			displayName: 'OAB',
			name: 'oab',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
		},
	{
			displayName: 'PAI',
			name: 'pai',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pe'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF': this.getNodeParameter('cpf', i) as string,
		'MAE': this.getNodeParameter('mae', i) as string,
		'PROCESSO': this.getNodeParameter('processo', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'ADVOGADO': this.getNodeParameter('advogado', i) as string,
		'OAB': this.getNodeParameter('oab', i) as string,
		'PAI': this.getNodeParameter('pai', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tj_pe', parametros);
}
