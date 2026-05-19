/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as callback_brain from './callback_brain.operation';

export { callback_brain };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['brain'],
			},
		},
		options: [
			{
				name: 'Callback Bradesco Brain',
				value: 'callback_brain',
				action: 'Callback bradesco brain',
			}
		],
		default: 'callback_brain',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...callback_brain.description,
];
