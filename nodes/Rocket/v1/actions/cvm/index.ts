/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as afast_determinacao_judicial from './afast_determinacao_judicial.operation';
import * as suspensao_cvm from './suspensao_cvm.operation';
import * as cvm_cadastro from './cvm_cadastro.operation';
import * as cvm_processos from './cvm_processos.operation';
import * as deliberacoes_cvm from './deliberacoes_cvm.operation';
import * as identificacao_processo_cvm from './identificacao_processo_cvm.operation';

export { afast_determinacao_judicial, suspensao_cvm, cvm_cadastro, cvm_processos, deliberacoes_cvm, identificacao_processo_cvm };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cvm'],
			},
		},
		options: [
			{
				name: 'Afastamentos Por Determinacao Judicial',
				value: 'afast_determinacao_judicial',
				action: 'Afastamentos por determinacao judicial',
			},
			{
				name: 'CVM Consulta Suspensao das Atividades de Intermediacao Irregular',
				value: 'suspensao_cvm',
				action: 'Cvm consulta suspensao das atividades de intermediacao irregular',
			},
			{
				name: 'CVM Dados Cadastrais',
				value: 'cvm_cadastro',
				action: 'Cvm dados cadastrais',
			},
			{
				name: 'CVM Processos Consulta de Processos',
				value: 'cvm_processos',
				action: 'Cvm processos consulta de processos',
			},
			{
				name: 'Deliberacoes CVM Alertas de Suspensao',
				value: 'deliberacoes_cvm',
				action: 'Deliberacoes cvm alertas de suspensao',
			},
			{
				name: 'Identificacao de Processo CVM',
				value: 'identificacao_processo_cvm',
				action: 'Identificacao de processo cvm',
			}
		],
		default: 'afast_determinacao_judicial',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...afast_determinacao_judicial.description,
	...suspensao_cvm.description,
	...cvm_cadastro.description,
	...cvm_processos.description,
	...deliberacoes_cvm.description,
	...identificacao_processo_cvm.description,
];
