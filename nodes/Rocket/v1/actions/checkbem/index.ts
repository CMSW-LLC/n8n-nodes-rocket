/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as checkbem from './checkbem.operation';

export { checkbem };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['checkbem'],
			},
		},
		options: [
			{
				name: 'Checkbem',
				value: 'checkbem',
				action: 'Checkbem',
			}
		],
		default: 'checkbem',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...checkbem.description,
];
