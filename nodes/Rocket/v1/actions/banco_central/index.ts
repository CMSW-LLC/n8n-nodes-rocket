/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as bacen_nome_cpf from './bacen_nome_cpf.operation';
import * as bcb_cotacao_dolar from './bcb_cotacao_dolar.operation';
import * as bcb from './bcb.operation';

export { bacen_nome_cpf, bcb_cotacao_dolar, bcb };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['banco_central'],
			},
		},
		options: [
			{
				name: 'Bacen Consulta Nome Por Cpf',
				value: 'bacen_nome_cpf',
				action: 'Bacen consulta nome por cpf',
			},
			{
				name: 'BCB - Cotacao Dolar',
				value: 'bcb_cotacao_dolar',
				action: 'Cotacao dolar',
			},
			{
				name: 'SCR BANCO CENTRAL',
				value: 'bcb',
				action: 'Scr banco central',
			}
		],
		default: 'bacen_nome_cpf',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...bacen_nome_cpf.description,
	...bcb_cotacao_dolar.description,
	...bcb.description,
];
