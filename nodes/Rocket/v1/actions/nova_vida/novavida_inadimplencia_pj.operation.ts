/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pj'] } },
	},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pj'] } },
			required: true,
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pj'] } },
			required: true,
		},
	{
			displayName: 'Cliente',
			name: 'cliente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pj'] } },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'UF': this.getNodeParameter('uf', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'CLIENTE': this.getNodeParameter('cliente', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'novavida_inadimplencia_pj',
		parametros,
		webhookUrl,
	});
}
