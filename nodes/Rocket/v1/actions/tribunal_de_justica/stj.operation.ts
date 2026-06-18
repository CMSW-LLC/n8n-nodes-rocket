/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['stj'] } },
	},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['stj'] } },
		},
	{
			displayName: 'NUM REGISTRO',
			name: 'numRegistro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['stj'] } },
		},
	{
			displayName: 'TIPO PARTE',
			name: 'tipoParte',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['stj'] } },
		},
	{
			displayName: 'FILTRO NOME',
			name: 'filtroNome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['stj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'NUM_REGISTRO': this.getNodeParameter('numRegistro', i) as string,
		'TIPO_PARTE': this.getNodeParameter('tipoParte', i) as string,
		'FILTRO_NOME': this.getNodeParameter('filtroNome', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'stj', parametros);
}
