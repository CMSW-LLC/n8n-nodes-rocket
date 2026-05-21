/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as datavalid_biometria_face from './datavalid_biometria_face.operation';
import * as serpro_dv_face_tarifado from './serpro_dv_face_tarifado.operation';
import * as serpro_dv_face_tarifado_v4 from './serpro_dv_face_tarifado_v4.operation';
import * as pgfn_da from './pgfn_da.operation';
import * as serpro_datavalid from './serpro_datavalid.operation';
import * as portal_empreendedor from './portal_empreendedor.operation';
import * as consulta_rf_qsa from './consulta_rf_qsa.operation';
import * as simples_nacional from './simples_nacional.operation';
import * as serpro_cnpj from './serpro_cnpj.operation';
import * as serpro_cnpj_tarifado from './serpro_cnpj_tarifado.operation';
import * as serpro_cpf from './serpro_cpf.operation';
import * as serpro_cpf_tarifado from './serpro_cpf_tarifado.operation';
import * as rf_dau from './rf_dau.operation';
import * as rf_dau_cnpj from './rf_dau_cnpj.operation';
import * as cons_qsa from './cons_qsa.operation';
import * as rf_irpf from './rf_irpf.operation';
import * as rf_cnpj from './rf_cnpj.operation';
import * as rf_cpf from './rf_cpf.operation';
import * as simples_nacional_da from './simples_nacional_da.operation';

export { datavalid_biometria_face, serpro_dv_face_tarifado, serpro_dv_face_tarifado_v4, pgfn_da, serpro_datavalid, portal_empreendedor, consulta_rf_qsa, simples_nacional, serpro_cnpj, serpro_cnpj_tarifado, serpro_cpf, serpro_cpf_tarifado, rf_dau, rf_dau_cnpj, cons_qsa, rf_irpf, rf_cnpj, rf_cpf, simples_nacional_da };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['receita_federal'],
			},
		},
		options: [
			{
				name: 'Datavalid - Biometria De Face',
				value: 'datavalid_biometria_face',
				action: 'Datavalid - biometria de face',
			},
			{
				name: 'Datavalid Face - SERPRO - Tarifado',
				value: 'serpro_dv_face_tarifado',
				action: 'Datavalid face - serpro - tarifado',
			},
			{
				name: 'Datavalid Face V4 - SERPRO - Tarifado',
				value: 'serpro_dv_face_tarifado_v4',
				action: 'Datavalid face v4 - serpro - tarifado',
			},
			{
				name: 'PGFN - Dados Abertos',
				value: 'pgfn_da',
				action: 'Pgfn - dados abertos',
			},
			{
				name: 'RF - DATA VALID - SERPRO',
				value: 'serpro_datavalid',
				action: 'Rf - data valid - serpro',
			},
			{
				name: 'RF - Portal Empreendedor',
				value: 'portal_empreendedor',
				action: 'Rf - portal empreendedor',
			},
			{
				name: 'RF - Quadro Societario (Receita)',
				value: 'consulta_rf_qsa',
				action: 'Rf quadro societario receita',
			},
			{
				name: 'RF - Simples Nacional',
				value: 'simples_nacional',
				action: 'Rf - simples nacional',
			},
			{
				name: 'Rf- Situacao Cadastral CNPJ - SERPRO',
				value: 'serpro_cnpj',
				action: 'Rf situacao cadastral cnpj serpro',
			},
			{
				name: 'Rf- Situacao Cadastral CNPJ - SERPRO CM',
				value: 'serpro_cnpj_tarifado',
				action: 'Rf situacao cadastral cnpj serpro cm',
			},
			{
				name: 'Rf- Situacao Cadastral CPF - SERPRO',
				value: 'serpro_cpf',
				action: 'Rf situacao cadastral cpf serpro',
			},
			{
				name: 'Rf- Situacao Cadastral CPF - SERPRO CM',
				value: 'serpro_cpf_tarifado',
				action: 'Rf situacao cadastral cpf serpro cm',
			},
			{
				name: 'Rf-Certidao Divida Ativa Da Uniao',
				value: 'rf_dau',
				action: 'Rf certidao divida ativa da uniao',
			},
			{
				name: 'Rf-Certidao Divida Ativa Da Uniao CNPJ',
				value: 'rf_dau_cnpj',
				action: 'Rf certidao divida ativa da uniao cnpj',
			},
			{
				name: 'Rf-Quadro Societ?rio (Qsa) Desativado',
				value: 'cons_qsa',
				action: 'Rf quadro societ rio qsa desativado',
			},
			{
				name: 'Rf-Restituicao IRPF',
				value: 'rf_irpf',
				action: 'Rf restituicao irpf',
			},
			{
				name: 'Rf-Situacao Cadastral CNPJ',
				value: 'rf_cnpj',
				action: 'Rf situacao cadastral cnpj',
			},
			{
				name: 'Rf-Situacao Cadastral CPF',
				value: 'rf_cpf',
				action: 'Rf situacao cadastral cpf',
			},
			{
				name: 'SIMPLES NACIONAL - DADOS ABERTOS',
				value: 'simples_nacional_da',
				action: 'Simples nacional - dados abertos',
			}
		],
		default: 'datavalid_biometria_face',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...datavalid_biometria_face.description,
	...serpro_dv_face_tarifado.description,
	...serpro_dv_face_tarifado_v4.description,
	...pgfn_da.description,
	...serpro_datavalid.description,
	...portal_empreendedor.description,
	...consulta_rf_qsa.description,
	...simples_nacional.description,
	...serpro_cnpj.description,
	...serpro_cnpj_tarifado.description,
	...serpro_cpf.description,
	...serpro_cpf_tarifado.description,
	...rf_dau.description,
	...rf_dau_cnpj.description,
	...cons_qsa.description,
	...rf_irpf.description,
	...rf_cnpj.description,
	...rf_cpf.description,
	...simples_nacional_da.description,
];
