/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'YEAR OF BIRTH',
			name: 'yearOfBirth',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
		},
	{
			displayName: 'CLIENT ID',
			name: 'clientId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
			required: true,
		},
	{
			displayName: 'ASSOCIATION ID',
			name: 'associationId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
		},
	{
			displayName: 'CASE ID',
			name: 'caseId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
			required: true,
		},
	{
			displayName: 'EXTERNAL ID',
			name: 'externalId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
		},
	{
			displayName: 'COUNTRY',
			name: 'country',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
		},
	{
			displayName: 'GENDER',
			name: 'gender',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
		},
	{
			displayName: 'NAME',
			name: 'name',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
			required: true,
		},
	{
			displayName: 'DEVICE',
			name: 'device',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_token'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'YEAR_OF_BIRTH': this.getNodeParameter('yearOfBirth', i) as string,
		'CLIENT_ID': this.getNodeParameter('clientId', i) as string,
		'ASSOCIATION_ID': this.getNodeParameter('associationId', i) as string,
		'CASE_ID': this.getNodeParameter('caseId', i) as string,
		'EXTERNAL_ID': this.getNodeParameter('externalId', i) as string,
		'COUNTRY': this.getNodeParameter('country', i) as string,
		'GENDER': this.getNodeParameter('gender', i) as string,
		'NAME': this.getNodeParameter('name', i) as string,
		'DEVICE': this.getNodeParameter('device', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'dowjones_token', parametros);
}
