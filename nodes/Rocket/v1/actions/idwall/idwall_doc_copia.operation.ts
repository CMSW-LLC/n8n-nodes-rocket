/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['idwall'], operation: ['idwall_doc_copia'] } },
	},
	{
			displayName: 'URL DOC VERSO',
			name: 'urlDocVerso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_doc_copia'] } },
		},
	{
			displayName: 'URL DOC FRENTE',
			name: 'urlDocFrente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_doc_copia'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_doc_copia'] } },
			required: true,
		},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_doc_copia'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_doc_copia'] } },
			required: true,
		},
	{
			displayName: 'URL DOC',
			name: 'urlDoc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_doc_copia'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'URL_DOC_VERSO': this.getNodeParameter('urlDocVerso', i) as string,
		'URL_DOC_FRENTE': this.getNodeParameter('urlDocFrente', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'TOKEN': this.getNodeParameter('token', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'URL_DOC': this.getNodeParameter('urlDoc', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'idwall_doc_copia', parametros);
}
