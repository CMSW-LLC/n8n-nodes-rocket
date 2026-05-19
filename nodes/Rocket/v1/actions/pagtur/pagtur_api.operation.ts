/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pagtur'], operation: ['pagtur_api'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pagtur'], operation: ['pagtur_api'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pagtur'], operation: ['pagtur_api'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pagtur'], operation: ['pagtur_api'] } },
		},
	{
			displayName: 'ID Transacao',
			name: 'idTransacao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pagtur'], operation: ['pagtur_api'] } },
		},
	{
			displayName: 'TERMO',
			name: 'termo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pagtur'], operation: ['pagtur_api'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'ID_TRANSACAO': this.getNodeParameter('idTransacao', i) as string,
		'TERMO': this.getNodeParameter('termo', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'pagtur_api',
		parametros,
		webhookUrl,
	});
}
