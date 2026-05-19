/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as inovamind_rg_detalhe from './inovamind_rg_detalhe.operation';
import * as inovamind_rg_token from './inovamind_rg_token.operation';
import * as inovamind_cpf_rf from './inovamind_cpf_rf.operation';
import * as inovamind_rg from './inovamind_rg.operation';
import * as inovamind_cnh from './inovamind_cnh.operation';
import * as inovamind_cnh_detalhe from './inovamind_cnh_detalhe.operation';
import * as inovamind_cnh_token from './inovamind_cnh_token.operation';
import * as inovamind_doadores_campanha_pf_detalhe from './inovamind_doadores_campanha_pf_detalhe.operation';
import * as inovamind_doadores_campanha_pf_token from './inovamind_doadores_campanha_pf_token.operation';
import * as inovamind_doadores_campanha_pj_detalhe from './inovamind_doadores_campanha_pj_detalhe.operation';
import * as inovamind_doadores_campanha_pj_token from './inovamind_doadores_campanha_pj_token.operation';
import * as inovamind_endereco from './inovamind_endereco.operation';
import * as inovamind_endereco_detalhe from './inovamind_endereco_detalhe.operation';
import * as inovamind_endereco_token from './inovamind_endereco_token.operation';
import * as inovamind_nome_mae from './inovamind_nome_mae.operation';
import * as inovamind_nome_mae_detalhe from './inovamind_nome_mae_detalhe.operation';
import * as inovamind_nome_mae_token from './inovamind_nome_mae_token.operation';
import * as inovamind_pep from './inovamind_pep.operation';
import * as inovamind_pep_detalhe from './inovamind_pep_detalhe.operation';
import * as inovamind_pep_token from './inovamind_pep_token.operation';
import * as inovamind_consulta_assistencia_social from './inovamind_consulta_assistencia_social.operation';
import * as inovamind_doadores_campanha_pf from './inovamind_doadores_campanha_pf.operation';
import * as inovamind_doadores_campanha_pj from './inovamind_doadores_campanha_pj.operation';

