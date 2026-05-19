/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as jbcred_spc from './jbcred_spc.operation';
import * as scpc_acerta_pf from './scpc_acerta_pf.operation';
import * as spc_consulta_completa from './spc_consulta_completa.operation';
import * as spc_inclusao_exclusao from './spc_inclusao_exclusao.operation';
import * as spc_mix_j from './spc_mix_j.operation';
import * as spc_mix_f from './spc_mix_f.operation';

export { jbcred_spc, scpc_acerta_pf, spc_consulta_completa, spc_inclusao_exclusao, spc_mix_j, spc_mix_f };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['spc'],
			},
		},
		options: [
			{
				name: 'Jbcred SPC',
				value: 'jbcred_spc',
				action: 'Jbcred spc',
			},
			{
				name: 'SCPC Acerta Mais PF Boa Vista',
				value: 'scpc_acerta_pf',
				action: 'Scpc acerta mais pf boa vista',
			},
			{
				name: 'SPC Consulta Completa',
				value: 'spc_consulta_completa',
				action: 'Spc consulta completa',
			},
			{
				name: 'SPC Inclusao e Exclusao',
				value: 'spc_inclusao_exclusao',
				action: 'Spc inclusao e exclusao',
			},
			{
				name: 'SPC Mix CNPJ',
				value: 'spc_mix_j',
				action: 'Spc mix cnpj',
			},
			{
				name: 'SPC Mix CPF',
				value: 'spc_mix_f',
				action: 'Spc mix cpf',
			}
		],
		default: 'jbcred_spc',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...jbcred_spc.description,
	...scpc_acerta_pf.description,
	...spc_consulta_completa.description,
	...spc_inclusao_exclusao.description,
	...spc_mix_j.description,
	...spc_mix_f.description,
];
