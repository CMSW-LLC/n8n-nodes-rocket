/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia'] } },
	},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia'] } },
		},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia'] } },
		},
	{
			displayName: 'ID DETALHE',
			name: 'idDetalhe',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['portal_transparencia'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
		'ID_DETALHE': this.getNodeParameter('idDetalhe', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'portal_transparencia', parametros);
}
