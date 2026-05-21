/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as cnseg_placa_ws from './cnseg_placa_ws.operation';

export { cnseg_placa_ws };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cnseg'],
			},
		},
		options: [
			{
				name: 'CNSEG Web Service - RNS Consulta Por Placa',
				value: 'cnseg_placa_ws',
				action: 'Cnseg web service - rns consulta por placa',
			}
		],
		default: 'cnseg_placa_ws',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...cnseg_placa_ws.description,
];
