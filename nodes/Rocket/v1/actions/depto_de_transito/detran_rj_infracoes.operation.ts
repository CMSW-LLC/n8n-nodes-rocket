/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_rj_infracoes'] } },
	},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_rj_infracoes'] } },
		},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_rj_infracoes'] } },
		},
	{
			displayName: 'CNH',
			name: 'cnh',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_rj_infracoes'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF': this.getNodeParameter('cpf', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
		'CNH': this.getNodeParameter('cnh', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'detran_rj_infracoes', parametros);
}
