/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['receita_federal'], operation: ['consulta_rf_qsa'] } },
	},
	{
			displayName: 'CNPJ da Empresa',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['consulta_rf_qsa'] } },
			required: true,
		},
	{
			displayName: 'Habilita Consulta em DADOS Abertos',
			name: 'dadosAbertos',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['consulta_rf_qsa'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'DADOS_ABERTOS': this.getNodeParameter('dadosAbertos', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'consulta_rf_qsa',
		parametros,
		webhookUrl,
	});
}
