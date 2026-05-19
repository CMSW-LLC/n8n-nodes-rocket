/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as jucesp_simples from './jucesp_simples.operation';

export { jucesp_simples };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['juntas_comerciais'],
			},
		},
		options: [
			{
				name: 'JUCESP - Ficha Cadastral Simplificada',
				value: 'jucesp_simples',
				action: 'Ficha cadastral simplificada',
			}
		],
		default: 'jucesp_simples',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...jucesp_simples.description,
];
