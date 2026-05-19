/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CEP',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
			required: true,
		},
	{
			displayName: 'Bairro',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
		},
	{
			displayName: 'Telefone',
			name: 'telefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
		},
	{
			displayName: 'Cidade',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
			required: true,
		},
	{
			displayName: 'NUMERO',
			name: 'numero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
		},
	{
			displayName: 'Logradouro',
			name: 'logradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
			required: true,
		},
	{
			displayName: 'Complemento',
			name: 'complemento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
		},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_endereco_token'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CEP': this.getNodeParameter('cep', i) as string,
		'BAIRRO': this.getNodeParameter('bairro', i) as string,
		'TELEFONE': this.getNodeParameter('telefone', i) as string,
		'CIDADE': this.getNodeParameter('cidade', i) as string,
		'NUMERO': this.getNodeParameter('numero', i) as string,
		'LOGRADOURO': this.getNodeParameter('logradouro', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'COMPLEMENTO': this.getNodeParameter('complemento', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'inovamind_endereco_token',
		parametros,
		webhookUrl,
	});
}
