/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as bnmp from './bnmp.operation';
import * as processos_cnj from './processos_cnj.operation';
import * as cnj_processos from './cnj_processos.operation';
import * as cnj_improbidade from './cnj_improbidade.operation';
import * as cvm_inqueritos from './cvm_inqueritos.operation';
import * as escavador from './escavador.operation';
import * as processos_jusbrasil from './processos_jusbrasil.operation';
import * as stf from './stf.operation';
import * as stj from './stj.operation';
import * as trf_1 from './trf_1.operation';
import * as trf_2 from './trf_2.operation';
import * as trf_3 from './trf_3.operation';
import * as trf_4regiao from './trf_4regiao.operation';
import * as trf_5regiao from './trf_5regiao.operation';
import * as trf_6regiao from './trf_6regiao.operation';
import * as tj_mg from './tj_mg.operation';
import * as tj_pe_unificada from './tj_pe_unificada.operation';
import * as tj_sc from './tj_sc.operation';
import * as tj_ac from './tj_ac.operation';
import * as tj_al from './tj_al.operation';
import * as tj_am from './tj_am.operation';
import * as tj_ap from './tj_ap.operation';
import * as tj_ba from './tj_ba.operation';
import * as tj_ce from './tj_ce.operation';
import * as tj_df from './tj_df.operation';
import * as tj_es from './tj_es.operation';
import * as tj_go from './tj_go.operation';
import * as tj_ma from './tj_ma.operation';
import * as tj_ms from './tj_ms.operation';
import * as tj_mt from './tj_mt.operation';
import * as tj_pa from './tj_pa.operation';
import * as tj_pb from './tj_pb.operation';
import * as tj_pe from './tj_pe.operation';
import * as tj_pi from './tj_pi.operation';
import * as tj_pr from './tj_pr.operation';
import * as tj_rj from './tj_rj.operation';
import * as tj_rn from './tj_rn.operation';
import * as tj_ro from './tj_ro.operation';
import * as tj_rr from './tj_rr.operation';
import * as tj_rs from './tj_rs.operation';
import * as tj_se from './tj_se.operation';
import * as tj_sp from './tj_sp.operation';
import * as tj_to from './tj_to.operation';
import * as tre_sp from './tre_sp.operation';

