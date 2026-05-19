/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as bradesco_kyc from './bradesco_kyc.operation';
import * as bradesco_upload_documentos from './bradesco_upload_documentos.operation';

export { bradesco_kyc, bradesco_upload_documentos };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bradesco'],
			},
		},
		options: [
			{
				name: 'Bradesco Bank - KYC Experience API',
				value: 'bradesco_kyc',
				action: 'Bradesco bank - kyc experience api',
			},
			{
				name: 'Upload De Documentos - Bradesco',
				value: 'bradesco_upload_documentos',
				action: 'Upload de documentos - bradesco',
			}
		],
		default: 'bradesco_kyc',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...bradesco_kyc.description,
	...bradesco_upload_documentos.description,
];
