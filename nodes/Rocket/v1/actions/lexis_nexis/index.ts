/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as lexis_nexis_search from './lexis_nexis_search.operation';

export { lexis_nexis_search };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lexis_nexis'],
			},
		},
		options: [
			{
				name: 'Lexis Nexis Search',
				value: 'lexis_nexis_search',
				action: 'Lexis nexis search',
			}
		],
		default: 'lexis_nexis_search',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...lexis_nexis_search.description,
];
