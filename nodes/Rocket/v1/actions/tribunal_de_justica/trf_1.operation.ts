/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
	},
	{
			displayName: 'QTDRET',
			name: 'qtdret',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
		},
	{
			displayName: 'PORREGIAO',
			name: 'porregiao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
		},
	{
			displayName: 'ESTADO',
			name: 'estado',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
			required: true,
		},
	{
			displayName: 'CIDADE',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
		},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
			required: true,
		},
	{
			displayName: 'PROCESSO',
			name: 'processo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_1'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'QTDRET': this.getNodeParameter('qtdret', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'PORREGIAO': this.getNodeParameter('porregiao', i) as string,
		'ESTADO': this.getNodeParameter('estado', i) as string,
		'CIDADE': this.getNodeParameter('cidade', i) as string,
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
		'PROCESSO': this.getNodeParameter('processo', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'trf_1',
		parametros,
		webhookUrl,
	});
}
