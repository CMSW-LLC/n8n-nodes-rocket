/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['capitalys'], operation: ['api_captalys'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['api_captalys'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['api_captalys'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Ticket INPUT',
			name: 'ticketInput',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['api_captalys'] } },
			required: true,
		},
	{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['api_captalys'] } },
			required: true,
		},
	{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['api_captalys'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['api_captalys'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'TICKET_INPUT': this.getNodeParameter('ticketInput', i) as string,
		'CLIENT_ID': this.getNodeParameter('clientId', i) as string,
		'CLIENT_SECRET': this.getNodeParameter('clientSecret', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'api_captalys',
		parametros,
		webhookUrl,
	});
}
