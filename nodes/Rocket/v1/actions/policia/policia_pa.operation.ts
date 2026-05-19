/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
	},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
			required: true,
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
			required: true,
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
			required: true,
		},
	{
			displayName: 'ESTADOEMISSOR',
			name: 'estadoemissor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
			required: true,
		},
	{
			displayName: 'CIDADE',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
			required: true,
		},
	{
			displayName: 'ESTADO',
			name: 'estado',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
			required: true,
		},
	{
			displayName: 'PAI',
			name: 'pai',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
		},
	{
			displayName: 'NASCIMENTO',
			name: 'nascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
			required: true,
		},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_pa'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'CPF': this.getNodeParameter('cpf', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'ESTADOEMISSOR': this.getNodeParameter('estadoemissor', i) as string,
		'CIDADE': this.getNodeParameter('cidade', i) as string,
		'ESTADO': this.getNodeParameter('estado', i) as string,
		'PAI': this.getNodeParameter('pai', i) as string,
		'NASCIMENTO': this.getNodeParameter('nascimento', i) as string,
		'MAE': this.getNodeParameter('mae', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'policia_pa',
		parametros,
		webhookUrl,
	});
}
