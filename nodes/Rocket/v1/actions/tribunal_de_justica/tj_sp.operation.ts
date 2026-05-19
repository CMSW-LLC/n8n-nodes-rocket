/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sp'] } },
	},
	{
			displayName: 'NUM Processo',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sp'] } },
		},
	{
			displayName: 'Documento',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sp'] } },
		},
	{
			displayName: 'NOME Completo',
			name: 'nomeCompleto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sp'] } },
		},
	{
			displayName: 'GRAU Processo',
			name: 'grauProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_sp'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'NOME_COMPLETO': this.getNodeParameter('nomeCompleto', i) as string,
		'GRAU_PROCESSO': this.getNodeParameter('grauProcesso', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'tj_sp',
		parametros,
		webhookUrl,
	});
}
