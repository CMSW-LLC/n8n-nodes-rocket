/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as neoway_cnpj from './neoway_cnpj.operation';

export { neoway_cnpj };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['neoway'],
			},
		},
		options: [
			{
				name: 'Neoway Cnpj',
				value: 'neoway_cnpj',
				action: 'Neoway cnpj',
			}
		],
		default: 'neoway_cnpj',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...neoway_cnpj.description,
];
