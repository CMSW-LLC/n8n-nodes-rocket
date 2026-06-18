/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['usa_criminal'], operation: ['linkedin'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['linkedin'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['linkedin'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'PASSWORD',
			name: 'password',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['linkedin'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'COMPANIE',
			name: 'companie',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['linkedin'] } },
			required: true,
		},
	{
			displayName: 'USERNAME',
			name: 'username',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['usa_criminal'], operation: ['linkedin'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'PASSWORD': this.getNodeParameter('password', i) as string,
		'COMPANIE': this.getNodeParameter('companie', i) as string,
		'USERNAME': this.getNodeParameter('username', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'linkedin', parametros);
}
