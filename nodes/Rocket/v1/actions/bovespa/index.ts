/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as bovespa_balanco_financeiro from './bovespa_balanco_financeiro.operation';

export { bovespa_balanco_financeiro };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bovespa'],
			},
		},
		options: [
			{
				name: 'Bovespa Balanco Financeiro',
				value: 'bovespa_balanco_financeiro',
				action: 'Bovespa balanco financeiro',
			}
		],
		default: 'bovespa_balanco_financeiro',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...bovespa_balanco_financeiro.description,
];
