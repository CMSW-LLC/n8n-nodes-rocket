/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['nova_vida'], operation: ['nv_sit_cad_tk_tarifado'] } },
	},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['nova_vida'], operation: ['nv_sit_cad_tk_tarifado'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'nv_sit_cad_tk_tarifado', parametros);
}
