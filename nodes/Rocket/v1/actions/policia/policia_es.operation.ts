/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
	},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
			required: true,
		},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
			required: true,
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
			required: true,
		},
	{
			displayName: 'NUM DOCUMENTO',
			name: 'numDocumento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
			required: true,
		},
	{
			displayName: 'NASCIMENTO',
			name: 'nascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
			required: true,
		},
	{
			displayName: 'PAI',
			name: 'pai',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
			required: true,
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['policia'], operation: ['policia_es'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'MAE': this.getNodeParameter('mae', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'NUM_DOCUMENTO': this.getNodeParameter('numDocumento', i) as string,
		'NASCIMENTO': this.getNodeParameter('nascimento', i) as string,
		'PAI': this.getNodeParameter('pai', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'policia_es', parametros);
}
