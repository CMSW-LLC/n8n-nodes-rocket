/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as idwall_pep_resp from './idwall_pep_resp.operation';
import * as idwall_doc_copia from './idwall_doc_copia.operation';
import * as idwall_doc_copia_resp from './idwall_doc_copia_resp.operation';
import * as idwall_endereco from './idwall_endereco.operation';
import * as idwall_endereco_resp from './idwall_endereco_resp.operation';
import * as idwall_midias_n_pf from './idwall_midias_n_pf.operation';
import * as idwall_midias_n_pf_resp from './idwall_midias_n_pf_resp.operation';
import * as idwall_midias_n_pj from './idwall_midias_n_pj.operation';
import * as idwall_midias_n_pj_resp from './idwall_midias_n_pj_resp.operation';
import * as idwall_pep from './idwall_pep.operation';
import * as idwall_processos_pj from './idwall_processos_pj.operation';
import * as idwall_processos_pj_resp from './idwall_processos_pj_resp.operation';
import * as idwall_processos from './idwall_processos.operation';
import * as idwall_processos_resp from './idwall_processos_resp.operation';

export { idwall_pep_resp, idwall_doc_copia, idwall_doc_copia_resp, idwall_endereco, idwall_endereco_resp, idwall_midias_n_pf, idwall_midias_n_pf_resp, idwall_midias_n_pj, idwall_midias_n_pj_resp, idwall_pep, idwall_processos_pj, idwall_processos_pj_resp, idwall_processos, idwall_processos_resp };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['idwall'],
			},
		},
		options: [
			{
				name: 'ID WALL PEP Resposta',
				value: 'idwall_pep_resp',
				action: 'Id wall pep resposta',
			},
			{
				name: 'Idwall Documentoscopia',
				value: 'idwall_doc_copia',
				action: 'Idwall documentoscopia',
			},
			{
				name: 'Idwall Documentoscopia Resposta',
				value: 'idwall_doc_copia_resp',
				action: 'Idwall documentoscopia resposta',
			},
			{
				name: 'Idwall Enderecos',
				value: 'idwall_endereco',
				action: 'Idwall enderecos',
			},
			{
				name: 'Idwall Enderecos Resposta',
				value: 'idwall_endereco_resp',
				action: 'Idwall enderecos resposta',
			},
			{
				name: 'Idwall Midias Negativas PF',
				value: 'idwall_midias_n_pf',
				action: 'Idwall midias negativas pf',
			},
			{
				name: 'Idwall Midias Negativas PF Resposta',
				value: 'idwall_midias_n_pf_resp',
				action: 'Idwall midias negativas pf resposta',
			},
			{
				name: 'Idwall Midias Negativas PJ',
				value: 'idwall_midias_n_pj',
				action: 'Idwall midias negativas pj',
			},
			{
				name: 'Idwall Midias Negativas PJ Resposta',
				value: 'idwall_midias_n_pj_resp',
				action: 'Idwall midias negativas pj resposta',
			},
			{
				name: 'Idwall PEP',
				value: 'idwall_pep',
				action: 'Idwall pep',
			},
			{
				name: 'Idwall Processos',
				value: 'idwall_processos',
				action: 'Idwall processos',
			},
			{
				name: 'IDWALL Processos PJ',
				value: 'idwall_processos_pj',
				action: 'Idwall processos pj',
			},
			{
				name: 'IDWALL Processos PJ Resposta',
				value: 'idwall_processos_pj_resp',
				action: 'Idwall processos pj resposta',
			},
			{
				name: 'Idwall Processos Resp',
				value: 'idwall_processos_resp',
				action: 'Idwall processos resp',
			}
		],
		default: 'idwall_pep_resp',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...idwall_pep_resp.description,
	...idwall_doc_copia.description,
	...idwall_doc_copia_resp.description,
	...idwall_endereco.description,
	...idwall_endereco_resp.description,
	...idwall_midias_n_pf.description,
	...idwall_midias_n_pf_resp.description,
	...idwall_midias_n_pj.description,
	...idwall_midias_n_pj_resp.description,
	...idwall_pep.description,
	...idwall_processos_pj.description,
	...idwall_processos_pj_resp.description,
	...idwall_processos.description,
	...idwall_processos_resp.description,
];
