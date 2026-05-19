/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as biancogres_socios from './biancogres_socios.operation';

export { biancogres_socios };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['biancogres'],
			},
		},
		options: [
			{
				name: 'Socios Biancogres',
				value: 'biancogres_socios',
				action: 'Socios biancogres',
			}
		],
		default: 'biancogres_socios',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...biancogres_socios.description,
];
