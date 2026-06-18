/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'TIMEOUT',
			name: 'timeout',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'TIPORELATORIO',
			name: 'tiporelatorio',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'DIAS',
			name: 'dias',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'PERIODOMONIT',
			name: 'periodomonit',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'EMAILMONIT',
			name: 'emailmonit',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'REFERENCIAMONIT',
			name: 'referenciamonit',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'TIPOCONSULTA',
			name: 'tipoconsulta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'TIPODOCUMENTO',
			name: 'tipodocumento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'TIPORETORNO',
			name: 'tiporetorno',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'TIMEOUT': this.getNodeParameter('timeout', i) as string,
		'TIPORELATORIO': this.getNodeParameter('tiporelatorio', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'DIAS': this.getNodeParameter('dias', i) as string,
		'PERIODOMONIT': this.getNodeParameter('periodomonit', i) as string,
		'EMAILMONIT': this.getNodeParameter('emailmonit', i) as string,
		'REFERENCIAMONIT': this.getNodeParameter('referenciamonit', i) as string,
		'TIPOCONSULTA': this.getNodeParameter('tipoconsulta', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
		'TIPODOCUMENTO': this.getNodeParameter('tipodocumento', i) as string,
		'TIPORETORNO': this.getNodeParameter('tiporetorno', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'serasa_confie', parametros);
}
