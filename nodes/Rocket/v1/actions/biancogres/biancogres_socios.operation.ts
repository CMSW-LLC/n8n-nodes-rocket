/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['biancogres'], operation: ['biancogres_socios'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['biancogres'], operation: ['biancogres_socios'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['biancogres'], operation: ['biancogres_socios'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['biancogres'], operation: ['biancogres_socios'] } },
			required: true,
		},
	{
			displayName: 'KEY',
			name: 'key',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['biancogres'], operation: ['biancogres_socios'] } },
			required: true,
		},
	{
			displayName: 'CCPFS',
			name: 'ccpfs',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['biancogres'], operation: ['biancogres_socios'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'KEY': this.getNodeParameter('key', i) as string,
		'CCPFS': this.getNodeParameter('ccpfs', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'biancogres_socios',
		parametros,
		webhookUrl,
	});
}
