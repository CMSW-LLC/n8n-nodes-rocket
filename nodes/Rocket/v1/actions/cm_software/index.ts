/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as base_dados_contexto from './base_dados_contexto.operation';
import * as clearsale from './clearsale.operation';
import * as cvc_pf from './cvc_pf.operation';
import * as cvc_pj from './cvc_pj.operation';
import * as dados_contexto_fluxo_csj from './dados_contexto_fluxo_csj.operation';
import * as dados_input_fluxo_csj from './dados_input_fluxo_csj.operation';
import * as cpfsrv_distancia_cep_cep from './cpfsrv_distancia_cep_cep.operation';
import * as cnh_extracao_dados from './cnh_extracao_dados.operation';
import * as ip2location from './ip2location.operation';
import * as cvc_assessment from './cvc_assessment.operation';
import * as apigateway_sms from './apigateway_sms.operation';
import * as token_pix from './token_pix.operation';
import * as validacao_faturas from './validacao_faturas.operation';
import * as validacao_passaporte_cnh from './validacao_passaporte_cnh.operation';
import * as validacao_biometrica from './validacao_biometrica.operation';
import * as cnh_digito from './cnh_digito.operation';

export { base_dados_contexto, clearsale, cvc_pf, cvc_pj, dados_contexto_fluxo_csj, dados_input_fluxo_csj, cpfsrv_distancia_cep_cep, cnh_extracao_dados, ip2location, cvc_assessment, apigateway_sms, token_pix, validacao_faturas, validacao_passaporte_cnh, validacao_biometrica, cnh_digito };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cm_software'],
			},
		},
		options: [
			{
				name: 'Base De Dados - Contexto',
				value: 'base_dados_contexto',
				action: 'Base de dados - contexto',
			},
			{
				name: 'Clear Sale',
				value: 'clearsale',
				action: 'Clear sale',
			},
			{
				name: 'Console De Validacao Cadastral PF',
				value: 'cvc_pf',
				action: 'Console de validacao cadastral pf',
			},
			{
				name: 'Console De Validacao Cadastral PJ',
				value: 'cvc_pj',
				action: 'Console de validacao cadastral pj',
			},
			{
				name: 'Dados Contexto Do Fluxo - CSJ',
				value: 'dados_contexto_fluxo_csj',
				action: 'Dados contexto do fluxo - csj',
			},
			{
				name: 'Dados Input Do Fluxo - CSJ',
				value: 'dados_input_fluxo_csj',
				action: 'Dados input do fluxo - csj',
			},
			{
				name: 'Distancia Entre Dois Ceps',
				value: 'cpfsrv_distancia_cep_cep',
				action: 'Distancia entre dois ceps',
			},
			{
				name: 'Extracao De Dados Passaporte E CNH',
				value: 'cnh_extracao_dados',
				action: 'Extracao de dados passaporte e cnh',
			},
			{
				name: 'Ip2location',
				value: 'ip2location',
				action: 'Ip2location',
			},
			{
				name: 'Rocket Assessment',
				value: 'cvc_assessment',
				action: 'Rocket assessment',
			},
			{
				name: 'SMS - Envio De Sms Via API Gateway',
				value: 'apigateway_sms',
				action: 'Sms - envio de sms via api gateway',
			},
			{
				name: 'Token Pix',
				value: 'token_pix',
				action: 'Token pix',
			},
			{
				name: 'Validacao De Faturas De Servicos (energia, Agua, Gas, Etc )',
				value: 'validacao_faturas',
				action: 'Validacao de faturas de servicos (energia, agua, gas, etc )',
			},
			{
				name: 'Validacao De Passaporte/cnh',
				value: 'validacao_passaporte_cnh',
				action: 'Validacao de passaporte/cnh',
			},
			{
				name: 'Validacao De Selfie E Documento',
				value: 'validacao_biometrica',
				action: 'Validacao de selfie e documento',
			},
			{
				name: 'Validar Cnh',
				value: 'cnh_digito',
				action: 'Validar cnh',
			}
		],
		default: 'base_dados_contexto',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...base_dados_contexto.description,
	...clearsale.description,
	...cvc_pf.description,
	...cvc_pj.description,
	...dados_contexto_fluxo_csj.description,
	...dados_input_fluxo_csj.description,
	...cpfsrv_distancia_cep_cep.description,
	...cnh_extracao_dados.description,
	...ip2location.description,
	...cvc_assessment.description,
	...apigateway_sms.description,
	...token_pix.description,
	...validacao_faturas.description,
	...validacao_passaporte_cnh.description,
	...validacao_biometrica.description,
	...cnh_digito.description,
];
