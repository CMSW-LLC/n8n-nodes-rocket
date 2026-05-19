/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'Timeout',
			name: 'timeout',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'Tiporelatorio',
			name: 'tiporelatorio',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'Documento',
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
			displayName: 'Periodomonit',
			name: 'periodomonit',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'Emailmonit',
			name: 'emailmonit',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'Referenciamonit',
			name: 'referenciamonit',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
	{
			displayName: 'Tipoconsulta',
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
			displayName: 'Tipodocumento',
			name: 'tipodocumento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
			required: true,
		},
	{
			displayName: 'Tiporetorno',
			name: 'tiporetorno',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_confie'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
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

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'serasa_confie',
		parametros,
		webhookUrl,
	});
}
