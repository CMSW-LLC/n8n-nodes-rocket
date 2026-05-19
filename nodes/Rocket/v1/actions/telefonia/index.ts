/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as imei from './imei.operation';
import * as telefonica from './telefonica.operation';

export { imei, telefonica };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['telefonia'],
			},
		},
		options: [
			{
				name: 'Consulta Aparelho Celular Bloqueado',
				value: 'imei',
				action: 'Consulta aparelho celular bloqueado',
			},
			{
				name: 'Telefonica Guia de Assinantes',
				value: 'telefonica',
				action: 'Telefonica guia de assinantes',
			}
		],
		default: 'imei',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...imei.description,
	...telefonica.description,
];
