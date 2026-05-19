/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_3'] } },
	},
	{
			displayName: 'Documento',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_3'] } },
		},
	{
			displayName: 'NUM Processo',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_3'] } },
		},
	{
			displayName: 'Regiao',
			name: 'regiao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_3'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_3'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
		'REGIAO': this.getNodeParameter('regiao', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'trf_3',
		parametros,
		webhookUrl,
	});
}
