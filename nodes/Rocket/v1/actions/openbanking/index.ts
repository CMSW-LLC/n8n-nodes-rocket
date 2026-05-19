/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { INodeProperties } from 'n8n-workflow';

import * as ob_consulta_dict from './ob_consulta_dict.operation';
import * as ob_consulta_dict_estatistica from './ob_consulta_dict_estatistica.operation';
import * as ob_consulta_dict_regkey from './ob_consulta_dict_regkey.operation';

export { ob_consulta_dict, ob_consulta_dict_estatistica, ob_consulta_dict_regkey };

const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['openbanking'],
			},
		},
		options: [
			{
				name: 'OPEN BANKING - Consulta Dict',
				value: 'ob_consulta_dict',
				action: 'Open banking - consulta dict',
			},
			{
				name: 'OPENBANKING - Consulta Dict - Estatistica',
				value: 'ob_consulta_dict_estatistica',
				action: 'Openbanking - consulta dict - estatistica',
			},
			{
				name: 'OPENBANKING - Consulta Dict Chave Registrada',
				value: 'ob_consulta_dict_regkey',
				action: 'Openbanking - consulta dict chave registrada',
			}
		],
		default: 'ob_consulta_dict',
	},
];

export const description: INodeProperties[] = [
	...operations,
	...ob_consulta_dict.description,
	...ob_consulta_dict_estatistica.description,
	...ob_consulta_dict_regkey.description,
];
