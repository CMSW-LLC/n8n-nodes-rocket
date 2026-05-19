/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as allcheck_localizador from './allcheck_localizador.operation';
import * as allchkcad from './allchkcad.operation';
import * as allchktel from './allchktel.operation';
import * as allchkveic from './allchkveic.operation';

export { allcheck_localizador, allchkcad, allchktel, allchkveic };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['allcheck'],
			},
		},
		options: [
			{
				name: 'ALLCHECK Consulta CNPJ/CPF',
				value: 'allchkcad',
				action: 'Allcheck consulta cnpj/cpf',
			},
			{
				name: 'ALLCHECK Consulta Telefone',
				value: 'allchktel',
				action: 'Allcheck consulta telefone',
			},
			{
				name: 'ALLCHECK Consulta Veiculos',
				value: 'allchkveic',
				action: 'Allcheck consulta veiculos',
			},
			{
				name: 'ALLCHECK Localizador',
				value: 'allcheck_localizador',
				action: 'Allcheck localizador',
			}
		],
		default: 'allchkcad',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...allcheck_localizador.description,
	...allchkcad.description,
	...allchktel.description,
	...allchkveic.description,
];
