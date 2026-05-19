/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ce'] } },
	},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ce'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ce'] } },
		},
	{
			displayName: 'GRAU',
			name: 'grau',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ce'] } },
		},
	{
			displayName: 'NUM PROCESSO',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_ce'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'GRAU': this.getNodeParameter('grau', i) as string,
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'tj_ce',
		parametros,
		webhookUrl,
	});
}
