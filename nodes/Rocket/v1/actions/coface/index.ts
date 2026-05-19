/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as cofanet from './cofanet.operation';

export { cofanet };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['coface'],
			},
		},
		options: [
			{
				name: 'Coface',
				value: 'cofanet',
				action: 'Coface',
			}
		],
		default: 'cofanet',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...cofanet.description,
];
