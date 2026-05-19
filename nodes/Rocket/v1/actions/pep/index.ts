/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as coaf_pep from './coaf_pep.operation';
import * as crsfn from './crsfn.operation';
import * as csnu from './csnu.operation';
import * as csnu_ue from './csnu_ue.operation';
import * as doadores_fornecedores_politicas from './doadores_fornecedores_politicas.operation';
import * as dowjones from './dowjones.operation';
import * as dowjones_resposta from './dowjones_resposta.operation';
import * as dowjones_token from './dowjones_token.operation';
import * as indicio_fraude_clearsale from './indicio_fraude_clearsale.operation';
import * as ofac_consolidated_list from './ofac_consolidated_list.operation';
import * as ofac_sanctions_list from './ofac_sanctions_list.operation';
import * as poder360_detalhe from './poder360_detalhe.operation';
import * as poder360_lista from './poder360_lista.operation';
import * as sancoes_banco_mundial from './sancoes_banco_mundial.operation';
import * as tse_dados_eleitorais from './tse_dados_eleitorais.operation';
import * as accuity from './accuity.operation';

export { coaf_pep, crsfn, csnu, csnu_ue, doadores_fornecedores_politicas, dowjones, dowjones_resposta, dowjones_token, indicio_fraude_clearsale, ofac_consolidated_list, ofac_sanctions_list, poder360_detalhe, poder360_lista, sancoes_banco_mundial, tse_dados_eleitorais, accuity };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['pep'],
			},
		},
		options: [
			{
				name: 'Coaf PEP',
				value: 'coaf_pep',
				action: 'Coaf pep',
			},
			{
				name: 'CRSFN',
				value: 'crsfn',
				action: 'Crsfn',
			},
			{
				name: 'CSNU Lista de Sancoes da ONU',
				value: 'csnu',
				action: 'Csnu lista de sancoes da onu',
			},
			{
				name: 'CSNU Lista de Sancoes da UE',
				value: 'csnu_ue',
				action: 'Csnu lista de sancoes da ue',
			},
			{
				name: 'Doadores e Fornecedores Politicas',
				value: 'doadores_fornecedores_politicas',
				action: 'Doadores e fornecedores politicas',
			},
			{
				name: 'Dow Jones API Risk And Compliance',
				value: 'dowjones',
				action: 'Dow jones api risk and compliance',
			},
			{
				name: 'Dowjones Resposta',
				value: 'dowjones_resposta',
				action: 'Dowjones resposta',
			},
			{
				name: 'Dowjones Token',
				value: 'dowjones_token',
				action: 'Dowjones token',
			},
			{
				name: 'Indicio Fraude Clearsale',
				value: 'indicio_fraude_clearsale',
				action: 'Indicio fraude clearsale',
			},
			{
				name: 'OFAC Consolidated List',
				value: 'ofac_consolidated_list',
				action: 'Ofac consolidated list',
			},
			{
				name: 'OFAC Sanctions List Search',
				value: 'ofac_sanctions_list',
				action: 'Ofac sanctions list search',
			},
			{
				name: 'Poder 360 Politicos Detalhe',
				value: 'poder360_detalhe',
				action: 'Poder 360 politicos detalhe',
			},
			{
				name: 'Poder 360 Politicos Lista',
				value: 'poder360_lista',
				action: 'Poder 360 politicos lista',
			},
			{
				name: 'Sancoes Banco Mundial',
				value: 'sancoes_banco_mundial',
				action: 'Sancoes banco mundial',
			},
			{
				name: 'TSE Repositorio de Dados Eleitorais Candidatos',
				value: 'tse_dados_eleitorais',
				action: 'Tse repositorio de dados eleitorais candidatos',
			},
			{
				name: 'Webservice Accuity',
				value: 'accuity',
				action: 'Webservice accuity',
			}
		],
		default: 'coaf_pep',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...coaf_pep.description,
	...crsfn.description,
	...csnu.description,
	...csnu_ue.description,
	...doadores_fornecedores_politicas.description,
	...dowjones.description,
	...dowjones_resposta.description,
	...dowjones_token.description,
	...indicio_fraude_clearsale.description,
	...ofac_consolidated_list.description,
	...ofac_sanctions_list.description,
	...poder360_detalhe.description,
	...poder360_lista.description,
	...sancoes_banco_mundial.description,
	...tse_dados_eleitorais.description,
	...accuity.description,
];
