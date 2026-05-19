/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
	},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
			required: true,
		},
	{
			displayName: 'Bairro',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
	{
			displayName: 'Nascimento',
			name: 'nascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
			required: true,
		},
	{
			displayName: 'CEP',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
			required: true,
		},
	{
			displayName: 'PAI',
			name: 'pai',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
	{
			displayName: 'Logradouro',
			name: 'logradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
	{
			displayName: 'NUMERO',
			name: 'numero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
	{
			displayName: 'Expedicao',
			name: 'expedicao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_rj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'CPF': this.getNodeParameter('cpf', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'BAIRRO': this.getNodeParameter('bairro', i) as string,
		'NASCIMENTO': this.getNodeParameter('nascimento', i) as string,
		'CEP': this.getNodeParameter('cep', i) as string,
		'MAE': this.getNodeParameter('mae', i) as string,
		'PAI': this.getNodeParameter('pai', i) as string,
		'LOGRADOURO': this.getNodeParameter('logradouro', i) as string,
		'NUMERO': this.getNodeParameter('numero', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'EXPEDICAO': this.getNodeParameter('expedicao', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'policia_rj',
		parametros,
		webhookUrl,
	});
}
