/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'IMAGE URL',
			name: 'imageUrl',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
		},
	{
			displayName: 'EXPIRATION PERIOD',
			name: 'expirationPeriod',
			type: 'number',
			default: 0,
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
			required: true,
		},
	{
			displayName: 'IMAGE TICKET',
			name: 'imageTicket',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
		},
	{
			displayName: 'IMAGE UID',
			name: 'imageUid',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
		},
	{
			displayName: 'ADDRESS',
			name: 'address',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
		},
	{
			displayName: 'NOME TITULAR',
			name: 'nomeTitular',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_faturas'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'IMAGE_URL': this.getNodeParameter('imageUrl', i) as string,
		'EXPIRATION_PERIOD': this.getNodeParameter('expirationPeriod', i) as number,
		'IMAGE_TICKET': this.getNodeParameter('imageTicket', i) as string,
		'IMAGE_UID': this.getNodeParameter('imageUid', i) as string,
		'ADDRESS': this.getNodeParameter('address', i) as string,
		'NOME_TITULAR': this.getNodeParameter('nomeTitular', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'validacao_faturas',
		parametros,
		webhookUrl,
	});
}
