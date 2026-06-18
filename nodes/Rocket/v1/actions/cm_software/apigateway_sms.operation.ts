/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['apigateway_sms'] } },
	},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
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
	const parametros: IDataObject = {
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'MENSAGEM': this.getNodeParameter('mensagem', i) as string,
		'TELEFONE': this.getNodeParameter('telefone', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'apigateway_sms', parametros);
}
