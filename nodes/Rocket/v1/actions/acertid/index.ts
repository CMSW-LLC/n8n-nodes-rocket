/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as acertid_net_ws from './acertid_net_ws.operation';
import * as acertid_resumo_ws from './acertid_resumo_ws.operation';

export { acertid_net_ws, acertid_resumo_ws };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['acertid'],
			},
		},
		options: [
			{
				name: 'Acert ID Via WS 3.0 Iniciar Consulta',
				value: 'acertid_net_ws',
				action: 'Acert id via ws 3.0 iniciar consulta',
			},
			{
				name: 'Acert ID Via WS 3.0 Resumo Finalizar Consulta',
				value: 'acertid_resumo_ws',
				action: 'Acert id via ws 3.0 resumo finalizar consulta',
			}
		],
		default: 'acertid_net_ws',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...acertid_net_ws.description,
	...acertid_resumo_ws.description,
];
