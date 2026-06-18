/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['acertid'], operation: ['acertid_resumo_ws'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_resumo_ws'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_resumo_ws'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'INICIADAEM',
			name: 'iniciadaem',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_resumo_ws'] } },
			required: true,
		},
	{
			displayName: 'ID Do Iniciar Consulta',
			name: 'idconsulta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_resumo_ws'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'INICIADAEM': this.getNodeParameter('iniciadaem', i) as string,
		'IDCONSULTA': this.getNodeParameter('idconsulta', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'acertid_resumo_ws', parametros);
}
