/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['openbanking'], operation: ['ob_consulta_dict'] } },
	},
	{
			displayName: 'TIPO CHAVE',
			name: 'tipoChave',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['openbanking'], operation: ['ob_consulta_dict'] } },
			required: true,
		},
	{
			displayName: 'CHAVE PIX',
			name: 'chavePix',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['openbanking'], operation: ['ob_consulta_dict'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'TIPO_CHAVE': this.getNodeParameter('tipoChave', i) as string,
		'CHAVE_PIX': this.getNodeParameter('chavePix', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'ob_consulta_dict',
		parametros,
		webhookUrl,
	});
}
