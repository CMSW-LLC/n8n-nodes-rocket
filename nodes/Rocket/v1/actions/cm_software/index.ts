/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as base_dados_contexto from './base_dados_contexto.operation';
import * as clearsale from './clearsale.operation';
import * as cvc_pf from './cvc_pf.operation';
import * as cvc_pj from './cvc_pj.operation';
import * as cnh_extracao_dados from './cnh_extracao_dados.operation';
import * as ip2location from './ip2location.operation';
import * as cvc_assessment from './cvc_assessment.operation';
import * as apigateway_sms from './apigateway_sms.operation';
import * as cnh_digito from './cnh_digito.operation';

export { base_dados_contexto, clearsale, cvc_pf, cvc_pj, cnh_extracao_dados, ip2location, cvc_assessment, apigateway_sms, cnh_digito };

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
	...cnh_extracao_dados.description,
	...ip2location.description,
	...cvc_assessment.description,
	...apigateway_sms.description,
	...cnh_digito.description,
];
