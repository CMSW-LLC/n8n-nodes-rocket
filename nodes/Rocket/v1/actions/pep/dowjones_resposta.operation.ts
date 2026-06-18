/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['dowjones_resposta'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_resposta'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_resposta'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'ASSOCIATION ID',
			name: 'associationId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_resposta'] } },
		},
	{
			displayName: 'LINK TRANSACTION URL',
			name: 'linkTransactionUrl',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_resposta'] } },
		},
	{
			displayName: 'CASE ID',
			name: 'caseId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_resposta'] } },
		},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_resposta'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'YEAR OF BIRTH',
			name: 'yearOfBirth',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['dowjones_resposta'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'ASSOCIATION_ID': this.getNodeParameter('associationId', i) as string,
		'LINK_TRANSACTION_URL': this.getNodeParameter('linkTransactionUrl', i) as string,
		'CASE_ID': this.getNodeParameter('caseId', i) as string,
		'TOKEN': this.getNodeParameter('token', i) as string,
		'YEAR_OF_BIRTH': this.getNodeParameter('yearOfBirth', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'dowjones_resposta', parametros);
}
