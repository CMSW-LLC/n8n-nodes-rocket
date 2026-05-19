/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			required: true,
		},
	{
			displayName: 'ORGAO Emissor',
			name: 'orgaoEmissor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			required: true,
		},
	{
			displayName: 'UF ORGAO Emissor',
			name: 'ufOrgaoEmissor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'ORGAO_EMISSOR': this.getNodeParameter('orgaoEmissor', i) as string,
		'UF_ORGAO_EMISSOR': this.getNodeParameter('ufOrgaoEmissor', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'inovamind_rg_token',
		parametros,
		webhookUrl,
	});
}