export { inovamind_rg_detalhe, inovamind_rg_token, inovamind_cpf_rf, inovamind_rg, inovamind_cnh, inovamind_cnh_detalhe, inovamind_cnh_token, inovamind_doadores_campanha_pf_detalhe, inovamind_doadores_campanha_pf_token, inovamind_doadores_campanha_pj_detalhe, inovamind_doadores_campanha_pj_token, inovamind_endereco, inovamind_endereco_detalhe, inovamind_endereco_token, inovamind_nome_mae, inovamind_nome_mae_detalhe, inovamind_nome_mae_token, inovamind_pep, inovamind_pep_detalhe, inovamind_pep_token, inovamind_consulta_assistencia_social, inovamind_doadores_campanha_pf, inovamind_doadores_campanha_pj };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['inovamind'],
			},
		},
		options: [
			{
				name: 'Inovamind CNH',
				value: 'inovamind_cnh',
				action: 'Inovamind cnh',
			},
			{
				name: 'Inovamind CNH Detalhe',
				value: 'inovamind_cnh_detalhe',
				action: 'Inovamind cnh detalhe',
			},
			{
				name: 'Inovamind CNH Token',
				value: 'inovamind_cnh_token',
				action: 'Inovamind cnh token',
			},
			{
				name: 'Inovamind Consulta Assistencia Social',
				value: 'inovamind_consulta_assistencia_social',
				action: 'Inovamind consulta assistencia social',
			},
			{
				name: 'Inovamind Doadores Campanha Pf',
				value: 'inovamind_doadores_campanha_pf',
				action: 'Inovamind doadores campanha pf',
			},
			{
				name: 'Inovamind Doadores Campanha Pj',
				value: 'inovamind_doadores_campanha_pj',
				action: 'Inovamind doadores campanha pj',
			},
			{
				name: 'Inovamind Doadores de Campanha PF Detalhe',
				value: 'inovamind_doadores_campanha_pf_detalhe',
				action: 'Inovamind doadores de campanha pf detalhe',
			},
			{
				name: 'Inovamind Doadores de Campanha PF Token',
				value: 'inovamind_doadores_campanha_pf_token',
				action: 'Inovamind doadores de campanha pf token',
			},
			{
				name: 'Inovamind Doadores de Campanha PJ Detalhe',
				value: 'inovamind_doadores_campanha_pj_detalhe',
				action: 'Inovamind doadores de campanha pj detalhe',
			},
			{
				name: 'Inovamind Doadores de Campanha PJ Token',
				value: 'inovamind_doadores_campanha_pj_token',
				action: 'Inovamind doadores de campanha pj token',
			},
			{
				name: 'Inovamind Endereco',
				value: 'inovamind_endereco',
				action: 'Inovamind endereco',
			},
			{
				name: 'Inovamind Endereco Detalhe',
				value: 'inovamind_endereco_detalhe',
				action: 'Inovamind endereco detalhe',
			},
			{
				name: 'Inovamind Endereco Token',
				value: 'inovamind_endereco_token',
				action: 'Inovamind endereco token',
			},
			{
				name: 'Inovamind Nome da Mae',
				value: 'inovamind_nome_mae',
				action: 'Inovamind nome da mae',
			},
			{
				name: 'Inovamind Nome da Mae Detalhe',
				value: 'inovamind_nome_mae_detalhe',
				action: 'Inovamind nome da mae detalhe',
			},
			{
				name: 'Inovamind Nome da Mae Token',
				value: 'inovamind_nome_mae_token',
				action: 'Inovamind nome da mae token',
			},
			{
				name: 'Inovamind PEP',
				value: 'inovamind_pep',
				action: 'Inovamind pep',
			},
			{
				name: 'Inovamind PEP Detalhe',
				value: 'inovamind_pep_detalhe',
				action: 'Inovamind pep detalhe',
			},
			{
				name: 'Inovamind PEP Token',
				value: 'inovamind_pep_token',
				action: 'Inovamind pep token',
			},
			{
				name: 'Inovamind Receita Federal CPF',
				value: 'inovamind_cpf_rf',
				action: 'Inovamind receita federal cpf',
			},
			{
				name: 'Inovamind Validacao NUMERO RG Detalhe',
				value: 'inovamind_rg_detalhe',
				action: 'Inovamind validacao numero rg detalhe',
			},
			{
				name: 'Inovamind Validacao NUMERO RG Token',
				value: 'inovamind_rg_token',
				action: 'Inovamind validacao numero rg token',
			},
			{
				name: 'Inovamind Validacao RG',
				value: 'inovamind_rg',
				action: 'Inovamind validacao rg',
			}
		],
		default: 'inovamind_cnh',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...inovamind_rg_detalhe.description,
	...inovamind_rg_token.description,
	...inovamind_cpf_rf.description,
	...inovamind_rg.description,
	...inovamind_cnh.description,
	...inovamind_cnh_detalhe.description,
	...inovamind_cnh_token.description,
	...inovamind_doadores_campanha_pf_detalhe.description,
	...inovamind_doadores_campanha_pf_token.description,
	...inovamind_doadores_campanha_pj_detalhe.description,
	...inovamind_doadores_campanha_pj_token.description,
	...inovamind_endereco.description,
	...inovamind_endereco_detalhe.description,
	...inovamind_endereco_token.description,
	...inovamind_nome_mae.description,
	...inovamind_nome_mae_detalhe.description,
	...inovamind_nome_mae_token.description,
	...inovamind_pep.description,
	...inovamind_pep_detalhe.description,
	...inovamind_pep_token.description,
	...inovamind_consulta_assistencia_social.description,
	...inovamind_doadores_campanha_pf.description,
	...inovamind_doadores_campanha_pj.description,
];
