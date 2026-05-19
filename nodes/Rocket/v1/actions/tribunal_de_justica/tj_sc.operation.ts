/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
	},
	{
			displayName: 'NOME PARTE',
			name: 'nomeParte',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
		},
	{
			displayName: 'Instancia',
			name: 'instancia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
		},
	{
			displayName: 'NUMERO Processo',
			name: 'numeroProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
		},
	{
			displayName: 'Documento PARTE',
			name: 'documentoParte',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sc'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NOME_PARTE': this.getNodeParameter('nomeParte', i) as string,
		'INSTANCIA': this.getNodeParameter('instancia', i) as string,
		'NUMERO_PROCESSO': this.getNodeParameter('numeroProcesso', i) as string,
		'DOCUMENTO_PARTE': this.getNodeParameter('documentoParte', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'tj_sc',
		parametros,
		webhookUrl,
	});
}
