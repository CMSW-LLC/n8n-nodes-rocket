/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

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
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['avaliacoes_dados_dfe'] } },
		},
	{
			displayName: 'VALIDACAO ID',
			name: 'validacaoId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['avaliacoes_dados_dfe'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'TOKEN': this.getNodeParameter('token', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'VALIDACAO_ID': this.getNodeParameter('validacaoId', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'avaliacoes_dados_dfe', parametros);
}
