/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as policia_ac from './policia_ac.operation';
import * as policia_al from './policia_al.operation';
import * as policia_ba from './policia_ba.operation';
import * as policia_ce from './policia_ce.operation';
import * as policia_es from './policia_es.operation';
import * as policia_federal from './policia_federal.operation';
import * as policia_go from './policia_go.operation';
import * as policia_mg from './policia_mg.operation';
import * as policia_ms from './policia_ms.operation';
import * as policia_pa from './policia_pa.operation';
import * as policia_pe from './policia_pe.operation';
import * as policia_rj from './policia_rj.operation';
import * as policia_rr from './policia_rr.operation';
import * as policia_rs from './policia_rs.operation';
import * as policia_se from './policia_se.operation';
import * as policia_sp from './policia_sp.operation';

export { policia_ac, policia_al, policia_ba, policia_ce, policia_es, policia_federal, policia_go, policia_mg, policia_ms, policia_pa, policia_pe, policia_rj, policia_rr, policia_rs, policia_se, policia_sp };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['policia'],
			},
		},
		options: [
			{
				name: 'Policia AC - Atestado De Antecedentes',
				value: 'policia_ac',
				action: 'Policia ac - atestado de antecedentes',
			},
			{
				name: 'Policia AL - Atestado De Antecedentes',
				value: 'policia_al',
				action: 'Policia al - atestado de antecedentes',
			},
			{
				name: 'Policia BA - Antecedentes',
				value: 'policia_ba',
				action: 'Policia ba - antecedentes',
			},
			{
				name: 'Policia CE - Antecedentes Criminais',
				value: 'policia_ce',
				action: 'Policia ce - antecedentes criminais',
			},
			{
				name: 'Policia ES - Antecedentes Criminais',
				value: 'policia_es',
				action: 'Policia es - antecedentes criminais',
			},
			{
				name: 'Policia Federal - Antecedentes',
				value: 'policia_federal',
				action: 'Policia federal - antecedentes',
			},
			{
				name: 'Policia GO - Antecedentes',
				value: 'policia_go',
				action: 'Policia go - antecedentes',
			},
			{
				name: 'Policia MG - Antecedentes',
				value: 'policia_mg',
				action: 'Policia mg - antecedentes',
			},
			{
				name: 'Policia MS - Atestado De Antecedentes',
				value: 'policia_ms',
				action: 'Policia ms - atestado de antecedentes',
			},
			{
				name: 'Policia PA - Antecedentes Criminais',
				value: 'policia_pa',
				action: 'Policia pa - antecedentes criminais',
			},
			{
				name: 'Policia PE - Antecedentes Criminais',
				value: 'policia_pe',
				action: 'Policia pe - antecedentes criminais',
			},
			{
				name: 'Policia RJ - Antecedentes',
				value: 'policia_rj',
				action: 'Policia rj - antecedentes',
			},
			{
				name: 'POLICIA RR - Antecedentes',
				value: 'policia_rr',
				action: 'Policia rr - antecedentes',
			},
			{
				name: 'Policia RS - Antecedentes',
				value: 'policia_rs',
				action: 'Policia rs - antecedentes',
			},
			{
				name: 'Policia SE - Antecedentes Criminais',
				value: 'policia_se',
				action: 'Policia se - antecedentes criminais',
			},
			{
				name: 'Policia SP - Antecedentes',
				value: 'policia_sp',
				action: 'Policia sp - antecedentes',
			}
		],
		default: 'policia_ac',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...policia_ac.description,
	...policia_al.description,
	...policia_ba.description,
	...policia_ce.description,
	...policia_es.description,
	...policia_federal.description,
	...policia_go.description,
	...policia_mg.description,
	...policia_ms.description,
	...policia_pa.description,
	...policia_pe.description,
	...policia_rj.description,
	...policia_rr.description,
	...policia_rs.description,
	...policia_se.description,
	...policia_sp.description,
];
