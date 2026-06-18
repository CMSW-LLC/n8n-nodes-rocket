/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['lexis_nexis'], operation: ['lexis_nexis_search'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['lexis_nexis'], operation: ['lexis_nexis_search'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['lexis_nexis'], operation: ['lexis_nexis_search'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'KEY',
			name: 'key',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['lexis_nexis'], operation: ['lexis_nexis_search'] } },
			required: true,
		},
	{
			displayName: 'DOC NUMBER',
			name: 'docNumber',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['lexis_nexis'], operation: ['lexis_nexis_search'] } },
		},
	{
			displayName: 'DOC TYPE',
			name: 'docType',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['lexis_nexis'], operation: ['lexis_nexis_search'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['lexis_nexis'], operation: ['lexis_nexis_search'] } },
			required: true,
		},
	{
			displayName: 'TIPO ENTIDADE',
			name: 'tipoEntidade',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['lexis_nexis'], operation: ['lexis_nexis_search'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'KEY': this.getNodeParameter('key', i) as string,
		'DOC_NUMBER': this.getNodeParameter('docNumber', i) as string,
		'DOC_TYPE': this.getNodeParameter('docType', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'TIPO_ENTIDADE': this.getNodeParameter('tipoEntidade', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'lexis_nexis_search', parametros);
}
