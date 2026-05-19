/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as serasa_crednet_light from './serasa_crednet_light.operation';
import * as serasa_crednet_top from './serasa_crednet_top.operation';
import * as serasa_cb from './serasa_cb.operation';
import * as SERASA_IP20 from './SERASA_IP20.operation';
import * as serasa_avancado_pj from './serasa_avancado_pj.operation';
import * as serasa_base_inconsistencia from './serasa_base_inconsistencia.operation';
import * as b49c_concentre from './b49c_concentre.operation';
import * as serasa_confie from './serasa_confie.operation';
import * as serasa_b49c from './serasa_b49c.operation';
import * as serasa_intermediario_pj from './serasa_intermediario_pj.operation';
import * as verify_id_pf from './verify_id_pf.operation';

export { serasa_crednet_light, serasa_crednet_top, serasa_cb, SERASA_IP20, serasa_avancado_pj, serasa_base_inconsistencia, b49c_concentre, serasa_confie, serasa_b49c, serasa_intermediario_pj, verify_id_pf };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['serasa'],
			},
		},
		options: [
			{
				name: 'Consulta SERASA - Crednet Light',
				value: 'serasa_crednet_light',
				action: 'Consulta crednet light',
			},
			{
				name: 'Consulta SERASA - Crednet TOP',
				value: 'serasa_crednet_top',
				action: 'Consulta crednet',
			},
			{
				name: 'Credit Bureau',
				value: 'serasa_cb',
				action: 'Credit bureau',
			},
			{
				name: 'IP20',
				value: 'SERASA_IP20',
				action: 'Ip20',
			},
			{
				name: 'Serasa Avancado PJ',
				value: 'serasa_avancado_pj',
				action: 'Serasa avancado',
			},
			{
				name: 'Serasa B49C - Base Inconsistencia',
				value: 'serasa_base_inconsistencia',
				action: 'Serasa base inconsistencia',
			},
			{
				name: 'Serasa B49C - Concentre',
				value: 'b49c_concentre',
				action: 'Serasa concentre',
			},
			{
				name: 'Serasa Confie',
				value: 'serasa_confie',
				action: 'Serasa confie',
			},
			{
				name: 'Serasa Crednet',
				value: 'serasa_b49c',
				action: 'Serasa crednet',
			},
			{
				name: 'Serasa Intermediario PJ',
				value: 'serasa_intermediario_pj',
				action: 'Serasa intermediario',
			},
			{
				name: 'VERIFY ID PF',
				value: 'verify_id_pf',
				action: 'Verify id pf',
			}
		],
		default: 'serasa_crednet_light',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...serasa_crednet_light.description,
	...serasa_crednet_top.description,
	...serasa_cb.description,
	...SERASA_IP20.description,
	...serasa_avancado_pj.description,
	...serasa_base_inconsistencia.description,
	...b49c_concentre.description,
	...serasa_confie.description,
	...serasa_b49c.description,
	...serasa_intermediario_pj.description,
	...verify_id_pf.description,
];
