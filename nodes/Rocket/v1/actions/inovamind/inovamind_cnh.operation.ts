/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_cnh'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_cnh'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_cnh'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_cnh'] } },
			required: true,
		},
	{
			displayName: 'UF CNH',
			name: 'ufCnh',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_cnh'] } },
			required: true,
		},
	{
			displayName: 'N CNH',
			name: 'nCnh',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_cnh'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'UF_CNH': this.getNodeParameter('ufCnh', i) as string,
		'N_CNH': this.getNodeParameter('nCnh', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'inovamind_cnh', parametros);
}
