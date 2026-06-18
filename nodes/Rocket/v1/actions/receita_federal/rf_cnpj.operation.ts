/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_cnpj'] } },
	},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_cnpj'] } },
			required: true,
		},
	{
			displayName: 'ATIVAR PESQUISA EM DADOS ABERTOS',
			name: 'dadosAbertos',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_cnpj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'DADOS_ABERTOS': this.getNodeParameter('dadosAbertos', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'rf_cnpj', parametros);
}
