/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as google from './google.operation';

export { google };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['servicos'],
			},
		},
		options: [
			{
				name: 'Google',
				value: 'google',
				action: 'Google',
			}
		],
		default: 'google',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...google.description,
];
