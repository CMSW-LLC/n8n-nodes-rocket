/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
	},
	{
			displayName: 'GRAU',
			name: 'grau',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'RAZAO Social',
			name: 'razaoSocial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'Logradouro',
			name: 'logradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'NUMERO Logradouro',
			name: 'numeroLogradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'Bairro',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'Cidade',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'Modelo Certidao',
			name: 'modeloCertidao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'GRAU': this.getNodeParameter('grau', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'RAZAO_SOCIAL': this.getNodeParameter('razaoSocial', i) as string,
		'LOGRADOURO': this.getNodeParameter('logradouro', i) as string,
		'NUMERO_LOGRADOURO': this.getNodeParameter('numeroLogradouro', i) as string,
		'BAIRRO': this.getNodeParameter('bairro', i) as string,
		'CIDADE': this.getNodeParameter('cidade', i) as string,
		'MODELO_CERTIDAO': this.getNodeParameter('modeloCertidao', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'tj_ba',
		parametros,
		webhookUrl,
	});
}
