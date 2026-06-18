/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_ma_cnh'] } },
	},
	{
			displayName: 'DATA DE NASCIMENTO',
			name: 'dataDeNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_ma_cnh'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_ma_cnh'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DATA_DE_NASCIMENTO': this.getNodeParameter('dataDeNascimento', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'detran_ma_cnh', parametros);
}
