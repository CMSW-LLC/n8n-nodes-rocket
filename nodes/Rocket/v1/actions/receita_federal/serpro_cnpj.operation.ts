/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'TIPO Consulta',
			name: 'tipoConsulta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj'] } },
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['receita_federal'], operation: ['serpro_cnpj'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'TIPO_CONSULTA': this.getNodeParameter('tipoConsulta', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'serpro_cnpj',
		parametros,
		webhookUrl,
	});
}
