/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

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
			displayName: 'Data de Nascimento',
			name: 'dtNascto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['rf_cpf'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'CPF': this.getNodeParameter('cpf', i) as string,
		'DT_NASCTO': this.getNodeParameter('dtNascto', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'rf_cpf',
		parametros,
		webhookUrl,
	});
}
