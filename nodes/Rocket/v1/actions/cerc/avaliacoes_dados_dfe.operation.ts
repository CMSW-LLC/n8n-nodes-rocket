/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cerc'], operation: ['avaliacoes_dados_dfe'] } },
	},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['avaliacoes_dados_dfe'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['avaliacoes_dados_dfe'] } },
		},
	{
			displayName: 'Validacao ID',
			name: 'validacaoId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['avaliacoes_dados_dfe'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'TOKEN': this.getNodeParameter('token', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'VALIDACAO_ID': this.getNodeParameter('validacaoId', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'avaliacoes_dados_dfe',
		parametros,
		webhookUrl,
	});
}
