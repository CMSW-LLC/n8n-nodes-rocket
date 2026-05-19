/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CITY',
			name: 'city',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
	{
			displayName: 'CLIENT ID',
			name: 'clientId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
			required: true,
		},
	{
			displayName: 'EMAIL',
			name: 'email',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
			placeholder: 'name@email.com',
		},
	{
			displayName: 'PHONE NUMBER',
			name: 'phoneNumber',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
	{
			displayName: 'PHONE AREA CODE',
			name: 'phoneAreaCode',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
	{
			displayName: 'ZIP CODE',
			name: 'zipCode',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
	{
			displayName: 'STATE',
			name: 'state',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
	{
			displayName: 'DOCUMENT',
			name: 'document',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
			required: true,
		},
	{
			displayName: 'NAME',
			name: 'name',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
	{
			displayName: 'BIRTH DATE',
			name: 'birthDate',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
			required: true,
		},
	{
			displayName: 'MOTHER NAME',
			name: 'motherName',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
	{
			displayName: 'STREET',
			name: 'street',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
	{
			displayName: 'NUMBER',
			name: 'number',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['verify_id_pf'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CITY': this.getNodeParameter('city', i) as string,
		'CLIENT_ID': this.getNodeParameter('clientId', i) as string,
		'EMAIL': this.getNodeParameter('email', i) as string,
		'PHONE_NUMBER': this.getNodeParameter('phoneNumber', i) as string,
		'PHONE_AREA_CODE': this.getNodeParameter('phoneAreaCode', i) as string,
		'ZIP_CODE': this.getNodeParameter('zipCode', i) as string,
		'STATE': this.getNodeParameter('state', i) as string,
		'DOCUMENT': this.getNodeParameter('document', i) as string,
		'NAME': this.getNodeParameter('name', i) as string,
		'BIRTH_DATE': this.getNodeParameter('birthDate', i) as string,
		'MOTHER_NAME': this.getNodeParameter('motherName', i) as string,
		'STREET': this.getNodeParameter('street', i) as string,
		'NUMBER': this.getNodeParameter('number', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'verify_id_pf',
		parametros,
		webhookUrl,
	});
}
