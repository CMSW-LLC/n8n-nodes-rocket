/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_extracao_dados'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_extracao_dados'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_extracao_dados'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Documento URL',
			name: 'documentoUrl',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_extracao_dados'] } },
		},
	{
			displayName: 'Documento Ticket',
			name: 'documentoTicket',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_extracao_dados'] } },
		},
	{
			displayName: 'Documento UID',
			name: 'documentoUid',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_extracao_dados'] } },
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cnh_extracao_dados'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'DOCUMENTO_URL': this.getNodeParameter('documentoUrl', i) as string,
		'DOCUMENTO_TICKET': this.getNodeParameter('documentoTicket', i) as string,
		'DOCUMENTO_UID': this.getNodeParameter('documentoUid', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'cnh_extracao_dados',
		parametros,
		webhookUrl,
	});
}
