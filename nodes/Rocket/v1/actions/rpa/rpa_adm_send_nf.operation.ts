/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['rpa'], operation: ['rpa_adm_send_nf'] } },
	},
	{
			displayName: 'CODIGO EMPRESA',
			name: 'codigoEmpresa',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['rpa'], operation: ['rpa_adm_send_nf'] } },
			required: true,
		},
	{
			displayName: 'ARQUIVO',
			name: 'arquivo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['rpa'], operation: ['rpa_adm_send_nf'] } },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['rpa'], operation: ['rpa_adm_send_nf'] } },
			required: true,
		},
	{
			displayName: 'SENHA',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['rpa'], operation: ['rpa_adm_send_nf'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'USUARIO',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['rpa'], operation: ['rpa_adm_send_nf'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'CODIGO_EMPRESA': this.getNodeParameter('codigoEmpresa', i) as string,
		'ARQUIVO': this.getNodeParameter('arquivo', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'SENHA': this.getNodeParameter('senha', i) as string,
		'USUARIO': this.getNodeParameter('usuario', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'rpa_adm_send_nf',
		parametros,
		webhookUrl,
	});
}
