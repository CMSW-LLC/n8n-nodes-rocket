/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as api_captalys from './api_captalys.operation';
import * as webhook_captalys from './webhook_captalys.operation';

export { api_captalys, webhook_captalys };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['capitalys'],
			},
		},
		options: [
			{
				name: 'API Captalys',
				value: 'api_captalys',
				action: 'Captalys',
			},
			{
				name: 'WebHook Captalys',
				value: 'webhook_captalys',
				action: 'Web hook captalys',
			}
		],
		default: 'api_captalys',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...api_captalys.description,
	...webhook_captalys.description,
];
