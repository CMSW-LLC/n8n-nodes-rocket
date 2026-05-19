/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
	},
	{
			displayName: 'ANO INI',
			name: 'anoIni',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
		},
	{
			displayName: 'NUM Processo',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
		},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
		},
	{
			displayName: 'Origem',
			name: 'origem',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
		},
	{
			displayName: 'Competencia',
			name: 'competencia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
		},
	{
			displayName: 'ANO FIM',
			name: 'anoFim',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
		},
	{
			displayName: 'Comarca',
			name: 'comarca',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'ANO_INI': this.getNodeParameter('anoIni', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
		'ORIGEM': this.getNodeParameter('origem', i) as string,
		'COMPETENCIA': this.getNodeParameter('competencia', i) as string,
		'ANO_FIM': this.getNodeParameter('anoFim', i) as string,
		'COMARCA': this.getNodeParameter('comarca', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'tj_rj',
		parametros,
		webhookUrl,
	});
}
