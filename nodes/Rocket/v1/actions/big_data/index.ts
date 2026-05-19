/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as bigdata_relacionamento from './bigdata_relacionamento.operation';
import * as bigdata_dados_pj from './bigdata_dados_pj.operation';
import * as bigdata_ind_ativ_pj from './bigdata_ind_ativ_pj.operation';
import * as bigdata_dados_pessoas from './bigdata_dados_pessoas.operation';
import * as bigdata_dados_raiz from './bigdata_dados_raiz.operation';

export { bigdata_relacionamento, bigdata_dados_pj, bigdata_ind_ativ_pj, bigdata_dados_pessoas, bigdata_dados_raiz };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['big_data'],
			},
		},
		options: [
			{
				name: 'BIG DATA DADOS PJ',
				value: 'bigdata_dados_pj',
				action: 'Big data dados pj',
			},
			{
				name: 'BIG DATA Indicadores de Atividade PJ',
				value: 'bigdata_ind_ativ_pj',
				action: 'Big data indicadores de atividade pj',
			},
			{
				name: 'Big Data Pessoas Dados Basicos',
				value: 'bigdata_dados_pessoas',
				action: 'Big data pessoas dados basicos',
			},
			{
				name: 'BIG DATA Relacionamentos',
				value: 'bigdata_relacionamento',
				action: 'Big data relacionamentos',
			},
			{
				name: 'Bigdata DADOS RAIZ',
				value: 'bigdata_dados_raiz',
				action: 'Bigdata dados raiz',
			}
		],
		default: 'bigdata_dados_pj',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...bigdata_relacionamento.description,
	...bigdata_dados_pj.description,
	...bigdata_ind_ativ_pj.description,
	...bigdata_dados_pessoas.description,
	...bigdata_dados_raiz.description,
];
