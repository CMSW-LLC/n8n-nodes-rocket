/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
	},
	{
			displayName: 'ORGAO',
			name: 'orgao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
			required: true,
		},
	{
			displayName: 'NATURALIDADE UF',
			name: 'naturalidadeUf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'NACIONALIDADE',
			name: 'nacionalidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
			required: true,
		},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'SERIE PASSAPORTE',
			name: 'seriePassaporte',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'PAI',
			name: 'pai',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'NASCIMENTO',
			name: 'nascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'Num Passaporte',
			name: 'numPassaporte',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'NATURALIDADE',
			name: 'naturalidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
	{
			displayName: 'ORGAO UF',
			name: 'orgaoUf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_federal'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'ORGAO': this.getNodeParameter('orgao', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'NATURALIDADE_UF': this.getNodeParameter('naturalidadeUf', i) as string,
		'NACIONALIDADE': this.getNodeParameter('nacionalidade', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'MAE': this.getNodeParameter('mae', i) as string,
		'SERIE_PASSAPORTE': this.getNodeParameter('seriePassaporte', i) as string,
		'PAI': this.getNodeParameter('pai', i) as string,
		'NASCIMENTO': this.getNodeParameter('nascimento', i) as string,
		'NUM_PASSAPORTE': this.getNodeParameter('numPassaporte', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'NATURALIDADE': this.getNodeParameter('naturalidade', i) as string,
		'ORGAO_UF': this.getNodeParameter('orgaoUf', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'policia_federal',
		parametros,
		webhookUrl,
	});
}
