/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as tipificacao_base64_osas from './tipificacao_base64_osas.operation';

export { tipificacao_base64_osas };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['osas'],
			},
		},
		options: [
			{
				name: 'Tipificacao Base64 OSAS',
				value: 'tipificacao_base64_osas',
				action: 'Tipificacao base64',
			}
		],
		default: 'tipificacao_base64_osas',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...tipificacao_base64_osas.description,
];
