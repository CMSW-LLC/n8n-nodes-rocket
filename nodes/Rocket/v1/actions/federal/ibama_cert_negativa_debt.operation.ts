/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['ibama_cert_negativa_debt'] } },
	},
	{
			displayName: 'Bairro',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibama_cert_negativa_debt'] } },
		},
	{
			displayName: 'CPF/CNPJ',
			name: 'doc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibama_cert_negativa_debt'] } },
			required: true,
		},
	{
			displayName: 'Interessado',
			name: 'interessado',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibama_cert_negativa_debt'] } },
		},
	{
			displayName: 'Endereco',
			name: 'endereco',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibama_cert_negativa_debt'] } },
		},
	{
			displayName: 'Estado',
			name: 'estado',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibama_cert_negativa_debt'] } },
		},
	{
			displayName: 'Cidade',
			name: 'cidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibama_cert_negativa_debt'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'BAIRRO': this.getNodeParameter('bairro', i) as string,
		'DOC': this.getNodeParameter('doc', i) as string,
		'INTERESSADO': this.getNodeParameter('interessado', i) as string,
		'ENDERECO': this.getNodeParameter('endereco', i) as string,
		'ESTADO': this.getNodeParameter('estado', i) as string,
		'CIDADE': this.getNodeParameter('cidade', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'ibama_cert_negativa_debt',
		parametros,
		webhookUrl,
	});
}
