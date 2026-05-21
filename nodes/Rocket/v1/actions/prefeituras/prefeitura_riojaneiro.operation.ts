/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_riojaneiro'] } },
	},
	{
			displayName: 'INSCRICAO',
			name: 'inscricao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_riojaneiro'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_riojaneiro'] } },
		},
	{
			displayName: 'DESCRICAO',
			name: 'descricao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_riojaneiro'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_riojaneiro'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'INSCRICAO': this.getNodeParameter('inscricao', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'DESCRICAO': this.getNodeParameter('descricao', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'prefeitura_riojaneiro',
		parametros,
		webhookUrl,
	});
}
