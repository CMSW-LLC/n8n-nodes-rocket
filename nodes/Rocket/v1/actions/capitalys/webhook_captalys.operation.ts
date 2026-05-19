/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'TICKET INPUT',
			name: 'ticketInput',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
		},
	{
			displayName: 'STATUS',
			name: 'status',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
		},
	{
			displayName: 'MESSAGE',
			name: 'message',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
		},
	{
			displayName: 'CLIENT ID',
			name: 'clientId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
		},
	{
			displayName: 'CLIENT SECRET',
			name: 'clientSecret',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
			typeOptions: { password: true },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
		},
	{
			displayName: 'USER H',
			name: 'userH',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
		},
	{
			displayName: 'PASSWORD H',
			name: 'passwordH',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['capitalys'], operation: ['webhook_captalys'] } },
			typeOptions: { password: true },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'TICKET_INPUT': this.getNodeParameter('ticketInput', i) as string,
		'STATUS': this.getNodeParameter('status', i) as string,
		'MESSAGE': this.getNodeParameter('message', i) as string,
		'CLIENT_ID': this.getNodeParameter('clientId', i) as string,
		'CLIENT_SECRET': this.getNodeParameter('clientSecret', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'USER_H': this.getNodeParameter('userH', i) as string,
		'PASSWORD_H': this.getNodeParameter('passwordH', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'webhook_captalys',
		parametros,
		webhookUrl,
	});
}
