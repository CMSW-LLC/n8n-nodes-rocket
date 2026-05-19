/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as nvti_ws023 from './nvti_ws023.operation';
import * as novavida_inadimplencia_pf from './novavida_inadimplencia_pf.operation';
import * as novavida_inadimplencia_pj from './novavida_inadimplencia_pj.operation';
import * as novavida_nvcheck from './novavida_nvcheck.operation';
import * as nvti_ws009_tarifado from './nvti_ws009_tarifado.operation';
import * as nv_pessoas_empr_tk_tarifado from './nv_pessoas_empr_tk_tarifado.operation';
import * as nv_sit_cad_tk_tarifado from './nv_sit_cad_tk_tarifado.operation';
import * as nvti_ws009 from './nvti_ws009.operation';
import * as nvti_ws012 from './nvti_ws012.operation';
import * as nvti_ws016 from './nvti_ws016.operation';

export { nvti_ws023, novavida_inadimplencia_pf, novavida_inadimplencia_pj, novavida_nvcheck, nvti_ws009_tarifado, nv_pessoas_empr_tk_tarifado, nv_sit_cad_tk_tarifado, nvti_ws009, nvti_ws012, nvti_ws016 };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['nova_vida'],
			},
		},
		options: [
			{
				name: 'Inadimplencia TK',
				value: 'nvti_ws023',
				action: 'Inadimplencia tk',
			},
			{
				name: 'Nova Vida Inadimplencia PF',
				value: 'novavida_inadimplencia_pf',
				action: 'Nova vida inadimplencia pf',
			},
			{
				name: 'Nova Vida Inadimplencia PJ',
				value: 'novavida_inadimplencia_pj',
				action: 'Nova vida inadimplencia pj',
			},
			{
				name: 'Nova Vida WS Nvcheck',
				value: 'novavida_nvcheck',
				action: 'Nova vida ws nvcheck',
			},
			{
				name: 'NV Obito Tarifado',
				value: 'nvti_ws009_tarifado',
				action: 'Nv obito tarifado',
			},
			{
				name: 'NV Pessoas Empresas Tk Tarifado',
				value: 'nv_pessoas_empr_tk_tarifado',
				action: 'Nv pessoas empresas tk tarifado',
			},
			{
				name: 'NV Situacao Cadastral TK Tarifado',
				value: 'nv_sit_cad_tk_tarifado',
				action: 'Nv situacao cadastral tk tarifado',
			},
			{
				name: 'Obito TK',
				value: 'nvti_ws009',
				action: 'Obito tk',
			},
			{
				name: 'Pessoas Empresas Tk',
				value: 'nvti_ws012',
				action: 'Pessoas empresas tk',
			},
			{
				name: 'Socios TK',
				value: 'nvti_ws016',
				action: 'Socios tk',
			}
		],
		default: 'nvti_ws023',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...nvti_ws023.description,
	...novavida_inadimplencia_pf.description,
	...novavida_inadimplencia_pj.description,
	...novavida_nvcheck.description,
	...nvti_ws009_tarifado.description,
	...nv_pessoas_empr_tk_tarifado.description,
	...nv_sit_cad_tk_tarifado.description,
	...nvti_ws009.description,
	...nvti_ws012.description,
	...nvti_ws016.description,
];
