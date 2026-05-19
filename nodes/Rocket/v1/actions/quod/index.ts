/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as quod_pf from './quod_pf.operation';
import * as quod_faturamento_presumido from './quod_faturamento_presumido.operation';
import * as quod_pj from './quod_pj.operation';
import * as quod_renda_presumida_pf from './quod_renda_presumida_pf.operation';

export { quod_pf, quod_faturamento_presumido, quod_pj, quod_renda_presumida_pf };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['quod'],
			},
		},
		options: [
			{
				name: 'Quod Consulta Score CPF',
				value: 'quod_pf',
				action: 'Quod consulta score cpf',
			},
			{
				name: 'Quod Faturamento Presumido',
				value: 'quod_faturamento_presumido',
				action: 'Quod faturamento presumido',
			},
			{
				name: 'Quod PJ',
				value: 'quod_pj',
				action: 'Quod pj',
			},
			{
				name: 'Quod Renda Presumida CPF',
				value: 'quod_renda_presumida_pf',
				action: 'Quod renda presumida cpf',
			}
		],
		default: 'quod_pf',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...quod_pf.description,
	...quod_faturamento_presumido.description,
	...quod_pj.description,
	...quod_renda_presumida_pf.description,
];