export { bnmp, processos_cnj, cnj_processos, cnj_improbidade, cvm_inqueritos, escavador, processos_jusbrasil, stf, stj, trf_1, trf_2, trf_3, trf_4regiao, trf_5regiao, trf_6regiao, tj_mg, tj_pe_unificada, tj_sc, tj_ac, tj_al, tj_am, tj_ap, tj_ba, tj_ce, tj_df, tj_es, tj_go, tj_ma, tj_ms, tj_mt, tj_pa, tj_pb, tj_pe, tj_pi, tj_pr, tj_rj, tj_rn, tj_ro, tj_rr, tj_rs, tj_se, tj_sp, tj_to, tre_sp };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tribunal_de_justica'],
			},
		},
		options: [
			{
				name: 'Banco Nacional De Mandados De Prisao',
				value: 'bnmp',
				action: 'Banco nacional de mandados de prisao',
			},
			{
				name: 'CNJ - Conselho Nacional De Justica',
				value: 'processos_cnj',
				action: 'Cnj - conselho nacional de justica',
			},
			{
				name: 'CNJ - Conselho Nacional De Justica - Consulta Publica Processos',
				value: 'cnj_processos',
				action: 'Cnj - conselho nacional de justica - consulta publica processos',
			},
			{
				name: 'Cnj Improbidade',
				value: 'cnj_improbidade',
				action: 'Cnj improbidade',
			},
			{
				name: 'Cvm Inqueritos',
				value: 'cvm_inqueritos',
				action: 'Cvm inqueritos',
			},
			{
				name: 'Escavador - Seu Assistente Juridico',
				value: 'escavador',
				action: 'Escavador - seu assistente juridico',
			},
			{
				name: 'Jusbrasil',
				value: 'processos_jusbrasil',
				action: 'Jusbrasil',
			},
			{
				name: 'STF - Supremo Tribunal Federal',
				value: 'stf',
				action: 'Stf - supremo tribunal federal',
			},
			{
				name: 'STJ - Superior Tribunal De Justica',
				value: 'stj',
				action: 'Stj - superior tribunal de justica',
			},
			{
				name: 'TRF 1 Regiao',
				value: 'trf_1',
				action: 'Trf 1 regiao',
			},
			{
				name: 'TRF 2 Regiao',
				value: 'trf_2',
				action: 'Trf 2 regiao',
			},
			{
				name: 'TRF 3 REGIAO',
				value: 'trf_3',
				action: 'Trf 3 regiao',
			},
			{
				name: 'TRF 4 Regiao',
				value: 'trf_4regiao',
				action: 'Trf 4 regiao',
			},
			{
				name: 'TRF 5 Regiao',
				value: 'trf_5regiao',
				action: 'Trf 5 regiao',
			},
			{
				name: 'TRF 6 REGIAO',
				value: 'trf_6regiao',
				action: 'Trf 6 regiao',
			},
			{
				name: 'Tribunal De Justica De MG',
				value: 'tj_mg',
				action: 'Tribunal de justica de mg',
			},
			{
				name: 'Tribunal De Justica De PE - UNIFICADA',
				value: 'tj_pe_unificada',
				action: 'Tribunal de justica de pe - unificada',
			},
			{
				name: 'Tribunal De Justica De Santa Catarina',
				value: 'tj_sc',
				action: 'Tribunal de justica de santa catarina',
			},
			{
				name: 'Tribunal De Justica Do AC',
				value: 'tj_ac',
				action: 'Tribunal de justica do ac',
			},
			{
				name: 'Tribunal De Justica Do AL',
				value: 'tj_al',
				action: 'Tribunal de justica do al',
			},
			{
				name: 'Tribunal De Justica Do AM',
				value: 'tj_am',
				action: 'Tribunal de justica do am',
			},
			{
				name: 'Tribunal De Justica Do AP',
				value: 'tj_ap',
				action: 'Tribunal de justica do ap',
			},
			{
				name: 'Tribunal De Justica Do BA',
				value: 'tj_ba',
				action: 'Tribunal de justica do ba',
			},
			{
				name: 'Tribunal De Justica Do CE',
				value: 'tj_ce',
				action: 'Tribunal de justica do ce',
			},
			{
				name: 'Tribunal De Justica Do DF',
				value: 'tj_df',
				action: 'Tribunal de justica do df',
			},
			{
				name: 'Tribunal De Justica Do ES',
				value: 'tj_es',
				action: 'Tribunal de justica do es',
			},
			{
				name: 'Tribunal De Justica Do GO',
				value: 'tj_go',
				action: 'Tribunal de justica do go',
			},
			{
				name: 'Tribunal De Justica Do MA',
				value: 'tj_ma',
				action: 'Tribunal de justica do ma',
			},
			{
				name: 'Tribunal De Justica Do MS',
				value: 'tj_ms',
				action: 'Tribunal de justica do ms',
			},
			{
				name: 'Tribunal De Justica Do MT',
				value: 'tj_mt',
				action: 'Tribunal de justica do mt',
			},
			{
				name: 'Tribunal De Justica Do PA',
				value: 'tj_pa',
				action: 'Tribunal de justica do pa',
			},
			{
				name: 'Tribunal De Justica Do PB',
				value: 'tj_pb',
				action: 'Tribunal de justica do pb',
			},
			{
				name: 'Tribunal De Justica Do PE',
				value: 'tj_pe',
				action: 'Tribunal de justica do pe',
			},
			{
				name: 'Tribunal De Justica Do PI',
				value: 'tj_pi',
				action: 'Tribunal de justica do pi',
			},
			{
				name: 'Tribunal De Justica Do PR',
				value: 'tj_pr',
				action: 'Tribunal de justica do pr',
			},
			{
				name: 'Tribunal De Justica Do RJ',
				value: 'tj_rj',
				action: 'Tribunal de justica do rj',
			},
			{
				name: 'Tribunal De Justica Do RN',
				value: 'tj_rn',
				action: 'Tribunal de justica do rn',
			},
			{
				name: 'Tribunal De Justica Do RO',
				value: 'tj_ro',
				action: 'Tribunal de justica do ro',
			},
			{
				name: 'Tribunal De Justica Do RR',
				value: 'tj_rr',
				action: 'Tribunal de justica do rr',
			},
			{
				name: 'Tribunal De Justica Do RS',
				value: 'tj_rs',
				action: 'Tribunal de justica do rs',
			},
			{
				name: 'Tribunal De Justica Do SE',
				value: 'tj_se',
				action: 'Tribunal de justica do se',
			},
			{
				name: 'Tribunal De Justica Do SP',
				value: 'tj_sp',
				action: 'Tribunal de justica do sp',
			},
			{
				name: 'Tribunal De Justica Do TO',
				value: 'tj_to',
				action: 'Tribunal de justica do to',
			},
			{
				name: 'Tribunal Regional Eleitoral De Sao Paulo',
				value: 'tre_sp',
				action: 'Tribunal regional eleitoral de sao paulo',
			}
		],
		default: 'bnmp',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...bnmp.description,
	...processos_cnj.description,
	...cnj_processos.description,
	...cnj_improbidade.description,
	...cvm_inqueritos.description,
	...escavador.description,
	...processos_jusbrasil.description,
	...stf.description,
	...stj.description,
	...trf_1.description,
	...trf_2.description,
	...trf_3.description,
	...trf_4regiao.description,
	...trf_5regiao.description,
	...trf_6regiao.description,
	...tj_mg.description,
	...tj_pe_unificada.description,
	...tj_sc.description,
	...tj_ac.description,
	...tj_al.description,
	...tj_am.description,
	...tj_ap.description,
	...tj_ba.description,
	...tj_ce.description,
	...tj_df.description,
	...tj_es.description,
	...tj_go.description,
	...tj_ma.description,
	...tj_ms.description,
	...tj_mt.description,
	...tj_pa.description,
	...tj_pb.description,
	...tj_pe.description,
	...tj_pi.description,
	...tj_pr.description,
	...tj_rj.description,
	...tj_rn.description,
	...tj_ro.description,
	...tj_rr.description,
	...tj_rs.description,
	...tj_se.description,
	...tj_sp.description,
	...tj_to.description,
	...tre_sp.description,
];
