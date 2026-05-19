/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_irpf'] } },
	},
	{
			displayName: 'YEAR LAST',
			name: 'yearLast',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_irpf'] } },
		},
	{
			displayName: 'DATA NASCIMENTO',
			name: 'dataNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_irpf'] } },
		},
	{
			displayName: 'YEAR FIRST',
			name: 'yearFirst',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_irpf'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_irpf'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'YEAR_LAST': this.getNodeParameter('yearLast', i) as string,
		'DATA_NASCIMENTO': this.getNodeParameter('dataNascimento', i) as string,
		'YEAR_FIRST': this.getNodeParameter('yearFirst', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'rf_irpf',
		parametros,
		webhookUrl,
	});
}
