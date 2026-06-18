/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_nome_mae'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_nome_mae'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_nome_mae'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_nome_mae'] } },
			required: true,
		},
	{
			displayName: 'NOME MAE',
			name: 'nomeMae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['inovamind'], operation: ['inovamind_nome_mae'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'NOME_MAE': this.getNodeParameter('nomeMae', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'inovamind_nome_mae', parametros);
}
