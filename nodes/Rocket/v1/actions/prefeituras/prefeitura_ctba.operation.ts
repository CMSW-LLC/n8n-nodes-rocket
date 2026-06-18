/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_ctba'] } },
	},
	{
			displayName: 'INSC MUNICIPAL',
			name: 'inscMunicipal',
			type: 'number',
			default: 0,
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_ctba'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_ctba'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_ctba'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_ctba'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'INSC_MUNICIPAL': this.getNodeParameter('inscMunicipal', i) as number,
		'NOME': this.getNodeParameter('nome', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'prefeitura_ctba', parametros);
}
