/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['cidade_fronteiricas'] } },
	},
	{
			displayName: 'NOME MUNICIPIO',
			name: 'nomeMunicipio',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['cidade_fronteiricas'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME_MUNICIPIO': this.getNodeParameter('nomeMunicipio', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'cidade_fronteiricas', parametros);
}
