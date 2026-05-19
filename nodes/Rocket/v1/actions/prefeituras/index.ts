/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as prefeitura_bh from './prefeitura_bh.operation';
import * as prefeitura_cuiaba from './prefeitura_cuiaba.operation';
import * as prefeitura_brasilia from './prefeitura_brasilia.operation';
import * as prefeitura_ctba from './prefeitura_ctba.operation';
import * as prefeitura_sp from './prefeitura_sp.operation';
import * as prefeitura_riojaneiro from './prefeitura_riojaneiro.operation';
import * as prefeitura_goiania from './prefeitura_goiania.operation';
import * as pref_porto_alegre from './pref_porto_alegre.operation';
import * as prefeitura_porto_velho from './prefeitura_porto_velho.operation';

export { prefeitura_bh, prefeitura_cuiaba, prefeitura_brasilia, prefeitura_ctba, prefeitura_sp, prefeitura_riojaneiro, prefeitura_goiania, pref_porto_alegre, prefeitura_porto_velho };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['prefeituras'],
			},
		},
		options: [
			{
				name: 'Prefeitura BH (certidao/Fic)',
				value: 'prefeitura_bh',
				action: 'Prefeitura bh (certidao/fic)',
			},
			{
				name: 'Prefeitura Cuiaba',
				value: 'prefeitura_cuiaba',
				action: 'Prefeitura cuiaba',
			},
			{
				name: 'Prefeitura de Brasilia',
				value: 'prefeitura_brasilia',
				action: 'Prefeitura de brasilia',
			},
			{
				name: 'Prefeitura de Curitiba',
				value: 'prefeitura_ctba',
				action: 'Prefeitura de curitiba',
			},
			{
				name: 'Prefeitura de Sao Paulo Dados Cadastrais',
				value: 'prefeitura_sp',
				action: 'Prefeitura de sao paulo dados cadastrais',
			},
			{
				name: 'Prefeitura do Rio de Janeiro',
				value: 'prefeitura_riojaneiro',
				action: 'Prefeitura do rio de janeiro',
			},
			{
				name: 'Prefeitura Goiania',
				value: 'prefeitura_goiania',
				action: 'Prefeitura goiania',
			},
			{
				name: 'Prefeitura Porto Alegre',
				value: 'pref_porto_alegre',
				action: 'Prefeitura porto alegre',
			},
			{
				name: 'Prefeitura Porto Velho',
				value: 'prefeitura_porto_velho',
				action: 'Prefeitura porto velho',
			}
		],
		default: 'prefeitura_bh',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...prefeitura_bh.description,
	...prefeitura_cuiaba.description,
	...prefeitura_brasilia.description,
	...prefeitura_ctba.description,
	...prefeitura_sp.description,
	...prefeitura_riojaneiro.description,
	...prefeitura_goiania.description,
	...pref_porto_alegre.description,
	...prefeitura_porto_velho.description,
];
