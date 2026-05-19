/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'External ID',
			name: 'externalId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
		},
	{
			displayName: 'Device',
			name: 'device',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
			required: true,
		},
	{
			displayName: 'PAIS',
			name: 'pais',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
		},
	{
			displayName: 'Association ID',
			name: 'associationId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
		},
	{
			displayName: 'SEXO',
			name: 'sexo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
		},
	{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
			required: true,
		},
	{
			displayName: 'CASE ID',
			name: 'caseId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
			required: true,
		},
	{
			displayName: 'YEAR OF BIRTH',
			name: 'yearOfBirth',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'EXTERNAL_ID': this.getNodeParameter('externalId', i) as string,
		'DEVICE': this.getNodeParameter('device', i) as string,
		'PAIS': this.getNodeParameter('pais', i) as string,
		'ASSOCIATION_ID': this.getNodeParameter('associationId', i) as string,
		'SEXO': this.getNodeParameter('sexo', i) as string,
		'CLIENT_ID': this.getNodeParameter('clientId', i) as string,
		'CASE_ID': this.getNodeParameter('caseId', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'YEAR_OF_BIRTH': this.getNodeParameter('yearOfBirth', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'dowjones',
		parametros,
		webhookUrl,
	});
}
