/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as boa_vista_score_positivo_pf from './boa_vista_score_positivo_pf.operation';

export { boa_vista_score_positivo_pf };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cadpos_boa_vista'],
			},
		},
		options: [
			{
				name: 'Boa Vista Score Positivo PF',
				value: 'boa_vista_score_positivo_pf',
				action: 'Boa vista score positivo',
			}
		],
		default: 'boa_vista_score_positivo_pf',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...boa_vista_score_positivo_pf.description,
];
