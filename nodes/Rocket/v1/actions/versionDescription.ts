/* eslint-disable n8n-nodes-base/node-filename-against-convention */
/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import { NodeConnectionTypes, type INodeTypeDescription } from 'n8n-workflow';

import * as acertid from './acertid';
import * as allcheck from './allcheck';
import * as alloha from './alloha';
import * as andbank from './andbank';
import * as assertiva from './assertiva';
import * as bancoCentral from './banco_central';
import * as biancogres from './biancogres';
import * as bigData from './big_data';
import * as bigboost from './bigboost';
import * as boaVista from './boa_vista';
import * as bovespa from './bovespa';
import * as bradesco from './bradesco';
import * as brain from './brain';
import * as cadposBoaVista from './cadpos_boa_vista';
import * as capitalys from './capitalys';
import * as ccb from './ccb';
import * as cerc from './cerc';
import * as checkbem from './checkbem';
import * as cmSoftware from './cm_software';
import * as cnseg from './cnseg';
import * as coface from './coface';
import * as correios from './correios';
import * as cvm from './cvm';
import * as deptoDeTransito from './depto_de_transito';
import * as europa from './europa';
import * as federal from './federal';
import * as idwall from './idwall';
import * as inovamind from './inovamind';
import * as juntasComerciais from './juntas_comerciais';
import * as lexisNexis from './lexis_nexis';
import * as neoway from './neoway';
import * as novaVida from './nova_vida';
import * as openbanking from './openbanking';
import * as osas from './osas';
import * as pagtur from './pagtur';
import * as pep from './pep';
import * as policia from './policia';
import * as prefeituras from './prefeituras';
import * as promobank from './promobank';
import * as quod from './quod';
import * as receitaFederal from './receita_federal';
import * as resolv from './resolv';
import * as rpa from './rpa';
import * as secrDaFazenda from './secr_da_fazenda';
import * as serasa from './serasa';
import * as servicos from './servicos';
import * as sintegra from './sintegra';
import * as spc from './spc';
import * as telefonia from './telefonia';
import * as tribunalDeJustica from './tribunal_de_justica';
import * as tribunalSuperior from './tribunal_superior';
import * as unitfour from './unitfour';
import * as usaCriminal from './usa_criminal';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Rocket',
	name: 'rocket',
	icon: { light: 'file:rocket.svg', dark: 'file:rocket-dark.svg' },
	group: ['transform'],
	version: 1,
	subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
	description: 'Consulta dados de provedores de serviços',
	defaults: {
		name: 'Rocket',
	},
	inputs: [NodeConnectionTypes.Main],
	outputs: [NodeConnectionTypes.Main],
	credentials: [
		{
			name: 'rocketApi',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'ACERTID', value: 'acertid' },
				{ name: 'ALLCHECK', value: 'allcheck' },
				{ name: 'Alloha', value: 'alloha' },
				{ name: 'ANDBANK', value: 'andbank' },
				{ name: 'ASSERTIVA', value: 'assertiva' },
				{ name: 'BANCO CENTRAL', value: 'banco_central' },
				{ name: 'BIANCOGRES', value: 'biancogres' },
				{ name: 'BIG DATA', value: 'big_data' },
				{ name: 'BigBoost', value: 'bigboost' },
				{ name: 'BOA VISTA', value: 'boa_vista' },
				{ name: 'BOVESPA', value: 'bovespa' },
				{ name: 'BRADESCO', value: 'bradesco' },
				{ name: 'Brain', value: 'brain' },
				{ name: 'CAD.POS BOA VISTA', value: 'cadpos_boa_vista' },
				{ name: 'CAPITALYS', value: 'capitalys' },
				{ name: 'CCB', value: 'ccb' },
				{ name: 'CERC', value: 'cerc' },
				{ name: 'CHECKBEM', value: 'checkbem' },
				{ name: 'CM_SOFTWARE', value: 'cm_software' },
				{ name: 'CNSEG', value: 'cnseg' },
				{ name: 'COFACE', value: 'coface' },
				{ name: 'CORREIOS', value: 'correios' },
				{ name: 'CVM', value: 'cvm' },
				{ name: 'DEPTO DE TRANSITO', value: 'depto_de_transito' },
				{ name: 'EUROPA', value: 'europa' },
				{ name: 'FEDERAL', value: 'federal' },
				{ name: 'IDWall', value: 'idwall' },
				{ name: 'INOVAMIND', value: 'inovamind' },
				{ name: 'JUNTAS COMERCIAIS', value: 'juntas_comerciais' },
				{ name: 'Lexis Nexis', value: 'lexis_nexis' },
				{ name: 'NEOWAY', value: 'neoway' },
				{ name: 'NOVA VIDA', value: 'nova_vida' },
				{ name: 'OPENBANKING', value: 'openbanking' },
				{ name: 'OSAS', value: 'osas' },
				{ name: 'PAGTUR', value: 'pagtur' },
				{ name: 'PEP', value: 'pep' },
				{ name: 'POLICIA', value: 'policia' },
				{ name: 'PREFEITURAS', value: 'prefeituras' },
				{ name: 'PROMOBANK', value: 'promobank' },
				{ name: 'QUOD', value: 'quod' },
				{ name: 'RECEITA FEDERAL', value: 'receita_federal' },
				{ name: 'RESOLV', value: 'resolv' },
				{ name: 'RPA', value: 'rpa' },
				{ name: 'SECR DA FAZENDA', value: 'secr_da_fazenda' },
				{ name: 'SERASA', value: 'serasa' },
				{ name: 'SERVICOS', value: 'servicos' },
				{ name: 'SINTEGRA', value: 'sintegra' },
				{ name: 'SPC', value: 'spc' },
				{ name: 'TELEFONIA', value: 'telefonia' },
				{ name: 'TRIBUNAL DE JUSTICA', value: 'tribunal_de_justica' },
				{ name: 'TRIBUNAL SUPERIOR', value: 'tribunal_superior' },
				{ name: 'UNITFOUR', value: 'unitfour' },
				{ name: 'USA CRIMINAL', value: 'usa_criminal' },
			],
			default: 'acertid',
		},
		...acertid.description,
		...allcheck.description,
		...alloha.description,
		...andbank.description,
		...assertiva.description,
		...bancoCentral.description,
		...biancogres.description,
		...bigData.description,
		...bigboost.description,
		...boaVista.description,
		...bovespa.description,
		...bradesco.description,
		...brain.description,
		...cadposBoaVista.description,
		...capitalys.description,
		...ccb.description,
		...cerc.description,
		...checkbem.description,
		...cmSoftware.description,
		...cnseg.description,
		...coface.description,
		...correios.description,
		...cvm.description,
		...deptoDeTransito.description,
		...europa.description,
		...federal.description,
		...idwall.description,
		...inovamind.description,
		...juntasComerciais.description,
		...lexisNexis.description,
		...neoway.description,
		...novaVida.description,
		...openbanking.description,
		...osas.description,
		...pagtur.description,
		...pep.description,
		...policia.description,
		...prefeituras.description,
		...promobank.description,
		...quod.description,
		...receitaFederal.description,
		...resolv.description,
		...rpa.description,
		...secrDaFazenda.description,
		...serasa.description,
		...servicos.description,
		...sintegra.description,
		...spc.description,
		...telefonia.description,
		...tribunalDeJustica.description,
		...tribunalSuperior.description,
		...unitfour.description,
		...usaCriminal.description,
	],
};
