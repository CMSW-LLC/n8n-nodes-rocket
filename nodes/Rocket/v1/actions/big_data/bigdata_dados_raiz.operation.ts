/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_raiz'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_raiz'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_raiz'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'NIT',
			name: 'nit',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_raiz'] } },
		},
	{
			displayName: 'DOC',
			name: 'doc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_raiz'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'NIT': this.getNodeParameter('nit', i) as string,
		'DOC': this.getNodeParameter('doc', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'bigdata_dados_raiz', parametros);
}
