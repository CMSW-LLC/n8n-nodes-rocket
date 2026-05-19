/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'ADDRESS STATE',
			name: 'addressState',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'AREA CODE',
			name: 'areaCode',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'PHONE NUMBER',
			name: 'phoneNumber',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'VERIFIED EMAIL',
			name: 'verifiedEmail',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'ADDRESS STREET',
			name: 'addressStreet',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'ADDRESS ZIPCODE',
			name: 'addressZipcode',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'VERIFIED PHONE',
			name: 'verifiedPhone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'DOCUMENT',
			name: 'document',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'EMAIL',
			name: 'email',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
			placeholder: 'name@email.com',
		},
	{
			displayName: 'ADDRESS COUNTRY',
			name: 'addressCountry',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'ADDRESS CITY',
			name: 'addressCity',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'ADDRESS DISTRICT',
			name: 'addressDistrict',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'ADDRESS COMPLEMENT',
			name: 'addressComplement',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
	{
			displayName: 'ADDRESS NUMBER',
			name: 'addressNumber',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_clearsale_datatrust'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'ADDRESS_STATE': this.getNodeParameter('addressState', i) as string,
		'AREA_CODE': this.getNodeParameter('areaCode', i) as string,
		'PHONE_NUMBER': this.getNodeParameter('phoneNumber', i) as string,
		'VERIFIED_EMAIL': this.getNodeParameter('verifiedEmail', i) as string,
		'ADDRESS_STREET': this.getNodeParameter('addressStreet', i) as string,
		'ADDRESS_ZIPCODE': this.getNodeParameter('addressZipcode', i) as string,
		'VERIFIED_PHONE': this.getNodeParameter('verifiedPhone', i) as string,
		'DOCUMENT': this.getNodeParameter('document', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'EMAIL': this.getNodeParameter('email', i) as string,
		'ADDRESS_COUNTRY': this.getNodeParameter('addressCountry', i) as string,
		'ADDRESS_CITY': this.getNodeParameter('addressCity', i) as string,
		'ADDRESS_DISTRICT': this.getNodeParameter('addressDistrict', i) as string,
		'ADDRESS_COMPLEMENT': this.getNodeParameter('addressComplement', i) as string,
		'ADDRESS_NUMBER': this.getNodeParameter('addressNumber', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'alloha_clearsale_datatrust',
		parametros,
		webhookUrl,
	});
}
