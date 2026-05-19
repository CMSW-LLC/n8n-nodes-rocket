/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['banco_central'], operation: ['bcb_cotacao_dolar'] } },
	},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb_cotacao_dolar'] } },
		},
	{
			displayName: 'DATA FECHAMENTO',
			name: 'dataFechamento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb_cotacao_dolar'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'DATA_FECHAMENTO': this.getNodeParameter('dataFechamento', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'bcb_cotacao_dolar',
		parametros,
		webhookUrl,
	});
}
