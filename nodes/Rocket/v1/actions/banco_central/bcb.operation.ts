/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'NUM HISTORICO',
			name: 'numHistorico',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
		},
	{
			displayName: 'TIPORETORNO',
			name: 'tiporetorno',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
		},
	{
			displayName: 'Tp Cliente',
			name: 'tpcliente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
			required: true,
		},
	{
			displayName: 'Cod Cliente',
			name: 'codcliente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
		},
	{
			displayName: 'Data Base',
			name: 'database',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['banco_central'], operation: ['bcb'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'NUM_HISTORICO': this.getNodeParameter('numHistorico', i) as string,
		'TIPORETORNO': this.getNodeParameter('tiporetorno', i) as string,
		'tpCliente': this.getNodeParameter('tpcliente', i) as string,
		'codCliente': this.getNodeParameter('codcliente', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'dataBase': this.getNodeParameter('database', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'bcb',
		parametros,
		webhookUrl,
	});
}
