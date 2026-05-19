/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['alloha'], operation: ['alloha_define_risco_positivo'] } },
	},
	{
			displayName: 'Usuario',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_define_risco_positivo'] } },
			required: true,
		},
	{
			displayName: 'Cnpj',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_define_risco_positivo'] } },
			required: true,
		},
	{
			displayName: 'Senha',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_define_risco_positivo'] } },
			typeOptions: { password: true },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'USUARIO': this.getNodeParameter('usuario', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'SENHA': this.getNodeParameter('senha', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'alloha_define_risco_positivo',
		parametros,
		webhookUrl,
	});
}
