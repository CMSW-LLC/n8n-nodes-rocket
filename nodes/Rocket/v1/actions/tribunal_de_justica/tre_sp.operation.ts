/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tre_sp'] } },
	},
	{
			displayName: 'DATA NASCIMENTO',
			name: 'dataNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tre_sp'] } },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tre_sp'] } },
		},
	{
			displayName: 'MAE',
			name: 'mae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tre_sp'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tre_sp'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DATA_NASCIMENTO': this.getNodeParameter('dataNascimento', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'MAE': this.getNodeParameter('mae', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tre_sp', parametros);
}
