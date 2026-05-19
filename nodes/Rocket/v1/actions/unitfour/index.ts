/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as unitfour_cnpj from './unitfour_cnpj.operation';
import * as unitfour_cpf from './unitfour_cpf.operation';

export { unitfour_cnpj, unitfour_cpf };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['unitfour'],
			},
		},
		options: [
			{
				name: 'Unitfour CNPJ',
				value: 'unitfour_cnpj',
				action: 'Unitfour cnpj',
			},
			{
				name: 'Unitfour CPF',
				value: 'unitfour_cpf',
				action: 'Unitfour cpf',
			}
		],
		default: 'unitfour_cnpj',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...unitfour_cnpj.description,
	...unitfour_cpf.description,
];
