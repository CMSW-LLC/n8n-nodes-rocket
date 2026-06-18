/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia_bas'] } },
	},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia_bas'] } },
		},
	{
			displayName: 'NIS',
			name: 'nis',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia_bas'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF': this.getNodeParameter('cpf', i) as string,
		'NIS': this.getNodeParameter('nis', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'portal_transparencia_bas', parametros);
}
