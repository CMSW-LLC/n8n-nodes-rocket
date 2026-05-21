/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['processos_cnj'] } },
	},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['processos_cnj'] } },
		},
	{
			displayName: 'TIPO CONSULTA',
			name: 'tipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['processos_cnj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'TIPO': this.getNodeParameter('tipo', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'processos_cnj',
		parametros,
		webhookUrl,
	});
}
