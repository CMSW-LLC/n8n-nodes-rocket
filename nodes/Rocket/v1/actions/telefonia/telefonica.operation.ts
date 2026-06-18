/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
	},
	{
			displayName: 'NUM FINAL',
			name: 'numFinal',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'ESTADO',
			name: 'estado',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'TELEFONE',
			name: 'telefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'Cidade',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'NUM INICIAL',
			name: 'numInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'ENDERECO',
			name: 'endereco',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'Nome',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'TP PESSOA',
			name: 'tpPessoa',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'TP BUSCA',
			name: 'tpBusca',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
			required: true,
		},
	{
			displayName: 'COMPLEMENTO',
			name: 'complemento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
	{
			displayName: 'TP TELEFONE',
			name: 'tpTelefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['telefonia'], operation: ['telefonica'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NUM_FINAL': this.getNodeParameter('numFinal', i) as string,
		'ESTADO': this.getNodeParameter('estado', i) as string,
		'TELEFONE': this.getNodeParameter('telefone', i) as string,
		'CIDADE': this.getNodeParameter('cidade', i) as string,
		'NUM_INICIAL': this.getNodeParameter('numInicial', i) as string,
		'ENDERECO': this.getNodeParameter('endereco', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'TP_PESSOA': this.getNodeParameter('tpPessoa', i) as string,
		'TP_BUSCA': this.getNodeParameter('tpBusca', i) as string,
		'COMPLEMENTO': this.getNodeParameter('complemento', i) as string,
		'TP_TELEFONE': this.getNodeParameter('tpTelefone', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'telefonica', parametros);
}
