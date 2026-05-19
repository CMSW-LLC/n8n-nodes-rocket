/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as procurados_europol from './procurados_europol.operation';
import * as procurados_fbi from './procurados_fbi.operation';

export { procurados_europol, procurados_fbi };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['europa'],
			},
		},
		options: [
			{
				name: 'Procurados Europol',
				value: 'procurados_europol',
				action: 'Procurados europol',
			},
			{
				name: 'Procurados Fbi',
				value: 'procurados_fbi',
				action: 'Procurados fbi',
			}
		],
		default: 'procurados_europol',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...procurados_europol.description,
	...procurados_fbi.description,
];
