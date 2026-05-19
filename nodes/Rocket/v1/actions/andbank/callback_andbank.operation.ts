/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['andbank'], operation: ['callback_andbank'] } },
	},
	{
			displayName: 'TICKET CALLBACK',
			name: 'ticketCallback',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['andbank'], operation: ['callback_andbank'] } },
			required: true,
		},
	{
			displayName: 'APROVACAO COMPLIANCE',
			name: 'aprovacaoCompliance',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['andbank'], operation: ['callback_andbank'] } },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['andbank'], operation: ['callback_andbank'] } },
		},
	{
			displayName: 'APROVACAO AUTOMATICA',
			name: 'aprovacaoAutomatica',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['andbank'], operation: ['callback_andbank'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'TICKET_CALLBACK': this.getNodeParameter('ticketCallback', i) as string,
		'APROVACAO_COMPLIANCE': this.getNodeParameter('aprovacaoCompliance', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'APROVACAO_AUTOMATICA': this.getNodeParameter('aprovacaoAutomatica', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'callback_andbank',
		parametros,
		webhookUrl,
	});
}
