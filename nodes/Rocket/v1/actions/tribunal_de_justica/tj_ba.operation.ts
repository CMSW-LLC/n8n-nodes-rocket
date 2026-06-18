/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

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
			displayName: 'RAZAO SOCIAL',
			name: 'razaoSocial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'LOGRADOURO',
			name: 'logradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'NUMERO LOGRADOURO',
			name: 'numeroLogradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'BAIRRO',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'CIDADE',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
	{
			displayName: 'MODELO CERTIDAO',
			name: 'modeloCertidao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ba'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
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

	return await rocketApiExecuteProvider.call(this, i, 'tj_ba', parametros);
}
