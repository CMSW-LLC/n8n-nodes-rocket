/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as boa_vista_acerta_pos_essencial from './boa_vista_acerta_pos_essencial.operation';
import * as boa_vista_define_risco_positivo from './boa_vista_define_risco_positivo.operation';
import * as boavista_gold from './boavista_gold.operation';
import * as boa_vista_gerenciamento from './boa_vista_gerenciamento.operation';
import * as boa_vista_modular_pf_cadastral from './boa_vista_modular_pf_cadastral.operation';
import * as boavista_consta_debito from './boavista_consta_debito.operation';

export { boa_vista_acerta_pos_essencial, boa_vista_define_risco_positivo, boavista_gold, boa_vista_gerenciamento, boa_vista_modular_pf_cadastral, boavista_consta_debito };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['boa_vista'],
			},
		},
		options: [
			{
				name: 'Boa Vista Acerta Positivo Essencial',
				value: 'boa_vista_acerta_pos_essencial',
				action: 'Boa vista acerta positivo essencial',
			},
			{
				name: 'Boa Vista Define Risco Positivo',
				value: 'boa_vista_define_risco_positivo',
				action: 'Boa vista define risco positivo',
			},
			{
				name: 'Boa Vista Empresarial Gold',
				value: 'boavista_gold',
				action: 'Boa vista empresarial gold',
			},
			{
				name: 'Boa Vista Gerenciamento',
				value: 'boa_vista_gerenciamento',
				action: 'Boa vista gerenciamento',
			},
			{
				name: 'Boa Vista Modular PF Cadastral',
				value: 'boa_vista_modular_pf_cadastral',
				action: 'Boa vista modular cadastral',
			},
			{
				name: 'BoaVista Consta Debito',
				value: 'boavista_consta_debito',
				action: 'Boa vista consta debito',
			}
		],
		default: 'boa_vista_acerta_pos_essencial',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...boa_vista_acerta_pos_essencial.description,
	...boa_vista_define_risco_positivo.description,
	...boavista_gold.description,
	...boa_vista_gerenciamento.description,
	...boa_vista_modular_pf_cadastral.description,
	...boavista_consta_debito.description,
];
