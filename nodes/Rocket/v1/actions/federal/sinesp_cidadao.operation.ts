/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['federal'], operation: ['sinesp_cidadao'] } },
	},
	{
			displayName: 'PLACA NUMEROS',
			name: 'placaNumeros',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['sinesp_cidadao'] } },
			required: true,
		},
	{
			displayName: 'PLACA LETRAS',
			name: 'placaLetras',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['federal'], operation: ['sinesp_cidadao'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'PLACA_NUMEROS': this.getNodeParameter('placaNumeros', i) as string,
		'PLACA_LETRAS': this.getNodeParameter('placaLetras', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'sinesp_cidadao',
		parametros,
		webhookUrl,
	});
}
