/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj_tarifado'] } },
	},
	{
			displayName: 'TIPO CONSULTA',
			name: 'tipoConsulta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj_tarifado'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj_tarifado'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj_tarifado'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'TIPO_CONSULTA': this.getNodeParameter('tipoConsulta', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'serpro_cnpj_tarifado', parametros);
}
