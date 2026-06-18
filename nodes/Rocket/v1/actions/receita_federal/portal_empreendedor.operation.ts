/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['receita_federal'], operation: ['portal_empreendedor'] } },
	},
	{
			displayName: 'DATA NASCIMENTO',
			name: 'dataNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['portal_empreendedor'] } },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['portal_empreendedor'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DATA_NASCIMENTO': this.getNodeParameter('dataNascimento', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'portal_empreendedor', parametros);
}
