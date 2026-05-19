/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as tst from './tst.operation';
import * as tse from './tse.operation';

export { tst, tse };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tribunal_superior'],
			},
		},
		options: [
			{
				name: 'Tribunal Superior Do Trabalho',
				value: 'tst',
				action: 'Tribunal superior do trabalho',
			},
			{
				name: 'TSE - Tribunal Superior Eleitoral',
				value: 'tse',
				action: 'Tse - tribunal superior eleitoral',
			}
		],
		default: 'tst',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...tst.description,
	...tse.description,
];
