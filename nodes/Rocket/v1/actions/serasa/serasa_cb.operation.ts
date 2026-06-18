/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['serasa_cb'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_cb'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_cb'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_cb'] } },
		},
	{
			displayName: 'CPF PF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_cb'] } },
		},
	{
			displayName: 'Feature',
			name: 'score',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_cb'] } },
		},
	{
			displayName: 'CNPJ PJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_cb'] } },
		},
	{
			displayName: 'Tipo De Consulta Para Credit Bureau - PF Ou PJ',
			name: 'consulta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_cb'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'SCORE': this.getNodeParameter('score', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'CONSULTA': this.getNodeParameter('consulta', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'serasa_cb', parametros);
}
