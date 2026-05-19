/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as callback_andbank from './callback_andbank.operation';

export { callback_andbank };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['andbank'],
			},
		},
		options: [
			{
				name: 'Callback Andbank',
				value: 'callback_andbank',
				action: 'Callback andbank',
			}
		],
		default: 'callback_andbank',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...callback_andbank.description,
];
