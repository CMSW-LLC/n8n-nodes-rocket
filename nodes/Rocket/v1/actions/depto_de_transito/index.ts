/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as detran_amapa from './detran_amapa.operation';
import * as detran_pe from './detran_pe.operation';
import * as detran_rj_infracoes from './detran_rj_infracoes.operation';
import * as detran_sc_cnh from './detran_sc_cnh.operation';
import * as detran_sp_codev from './detran_sp_codev.operation';
import * as detran_ma_cnh from './detran_ma_cnh.operation';
import * as detran_rn from './detran_rn.operation';

export { detran_amapa, detran_pe, detran_rj_infracoes, detran_sc_cnh, detran_sp_codev, detran_ma_cnh, detran_rn };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['depto_de_transito'],
			},
		},
		options: [
			{
				name: 'DETRAN AMAPA - Consulta HABILITACAO',
				value: 'detran_amapa',
				action: 'Consulta',
			},
			{
				name: 'Detran Ma Cnh',
				value: 'detran_ma_cnh',
				action: 'Detran ma cnh',
			},
			{
				name: 'Detran PE',
				value: 'detran_pe',
				action: 'Detran',
			},
			{
				name: 'DETRAN RJ - Consulta De Pontuacao E Infracoes',
				value: 'detran_rj_infracoes',
				action: 'Consulta de pontuacao infracoes',
			},
			{
				name: 'Detran Rn',
				value: 'detran_rn',
				action: 'Detran rn',
			},
			{
				name: 'DETRAN SC - Informacoes Sobre CNH',
				value: 'detran_sc_cnh',
				action: 'Informacoes sobre',
			},
			{
				name: 'Detran SP Codev',
				value: 'detran_sp_codev',
				action: 'Detran codev',
			}
		],
		default: 'detran_amapa',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...detran_amapa.description,
	...detran_pe.description,
	...detran_rj_infracoes.description,
	...detran_sc_cnh.description,
	...detran_sp_codev.description,
	...detran_ma_cnh.description,
	...detran_rn.description,
];
