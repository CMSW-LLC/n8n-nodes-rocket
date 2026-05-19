/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as sintegra_sp from './sintegra_sp.operation';
import * as sintegra_ac from './sintegra_ac.operation';
import * as sintegra_al from './sintegra_al.operation';
import * as sintegra_ap from './sintegra_ap.operation';
import * as sintegra_am from './sintegra_am.operation';
import * as sintegra_ba from './sintegra_ba.operation';
import * as sintegra_ce from './sintegra_ce.operation';
import * as sintegra_df from './sintegra_df.operation';
import * as sintegra_es from './sintegra_es.operation';
import * as sintegra_go from './sintegra_go.operation';
import * as sintegra_ma from './sintegra_ma.operation';
import * as sintegra_mt from './sintegra_mt.operation';
import * as sintegra_ms from './sintegra_ms.operation';
import * as sintegra_mg from './sintegra_mg.operation';
import * as sintegra_pa from './sintegra_pa.operation';
import * as sintegra_pb from './sintegra_pb.operation';
import * as sintegra_pr from './sintegra_pr.operation';
import * as sintegra_pe from './sintegra_pe.operation';
import * as sintegra_pi from './sintegra_pi.operation';
import * as sintegra_rj from './sintegra_rj.operation';
import * as sintegra_rn from './sintegra_rn.operation';
import * as sintegra_rs from './sintegra_rs.operation';
import * as sintegra_ro from './sintegra_ro.operation';
import * as sintegra_rr from './sintegra_rr.operation';
import * as sintegra_sc from './sintegra_sc.operation';
import * as sintegra_se from './sintegra_se.operation';
import * as sintegra_to from './sintegra_to.operation';
import * as sintegra_ccc from './sintegra_ccc.operation';

export { sintegra_sp, sintegra_ac, sintegra_al, sintegra_ap, sintegra_am, sintegra_ba, sintegra_ce, sintegra_df, sintegra_es, sintegra_go, sintegra_ma, sintegra_mt, sintegra_ms, sintegra_mg, sintegra_pa, sintegra_pb, sintegra_pr, sintegra_pe, sintegra_pi, sintegra_rj, sintegra_rn, sintegra_rs, sintegra_ro, sintegra_rr, sintegra_sc, sintegra_se, sintegra_to, sintegra_ccc };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sintegra'],
			},
		},
		options: [
			{
				name: 'Receita Do Estado Do SP - SINTEGRA',
				value: 'sintegra_sp',
				action: 'Receita do estado do',
			},
			{
				name: 'SINTEGRA Acre',
				value: 'sintegra_ac',
				action: 'Acre',
			},
			{
				name: 'SINTEGRA Alagoas',
				value: 'sintegra_al',
				action: 'Alagoas',
			},
			{
				name: 'SINTEGRA Amapa',
				value: 'sintegra_ap',
				action: 'Amapa',
			},
			{
				name: 'SINTEGRA Amazonas',
				value: 'sintegra_am',
				action: 'Amazonas',
			},
			{
				name: 'SINTEGRA Bahia',
				value: 'sintegra_ba',
				action: 'Bahia',
			},
			{
				name: 'SINTEGRA Ceara',
				value: 'sintegra_ce',
				action: 'Ceara',
			},
			{
				name: 'SINTEGRA Distrito Federal',
				value: 'sintegra_df',
				action: 'Distrito federal',
			},
			{
				name: 'SINTEGRA Espirito Santo',
				value: 'sintegra_es',
				action: 'Espirito santo',
			},
			{
				name: 'SINTEGRA Goias',
				value: 'sintegra_go',
				action: 'Goias',
			},
			{
				name: 'SINTEGRA Maranhao',
				value: 'sintegra_ma',
				action: 'Maranhao',
			},
			{
				name: 'SINTEGRA Mato Grosso',
				value: 'sintegra_mt',
				action: 'Mato grosso',
			},
			{
				name: 'SINTEGRA Mato Grosso Do Sul',
				value: 'sintegra_ms',
				action: 'Mato grosso do sul',
			},
			{
				name: 'SINTEGRA Minas Gerais',
				value: 'sintegra_mg',
				action: 'Minas gerais',
			},
			{
				name: 'SINTEGRA Para',
				value: 'sintegra_pa',
				action: 'Para',
			},
			{
				name: 'SINTEGRA Paraiba',
				value: 'sintegra_pb',
				action: 'Paraiba',
			},
			{
				name: 'SINTEGRA Parana',
				value: 'sintegra_pr',
				action: 'Parana',
			},
			{
				name: 'SINTEGRA Pernambuco',
				value: 'sintegra_pe',
				action: 'Pernambuco',
			},
			{
				name: 'SINTEGRA Piaui',
				value: 'sintegra_pi',
				action: 'Piaui',
			},
			{
				name: 'SINTEGRA Rio De Janeiro',
				value: 'sintegra_rj',
				action: 'Rio de janeiro',
			},
			{
				name: 'SINTEGRA Rio Grande Do Norte',
				value: 'sintegra_rn',
				action: 'Rio grande do norte',
			},
			{
				name: 'SINTEGRA Rio Grande Do Sul',
				value: 'sintegra_rs',
				action: 'Rio grande do sul',
			},
			{
				name: 'SINTEGRA Rondonia',
				value: 'sintegra_ro',
				action: 'Rondonia',
			},
			{
				name: 'SINTEGRA Roraima',
				value: 'sintegra_rr',
				action: 'Roraima',
			},
			{
				name: 'SINTEGRA Santa Catarina',
				value: 'sintegra_sc',
				action: 'Santa catarina',
			},
			{
				name: 'SINTEGRA Sergipe',
				value: 'sintegra_se',
				action: 'Sergipe',
			},
			{
				name: 'SINTEGRA Tocantins',
				value: 'sintegra_to',
				action: 'Tocantins',
			},
			{
				name: 'Sintegra Unificado CCC',
				value: 'sintegra_ccc',
				action: 'Sintegra unificado',
			}
		],
		default: 'sintegra_sp',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...sintegra_sp.description,
	...sintegra_ac.description,
	...sintegra_al.description,
	...sintegra_ap.description,
	...sintegra_am.description,
	...sintegra_ba.description,
	...sintegra_ce.description,
	...sintegra_df.description,
	...sintegra_es.description,
	...sintegra_go.description,
	...sintegra_ma.description,
	...sintegra_mt.description,
	...sintegra_ms.description,
	...sintegra_mg.description,
	...sintegra_pa.description,
	...sintegra_pb.description,
	...sintegra_pr.description,
	...sintegra_pe.description,
	...sintegra_pi.description,
	...sintegra_rj.description,
	...sintegra_rn.description,
	...sintegra_rs.description,
	...sintegra_ro.description,
	...sintegra_rr.description,
	...sintegra_sc.description,
	...sintegra_se.description,
	...sintegra_to.description,
	...sintegra_ccc.description,
];
