/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as pagtur_api from './pagtur_api.operation';

export { pagtur_api };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['pagtur'],
			},
		},
		options: [
			{
				name: 'Pagtur API',
				value: 'pagtur_api',
				action: 'Pagtur api',
			}
		],
		default: 'pagtur_api',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...pagtur_api.description,
];
