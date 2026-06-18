/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['allcheck'], operation: ['allchktel'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['allcheck'], operation: ['allchktel'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['allcheck'], operation: ['allchktel'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Telefone',
			name: 'telefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['allcheck'], operation: ['allchktel'] } },
		},
	{
			displayName: 'DDD Do Telefone',
			name: 'ddd',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['allcheck'], operation: ['allchktel'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'TELEFONE': this.getNodeParameter('telefone', i) as string,
		'DDD': this.getNodeParameter('ddd', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'allchktel', parametros);
}
