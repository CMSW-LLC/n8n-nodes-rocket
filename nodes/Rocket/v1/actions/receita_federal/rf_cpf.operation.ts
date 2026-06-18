/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_cpf'] } },
	},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_cpf'] } },
			required: true,
		},
	{
			displayName: 'Data De Nascimento',
			name: 'dtNascto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_cpf'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF': this.getNodeParameter('cpf', i) as string,
		'DT_NASCTO': this.getNodeParameter('dtNascto', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'rf_cpf', parametros);
}
