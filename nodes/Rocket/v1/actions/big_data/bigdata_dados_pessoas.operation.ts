/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pessoas'] } },
	},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pessoas'] } },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pessoas'] } },
		},
	{
			displayName: 'TOKEN ID',
			name: 'tokenId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pessoas'] } },
			required: true,
		},
	{
			displayName: 'ACCESS TOKEN',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pessoas'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'TOKEN_ID': this.getNodeParameter('tokenId', i) as string,
		'ACCESS_TOKEN': this.getNodeParameter('accessToken', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'bigdata_dados_pessoas', parametros);
}
