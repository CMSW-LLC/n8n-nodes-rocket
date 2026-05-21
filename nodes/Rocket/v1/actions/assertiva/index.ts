/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as assertiva from './assertiva.operation';
import * as assertiva_cnpj from './assertiva_cnpj.operation';
import * as assertiva_cnpj_tarifado from './assertiva_cnpj_tarifado.operation';
import * as assertiva_tarifado from './assertiva_tarifado.operation';

export { assertiva, assertiva_cnpj, assertiva_cnpj_tarifado, assertiva_tarifado };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['assertiva'],
			},
		},
		options: [
			{
				name: 'ASSERTIVA',
				value: 'assertiva',
				action: 'Assertiva',
			},
			{
				name: 'ASSERTIVA CNPJ',
				value: 'assertiva_cnpj',
				action: 'Assertiva cnpj',
			},
			{
				name: 'ASSERTIVA CNPJ TARIFADO',
				value: 'assertiva_cnpj_tarifado',
				action: 'Assertiva cnpj tarifado',
			},
			{
				name: 'ASSERTIVA TARIFADO',
				value: 'assertiva_tarifado',
				action: 'Assertiva tarifado',
			}
		],
		default: 'assertiva',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...assertiva.description,
	...assertiva_cnpj.description,
	...assertiva_cnpj_tarifado.description,
	...assertiva_tarifado.description,
];
