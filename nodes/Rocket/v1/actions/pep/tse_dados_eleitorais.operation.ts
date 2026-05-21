/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['tse_dados_eleitorais'] } },
	},
	{
			displayName: 'NM PARTIDO',
			name: 'nmPartido',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['tse_dados_eleitorais'] } },
		},
	{
			displayName: 'DT NASC',
			name: 'dtNasc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['tse_dados_eleitorais'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['tse_dados_eleitorais'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['tse_dados_eleitorais'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NM_PARTIDO': this.getNodeParameter('nmPartido', i) as string,
		'DT_NASC': this.getNodeParameter('dtNasc', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'tse_dados_eleitorais',
		parametros,
		webhookUrl,
	});
}
