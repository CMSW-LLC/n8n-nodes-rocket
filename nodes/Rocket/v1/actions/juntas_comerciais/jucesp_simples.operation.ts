/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['juntas_comerciais'], operation: ['jucesp_simples'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['juntas_comerciais'], operation: ['jucesp_simples'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['juntas_comerciais'], operation: ['jucesp_simples'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'NIRE',
			name: 'nire',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['juntas_comerciais'], operation: ['jucesp_simples'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['juntas_comerciais'], operation: ['jucesp_simples'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'NIRE': this.getNodeParameter('nire', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'jucesp_simples', parametros);
}
