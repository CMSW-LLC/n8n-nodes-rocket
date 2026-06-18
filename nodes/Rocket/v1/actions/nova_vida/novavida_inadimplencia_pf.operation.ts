/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pf'] } },
	},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pf'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pf'] } },
			required: true,
		},
	{
			displayName: 'CLIENTE',
			name: 'cliente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['nova_vida'], operation: ['novavida_inadimplencia_pf'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'CLIENTE': this.getNodeParameter('cliente', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'novavida_inadimplencia_pf', parametros);
}
