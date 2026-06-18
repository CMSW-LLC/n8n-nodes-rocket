/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'TELEFONE',
			name: 'telefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
		},
	{
			displayName: 'DOCUMENTO TIPO',
			name: 'documentoTipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
		},
	{
			displayName: 'SESSION ID',
			name: 'sessionId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
		},
	{
			displayName: 'TIPO',
			name: 'tipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
		},
	{
			displayName: 'SEND OPTION',
			name: 'sendOption',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
		},
	{
			displayName: 'EMAIL',
			name: 'email',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
			placeholder: 'name@email.com',
		},
	{
			displayName: 'CEP',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
		},
	{
			displayName: 'COD AREA',
			name: 'codArea',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['clearsale'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'TELEFONE': this.getNodeParameter('telefone', i) as string,
		'DOCUMENTO_TIPO': this.getNodeParameter('documentoTipo', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'SESSION_ID': this.getNodeParameter('sessionId', i) as string,
		'TIPO': this.getNodeParameter('tipo', i) as string,
		'SEND_OPTION': this.getNodeParameter('sendOption', i) as string,
		'EMAIL': this.getNodeParameter('email', i) as string,
		'CEP': this.getNodeParameter('cep', i) as string,
		'COD_AREA': this.getNodeParameter('codArea', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'clearsale', parametros);
}
