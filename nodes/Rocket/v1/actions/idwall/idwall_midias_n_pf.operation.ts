/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['idwall'], operation: ['idwall_midias_n_pf'] } },
	},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_midias_n_pf'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_midias_n_pf'] } },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_midias_n_pf'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'TOKEN': this.getNodeParameter('token', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'idwall_midias_n_pf', parametros);
}
