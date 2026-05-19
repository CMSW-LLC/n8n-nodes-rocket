/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Documento',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
			required: true,
		},
	{
			displayName: 'RAZAO Social',
			name: 'razaoSocial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['big_data'], operation: ['bigdata_dados_pj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'RAZAO_SOCIAL': this.getNodeParameter('razaoSocial', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'bigdata_dados_pj',
		parametros,
		webhookUrl,
	});
}
