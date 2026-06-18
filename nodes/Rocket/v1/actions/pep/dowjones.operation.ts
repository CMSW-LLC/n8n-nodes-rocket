/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'EXTERNAL ID',
			name: 'externalId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones'] } },
		},
	{
			displayName: 'DEVICE',
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
			displayName: 'ASSOCIATION ID',
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
			displayName: 'CLIENT ID',
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

	return await rocketApiExecuteProvider.call(this, i, 'dowjones', parametros);
}
