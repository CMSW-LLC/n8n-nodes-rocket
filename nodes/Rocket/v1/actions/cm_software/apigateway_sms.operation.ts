/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['apigateway_sms'] } },
	},
	{
			displayName: 'MENSAGEM',
			name: 'mensagem',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['apigateway_sms'] } },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['apigateway_sms'] } },
		},
	{
			displayName: 'TELEFONE',
			name: 'telefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['apigateway_sms'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'MENSAGEM': this.getNodeParameter('mensagem', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'TELEFONE': this.getNodeParameter('telefone', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'apigateway_sms',
		parametros,
		webhookUrl,
	});
}
