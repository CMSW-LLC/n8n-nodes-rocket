/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as ccb_relatorio from './ccb_relatorio.operation';

export { ccb_relatorio };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ccb'],
			},
		},
		options: [
			{
				name: 'CCB Relatorio CNPJ',
				value: 'ccb_relatorio',
				action: 'Relatorio',
			}
		],
		default: 'ccb_relatorio',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...ccb_relatorio.description,
];
