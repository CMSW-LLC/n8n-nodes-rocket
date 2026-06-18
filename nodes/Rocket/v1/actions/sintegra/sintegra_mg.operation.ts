/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_mg'] } },
	},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_mg'] } },
		},
	{
			displayName: 'Numero Inscricao Estadual Produtor Rural',
			name: 'ieRural',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_mg'] } },
		},
	{
			displayName: 'IE',
			name: 'ie',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['sintegra'], operation: ['sintegra_mg'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
		'IE_RURAL': this.getNodeParameter('ieRural', i) as string,
		'IE': this.getNodeParameter('ie', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'sintegra_mg', parametros);
}
