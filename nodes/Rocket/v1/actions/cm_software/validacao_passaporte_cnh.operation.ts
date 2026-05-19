/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_passaporte_cnh'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_passaporte_cnh'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_passaporte_cnh'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Image Ticket',
			name: 'imageTicket',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_passaporte_cnh'] } },
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_passaporte_cnh'] } },
			required: true,
		},
	{
			displayName: 'IMAGE URL',
			name: 'imageUrl',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_passaporte_cnh'] } },
		},
	{
			displayName: 'Image Uid',
			name: 'imageUid',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_passaporte_cnh'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'IMAGE_TICKET': this.getNodeParameter('imageTicket', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'IMAGE_URL': this.getNodeParameter('imageUrl', i) as string,
		'IMAGE_UID': this.getNodeParameter('imageUid', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'validacao_passaporte_cnh',
		parametros,
		webhookUrl,
	});
}
