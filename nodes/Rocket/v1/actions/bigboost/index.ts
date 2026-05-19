/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as bigboost from './bigboost.operation';

export { bigboost };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bigboost'],
			},
		},
		options: [
			{
				name: 'Big Boost API',
				value: 'bigboost',
				action: 'Big boost api',
			}
		],
		default: 'bigboost',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...bigboost.description,
];
