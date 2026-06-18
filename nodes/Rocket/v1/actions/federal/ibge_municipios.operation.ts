/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['ibge_municipios'] } },
	},
	{
			displayName: 'NOME MUNICIPIO',
			name: 'nomeMunicipio',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibge_municipios'] } },
			required: true,
		},
	{
			displayName: 'NOME UF',
			name: 'nomeUf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['ibge_municipios'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME_MUNICIPIO': this.getNodeParameter('nomeMunicipio', i) as string,
		'NOME_UF': this.getNodeParameter('nomeUf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'ibge_municipios', parametros);
}
