/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as promobank from './promobank.operation';

export { promobank };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['promobank'],
			},
		},
		options: [
			{
				name: 'Promobank',
				value: 'promobank',
				action: 'Promobank',
			}
		],
		default: 'promobank',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...promobank.description,
];
