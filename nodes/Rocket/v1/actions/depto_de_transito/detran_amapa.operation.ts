/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_amapa'] } },
	},
	{
			displayName: 'DATA NASCIMENTO',
			name: 'dataNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_amapa'] } },
			required: true,
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_amapa'] } },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['depto_de_transito'], operation: ['detran_amapa'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DATA_NASCIMENTO': this.getNodeParameter('dataNascimento', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'detran_amapa', parametros);
}
