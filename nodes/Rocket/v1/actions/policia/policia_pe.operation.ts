/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
	},
	{
			displayName: 'ESTADO',
			name: 'estado',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
			required: true,
		},
	{
			displayName: 'DATA EXP RG',
			name: 'dataExpRg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
			required: true,
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
			required: true,
		},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
			required: true,
		},
	{
			displayName: 'PAI',
			name: 'pai',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'NACIONALIDADE',
			name: 'nacionalidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'NATURALIDADE',
			name: 'naturalidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'UF NATURALIDADE',
			name: 'ufNaturalidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'ESTADO CIVIL',
			name: 'estadoCivil',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'NASCIMENTO',
			name: 'nascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
			required: true,
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
			required: true,
		},
	{
			displayName: 'ORGAOEMISSOR',
			name: 'orgaoemissor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'ESTADOEMISSOR',
			name: 'estadoemissor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'LOGRADOURO',
			name: 'logradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'BAIRRO',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
	{
			displayName: 'CIDADE',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pe'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'ESTADO': this.getNodeParameter('estado', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'DATA_EXP_RG': this.getNodeParameter('dataExpRg', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'MAE': this.getNodeParameter('mae', i) as string,
		'PAI': this.getNodeParameter('pai', i) as string,
		'NACIONALIDADE': this.getNodeParameter('nacionalidade', i) as string,
		'NATURALIDADE': this.getNodeParameter('naturalidade', i) as string,
		'UF_NATURALIDADE': this.getNodeParameter('ufNaturalidade', i) as string,
		'ESTADO_CIVIL': this.getNodeParameter('estadoCivil', i) as string,
		'NASCIMENTO': this.getNodeParameter('nascimento', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'ORGAOEMISSOR': this.getNodeParameter('orgaoemissor', i) as string,
		'ESTADOEMISSOR': this.getNodeParameter('estadoemissor', i) as string,
		'LOGRADOURO': this.getNodeParameter('logradouro', i) as string,
		'BAIRRO': this.getNodeParameter('bairro', i) as string,
		'CIDADE': this.getNodeParameter('cidade', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'policia_pe',
		parametros,
		webhookUrl,
	});
}
