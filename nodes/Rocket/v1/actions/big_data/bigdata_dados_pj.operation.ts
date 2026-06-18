/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
			required: true,
		},
	{
			displayName: 'RAZAO SOCIAL',
			name: 'razaoSocial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'RAZAO_SOCIAL': this.getNodeParameter('razaoSocial', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'bigdata_dados_pj', parametros);
}
