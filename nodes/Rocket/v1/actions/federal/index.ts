/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as acordos_leniencia from './acordos_leniencia.operation';
import * as ancord from './ancord.operation';
import * as ceaf from './ceaf.operation';
import * as cepim from './cepim.operation';
import * as cidade_fronteiricas from './cidade_fronteiricas.operation';
import * as cnep from './cnep.operation';
import * as consulta_obito_rj from './consulta_obito_rj.operation';
import * as trabalho_escravo from './trabalho_escravo.operation';
import * as ibama from './ibama.operation';
import * as ibama_cert_negativa_debt from './ibama_cert_negativa_debt.operation';
import * as ibama_embargos from './ibama_embargos.operation';
import * as ibge_municipios from './ibge_municipios.operation';
import * as ieptb_nacional from './ieptb_nacional.operation';
import * as ieptb from './ieptb.operation';
import * as portal_transparencia from './portal_transparencia.operation';
import * as portal_transparencia_bas from './portal_transparencia_bas.operation';
import * as portal_transparencia_pf_rpfc from './portal_transparencia_pf_rpfc.operation';
import * as portal_transparencia_bf from './portal_transparencia_bf.operation';
import * as portal_transparencia_ceis from './portal_transparencia_ceis.operation';
import * as portal_transparencia_pj from './portal_transparencia_pj.operation';
import * as registro_br from './registro_br.operation';
import * as fgts_empregador from './fgts_empregador.operation';
import * as beneficio_seguro_defeso from './beneficio_seguro_defeso.operation';
import * as sinesp_cidadao from './sinesp_cidadao.operation';
import * as suframa from './suframa.operation';
import * as tcu_contas_irregulares from './tcu_contas_irregulares.operation';

export { acordos_leniencia, ancord, ceaf, cepim, cidade_fronteiricas, cnep, consulta_obito_rj, trabalho_escravo, ibama, ibama_cert_negativa_debt, ibama_embargos, ibge_municipios, ieptb_nacional, ieptb, portal_transparencia, portal_transparencia_bas, portal_transparencia_pf_rpfc, portal_transparencia_bf, portal_transparencia_ceis, portal_transparencia_pj, registro_br, fgts_empregador, beneficio_seguro_defeso, sinesp_cidadao, suframa, tcu_contas_irregulares };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['federal'],
			},
		},
		options: [
			{
				name: 'Acordos De Leniencia',
				value: 'acordos_leniencia',
				action: 'Acordos de leniencia',
			},
			{
				name: 'ANCORD',
				value: 'ancord',
				action: 'Ancord',
			},
			{
				name: 'Cadastro De Expulsoes Da Administracao Federal (Ceaf)',
				value: 'ceaf',
				action: 'Cadastro de expulsoes da administracao federal ceaf',
			},
			{
				name: 'CEPIM',
				value: 'cepim',
				action: 'Cepim',
			},
			{
				name: 'Cidade Fronteiricas',
				value: 'cidade_fronteiricas',
				action: 'Cidade fronteiricas',
			},
			{
				name: 'CNEP',
				value: 'cnep',
				action: 'Cnep',
			},
			{
				name: 'Consulta Obito RJ',
				value: 'consulta_obito_rj',
				action: 'Consulta obito rj',
			},
			{
				name: 'Exploracao Do Trabalho Escravo',
				value: 'trabalho_escravo',
				action: 'Exploracao do trabalho escravo',
			},
			{
				name: 'IBAMA',
				value: 'ibama',
				action: 'Ibama',
			},
			{
				name: 'IBAMA - Certidao Negativa De Debito',
				value: 'ibama_cert_negativa_debt',
				action: 'Ibama - certidao negativa de debito',
			},
			{
				name: 'IBAMA Embargos',
				value: 'ibama_embargos',
				action: 'Ibama embargos',
			},
			{
				name: 'IBGE Codigo Municipio',
				value: 'ibge_municipios',
				action: 'Ibge codigo municipio',
			},
			{
				name: 'IEPTB Nacional',
				value: 'ieptb_nacional',
				action: 'Ieptb nacional',
			},
			{
				name: 'Ieptb-Br - Instituto De Estudos De Protesto De Titulos Do Brasil',
				value: 'ieptb',
				action: 'Ieptb br instituto de estudos de protesto de titulos do brasil',
			},
			{
				name: 'Portal Transparencia',
				value: 'portal_transparencia',
				action: 'Portal transparencia',
			},
			{
				name: 'Portal Transparencia - Beneficio Auxilo Social',
				value: 'portal_transparencia_bas',
				action: 'Portal transparencia - beneficio auxilo social',
			},
			{
				name: 'Portal Transparencia - Servidor Publicos Com Remuneracao Publicada E Funcao Comissionada',
				value: 'portal_transparencia_pf_rpfc',
				action: 'Portal transparencia - servidor publicos com remuneracao publicada e funcao comissionada',
			},
			{
				name: 'Portal Transparencia Bolsa Familia',
				value: 'portal_transparencia_bf',
				action: 'Portal transparencia bolsa familia',
			},
			{
				name: 'Portal Transparencia CEIS - Consultar Empresas Inidoneas E Suspensas',
				value: 'portal_transparencia_ceis',
				action: 'Portal transparencia ceis - consultar empresas inidoneas e suspensas',
			},
			{
				name: 'Portal Transparencia Pessoa Juridica',
				value: 'portal_transparencia_pj',
				action: 'Portal transparencia pessoa juridica',
			},
			{
				name: 'Registro De Dominios Internet',
				value: 'registro_br',
				action: 'Registro de dominios internet',
			},
			{
				name: 'Regularidade Do Empregador No FGTS',
				value: 'fgts_empregador',
				action: 'Regularidade do empregador no fgts',
			},
			{
				name: 'Seguro Defeso',
				value: 'beneficio_seguro_defeso',
				action: 'Seguro defeso',
			},
			{
				name: 'SINESP Cidadao - Consulta Veiculos ( Placa )',
				value: 'sinesp_cidadao',
				action: 'Sinesp cidadao - consulta veiculos ( placa )',
			},
			{
				name: 'Suframa',
				value: 'suframa',
				action: 'Suframa',
			},
			{
				name: 'TCU Contas Irregulares',
				value: 'tcu_contas_irregulares',
				action: 'Tcu contas irregulares',
			}
		],
		default: 'acordos_leniencia',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...acordos_leniencia.description,
	...ancord.description,
	...ceaf.description,
	...cepim.description,
	...cidade_fronteiricas.description,
	...cnep.description,
	...consulta_obito_rj.description,
	...trabalho_escravo.description,
	...ibama.description,
	...ibama_cert_negativa_debt.description,
	...ibama_embargos.description,
	...ibge_municipios.description,
	...ieptb_nacional.description,
	...ieptb.description,
	...portal_transparencia.description,
	...portal_transparencia_bas.description,
	...portal_transparencia_pf_rpfc.description,
	...portal_transparencia_bf.description,
	...portal_transparencia_ceis.description,
	...portal_transparencia_pj.description,
	...registro_br.description,
	...fgts_empregador.description,
	...beneficio_seguro_defeso.description,
	...sinesp_cidadao.description,
	...suframa.description,
	...tcu_contas_irregulares.description,
];
