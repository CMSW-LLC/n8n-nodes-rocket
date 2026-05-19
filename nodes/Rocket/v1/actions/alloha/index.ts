/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as alloha_atualizar_status_sydle from './alloha_atualizar_status_sydle.operation';
import * as alloha_conclusao_financeira from './alloha_conclusao_financeira.operation';
import * as alloha_define_risco_positivo from './alloha_define_risco_positivo.operation';
import * as alloha_extracao_dados_finance from './alloha_extracao_dados_finance.operation';
import * as alloha_extracao_dados_qualify from './alloha_extracao_dados_qualify.operation';
import * as alloha_extracao_dados_finance_lote from './alloha_extracao_dados_finance_lote.operation';
import * as alloha_indicar_conclusao_analise_mesa_credito from './alloha_indicar_conclusao_analise_mesa_credito.operation';
import * as alloha_indicar_decisao_automatica from './alloha_indicar_decisao_automatica.operation';
import * as alloha_indicar_fim_analise from './alloha_indicar_fim_analise.operation';
import * as alloha_obter_dados_analise from './alloha_obter_dados_analise.operation';
import * as alloha_obter_link_doc from './alloha_obter_link_doc.operation';
import * as alloha_obter_status_venda from './alloha_obter_status_venda.operation';
import * as alloha_busca_end_cep_bairro from './alloha_busca_end_cep_bairro.operation';
import * as alloha_busca_prospecto_id from './alloha_busca_prospecto_id.operation';
import * as alloha_b2e_atualizar_parecer from './alloha_b2e_atualizar_parecer.operation';
import * as alloha_b2e_envio_proposta from './alloha_b2e_envio_proposta.operation';
import * as alloha_b2e_obter_parecer from './alloha_b2e_obter_parecer.operation';
import * as alloha_clearsale_datatrust from './alloha_clearsale_datatrust.operation';

export { alloha_atualizar_status_sydle, alloha_conclusao_financeira, alloha_define_risco_positivo, alloha_extracao_dados_finance, alloha_extracao_dados_qualify, alloha_extracao_dados_finance_lote, alloha_indicar_conclusao_analise_mesa_credito, alloha_indicar_decisao_automatica, alloha_indicar_fim_analise, alloha_obter_dados_analise, alloha_obter_link_doc, alloha_obter_status_venda, alloha_busca_end_cep_bairro, alloha_busca_prospecto_id, alloha_b2e_atualizar_parecer, alloha_b2e_envio_proposta, alloha_b2e_obter_parecer, alloha_clearsale_datatrust };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['alloha'],
			},
		},
		options: [
			{
				name: 'Alloha - Atualizar Status No SYDLE',
				value: 'alloha_atualizar_status_sydle',
				action: 'Alloha - atualizar status no sydle',
			},
			{
				name: 'Alloha - Conclusao Da Analise Financeira',
				value: 'alloha_conclusao_financeira',
				action: 'Alloha - conclusao da analise financeira',
			},
			{
				name: 'Alloha - Define Risco Positivo',
				value: 'alloha_define_risco_positivo',
				action: 'Alloha - define risco positivo',
			},
			{
				name: 'Alloha - Extracao De Dados - Financial Analysis',
				value: 'alloha_extracao_dados_finance',
				action: 'Alloha - extracao de dados - financial analysis',
			},
			{
				name: 'Alloha - Extracao De Dados - Qualify Analysis',
				value: 'alloha_extracao_dados_qualify',
				action: 'Alloha - extracao de dados - qualify analysis',
			},
			{
				name: 'Alloha - Extracao De Dados Do Cliente Em Lote',
				value: 'alloha_extracao_dados_finance_lote',
				action: 'Alloha - extracao de dados do cliente em lote',
			},
			{
				name: 'Alloha - Indicar Conclusao Da Analise Da Mesa De Credito',
				value: 'alloha_indicar_conclusao_analise_mesa_credito',
				action: 'Alloha - indicar conclusao da analise da mesa de credito',
			},
			{
				name: 'Alloha - Indicar Decisao Automatica',
				value: 'alloha_indicar_decisao_automatica',
				action: 'Alloha - indicar decisao automatica',
			},
			{
				name: 'Alloha - Indicar Fim Da Analise',
				value: 'alloha_indicar_fim_analise',
				action: 'Alloha - indicar fim da analise',
			},
			{
				name: 'Alloha - Obter Dados Para A Analise',
				value: 'alloha_obter_dados_analise',
				action: 'Alloha - obter dados para a analise',
			},
			{
				name: 'Alloha - Obter Link Para Download De Documento',
				value: 'alloha_obter_link_doc',
				action: 'Alloha - obter link para download de documento',
			},
			{
				name: 'Alloha - Obter Status Da Venda',
				value: 'alloha_obter_status_venda',
				action: 'Alloha - obter status da venda',
			},
			{
				name: 'Alloha Adapter - Buscar Endereco Cep Bairro',
				value: 'alloha_busca_end_cep_bairro',
				action: 'Alloha adapter - buscar endereco cep bairro',
			},
			{
				name: 'Alloha Adapter - Buscar Prospecto ID',
				value: 'alloha_busca_prospecto_id',
				action: 'Alloha adapter - buscar prospecto id',
			},
			{
				name: 'Alloha B2e Atualizar Parecer',
				value: 'alloha_b2e_atualizar_parecer',
				action: 'Alloha b2e atualizar parecer',
			},
			{
				name: 'Alloha B2e Envio De Proposta',
				value: 'alloha_b2e_envio_proposta',
				action: 'Alloha b2e envio de proposta',
			},
			{
				name: 'Alloha B2e Obter Parecer',
				value: 'alloha_b2e_obter_parecer',
				action: 'Alloha b2e obter parecer',
			},
			{
				name: 'Clear Sale Data Trust',
				value: 'alloha_clearsale_datatrust',
				action: 'Clear sale data trust',
			}
		],
		default: 'alloha_atualizar_status_sydle',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...alloha_atualizar_status_sydle.description,
	...alloha_conclusao_financeira.description,
	...alloha_define_risco_positivo.description,
	...alloha_extracao_dados_finance.description,
	...alloha_extracao_dados_qualify.description,
	...alloha_extracao_dados_finance_lote.description,
	...alloha_indicar_conclusao_analise_mesa_credito.description,
	...alloha_indicar_decisao_automatica.description,
	...alloha_indicar_fim_analise.description,
	...alloha_obter_dados_analise.description,
	...alloha_obter_link_doc.description,
	...alloha_obter_status_venda.description,
	...alloha_busca_end_cep_bairro.description,
	...alloha_busca_prospecto_id.description,
	...alloha_b2e_atualizar_parecer.description,
	...alloha_b2e_envio_proposta.description,
	...alloha_b2e_obter_parecer.description,
	...alloha_clearsale_datatrust.description,
];
