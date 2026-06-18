/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['receita_federal'], operation: ['consulta_rf_qsa'] } },
	},
	{
			displayName: 'CNPJ Da Empresa',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['consulta_rf_qsa'] } },
			required: true,
		},
	{
			displayName: 'HABILITA CONSULTA EM DADOS ABERTOS',
			name: 'dadosAbertos',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['consulta_rf_qsa'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'DADOS_ABERTOS': this.getNodeParameter('dadosAbertos', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'consulta_rf_qsa', parametros);
}
