/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'CEP',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'TELEFONE',
			name: 'telefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'DDD',
			name: 'ddd',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
			required: true,
		},
	{
			displayName: 'CODIGOCONSULTA',
			name: 'codigoconsulta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'VERSAOLAYOUT',
			name: 'versaolayout',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'CODIGODISTRIBUIDOR',
			name: 'codigodistribuidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'Opc62',
			name: 'opc62',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'Opc52',
			name: 'opc52',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'CHEQUE',
			name: 'cheque',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'UFRG',
			name: 'ufrg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'NOMEMAE',
			name: 'nomemae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'NOMEPAI',
			name: 'nomepai',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'CIDADE',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'BAIRRO',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'ENDERECO',
			name: 'endereco',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
	{
			displayName: 'DATANASC',
			name: 'datanasc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_crednet_light'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
		'CEP': this.getNodeParameter('cep', i) as string,
		'TELEFONE': this.getNodeParameter('telefone', i) as string,
		'DDD': this.getNodeParameter('ddd', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'CODIGOCONSULTA': this.getNodeParameter('codigoconsulta', i) as string,
		'VERSAOLAYOUT': this.getNodeParameter('versaolayout', i) as string,
		'CODIGODISTRIBUIDOR': this.getNodeParameter('codigodistribuidor', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'OPC62': this.getNodeParameter('opc62', i) as string,
		'OPC52': this.getNodeParameter('opc52', i) as string,
		'CHEQUE': this.getNodeParameter('cheque', i) as string,
		'UFRG': this.getNodeParameter('ufrg', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'NOMEMAE': this.getNodeParameter('nomemae', i) as string,
		'NOMEPAI': this.getNodeParameter('nomepai', i) as string,
		'CIDADE': this.getNodeParameter('cidade', i) as string,
		'BAIRRO': this.getNodeParameter('bairro', i) as string,
		'ENDERECO': this.getNodeParameter('endereco', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'DATANASC': this.getNodeParameter('datanasc', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'serasa_crednet_light',
		parametros,
		webhookUrl,
	});
}
