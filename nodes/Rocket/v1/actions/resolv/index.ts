/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as cetelem_resolv_obito from './cetelem_resolv_obito.operation';

export { cetelem_resolv_obito };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['resolv'],
			},
		},
		options: [
			{
				name: 'Resolv Obito',
				value: 'cetelem_resolv_obito',
				action: 'Resolv obito',
			}
		],
		default: 'cetelem_resolv_obito',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...cetelem_resolv_obito.description,
];
