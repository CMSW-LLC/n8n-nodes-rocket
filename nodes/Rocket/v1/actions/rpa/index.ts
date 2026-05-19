/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as rpa_adm_send_nf from './rpa_adm_send_nf.operation';

export { rpa_adm_send_nf };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['rpa'],
			},
		},
		options: [
			{
				name: 'RPA ADM - Enviar Nota Fiscal',
				value: 'rpa_adm_send_nf',
				action: 'Rpa adm - enviar nota fiscal',
			}
		],
		default: 'rpa_adm_send_nf',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...rpa_adm_send_nf.description,
];
