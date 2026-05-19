/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['assertiva'], operation: ['assertiva_tarifado'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['assertiva'], operation: ['assertiva_tarifado'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['assertiva'], operation: ['assertiva_tarifado'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['assertiva'], operation: ['assertiva_tarifado'] } },
			required: true,
		},
	{
			displayName: 'ID FINALIDADE',
			name: 'idFinalidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['assertiva'], operation: ['assertiva_tarifado'] } },
			required: true,
		},
	{
			displayName: 'PLUS',
			name: 'plus',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['assertiva'], operation: ['assertiva_tarifado'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'ID_FINALIDADE': this.getNodeParameter('idFinalidade', i) as string,
		'PLUS': this.getNodeParameter('plus', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'assertiva_tarifado',
		parametros,
		webhookUrl,
	});
}
