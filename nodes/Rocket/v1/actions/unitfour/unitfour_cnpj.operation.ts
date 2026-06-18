/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['unitfour'], operation: ['unitfour_cnpj'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['unitfour'], operation: ['unitfour_cnpj'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['unitfour'], operation: ['unitfour_cnpj'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['unitfour'], operation: ['unitfour_cnpj'] } },
			required: true,
		},
	{
			displayName: 'TIPO',
			name: 'tipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['unitfour'], operation: ['unitfour_cnpj'] } },
			required: true,
		},
	{
			displayName: 'CLIENTE',
			name: 'cliente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['unitfour'], operation: ['unitfour_cnpj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'TIPO': this.getNodeParameter('tipo', i) as string,
		'CLIENTE': this.getNodeParameter('cliente', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'unitfour_cnpj', parametros);
}
