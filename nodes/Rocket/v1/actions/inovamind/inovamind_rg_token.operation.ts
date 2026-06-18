/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
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
			displayName: 'ORGAO EMISSOR',
			name: 'orgaoEmissor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			required: true,
		},
	{
			displayName: 'UF ORGAO EMISSOR',
			name: 'ufOrgaoEmissor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_rg_token'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'ORGAO_EMISSOR': this.getNodeParameter('orgaoEmissor', i) as string,
		'UF_ORGAO_EMISSOR': this.getNodeParameter('ufOrgaoEmissor', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'inovamind_rg_token', parametros);
}
