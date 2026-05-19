/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as cadesp_icms from './cadesp_icms.operation';

export { cadesp_icms };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['secr_da_fazenda'],
			},
		},
		options: [
			{
				name: 'Cadesp Consulta Publica Ao Cadastro ICMS',
				value: 'cadesp_icms',
				action: 'Cadesp consulta publica ao cadastro icms',
			}
		],
		default: 'cadesp_icms',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...cadesp_icms.description,
];
