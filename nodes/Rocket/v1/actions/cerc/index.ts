/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as avaliacoes_dados_dfe from './avaliacoes_dados_dfe.operation';
import * as avaliacoes_dados_partes from './avaliacoes_dados_partes.operation';
import * as aval_direitos_creditorios from './aval_direitos_creditorios.operation';
import * as avaliacoes_ind_consistencia from './avaliacoes_ind_consistencia.operation';
import * as consulta_aval_eventos from './consulta_aval_eventos.operation';
import * as direitos_creditorios_lote from './direitos_creditorios_lote.operation';
import * as lotes_avaliacoes from './lotes_avaliacoes.operation';

export { avaliacoes_dados_dfe, avaliacoes_dados_partes, aval_direitos_creditorios, avaliacoes_ind_consistencia, consulta_aval_eventos, direitos_creditorios_lote, lotes_avaliacoes };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cerc'],
			},
		},
		options: [
			{
				name: 'Cerc - Avaliacoes Dados Dfe',
				value: 'avaliacoes_dados_dfe',
				action: 'Cerc - avaliacoes dados dfe',
			},
			{
				name: 'Cerc - Avaliacoes Dados Partes',
				value: 'avaliacoes_dados_partes',
				action: 'Cerc - avaliacoes dados partes',
			},
			{
				name: 'Cerc - Avaliacoes Direitos Creditorios',
				value: 'aval_direitos_creditorios',
				action: 'Cerc - avaliacoes direitos creditorios',
			},
			{
				name: 'Cerc - Avaliacoes Indicadores Consistencia',
				value: 'avaliacoes_ind_consistencia',
				action: 'Cerc - avaliacoes indicadores consistencia',
			},
			{
				name: 'Cerc - Consulta De Eventos Da Avaliacao',
				value: 'consulta_aval_eventos',
				action: 'Cerc - consulta de eventos da avaliacao',
			},
			{
				name: 'Cerc - Direitos Creditorios Lote',
				value: 'direitos_creditorios_lote',
				action: 'Cerc - direitos creditorios lote',
			},
			{
				name: 'Cerc - Lotes Avaliacoes',
				value: 'lotes_avaliacoes',
				action: 'Cerc - lotes avaliacoes',
			}
		],
		default: 'avaliacoes_dados_dfe',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...avaliacoes_dados_dfe.description,
	...avaliacoes_dados_partes.description,
	...aval_direitos_creditorios.description,
	...avaliacoes_ind_consistencia.description,
	...consulta_aval_eventos.description,
	...direitos_creditorios_lote.description,
	...lotes_avaliacoes.description,
];
