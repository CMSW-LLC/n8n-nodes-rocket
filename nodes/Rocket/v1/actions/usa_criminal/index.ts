/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as dockets_justia from './dockets_justia.operation';
import * as interpol from './interpol.operation';
import * as linkedin from './linkedin.operation';

export { dockets_justia, interpol, linkedin };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['usa_criminal'],
			},
		},
		options: [
			{
				name: 'Dockets Justia',
				value: 'dockets_justia',
				action: 'Dockets justia',
			},
			{
				name: 'Interpol',
				value: 'interpol',
				action: 'Interpol',
			},
			{
				name: 'Linkedin',
				value: 'linkedin',
				action: 'Linkedin',
			}
		],
		default: 'dockets_justia',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...dockets_justia.description,
	...interpol.description,
	...linkedin.description,
];
