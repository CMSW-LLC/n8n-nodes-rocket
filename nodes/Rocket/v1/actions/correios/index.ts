/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as correios from './correios.operation';
import * as ceplivre from './ceplivre.operation';
import * as correios_logradouro from './correios_logradouro.operation';

export { correios, ceplivre, correios_logradouro };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['correios'],
			},
		},
		options: [
			{
				name: 'CEP Correios',
				value: 'correios',
				action: 'Correios',
			},
			{
				name: 'CEP LIVRE',
				value: 'ceplivre',
				action: 'Cep livre',
			},
			{
				name: 'Correiros Logradouro',
				value: 'correios_logradouro',
				action: 'Correiros logradouro',
			}
		],
		default: 'correios',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...correios.description,
	...ceplivre.description,
	...correios_logradouro.description,
];
