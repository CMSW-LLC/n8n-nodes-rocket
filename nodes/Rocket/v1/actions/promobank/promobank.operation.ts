/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['promobank'], operation: ['promobank'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['promobank'], operation: ['promobank'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['promobank'], operation: ['promobank'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'NUMERO BENEFICIO',
			name: 'numeroBeneficio',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['promobank'], operation: ['promobank'] } },
		},
	{
			displayName: 'CODIGO EMPRESA',
			name: 'codigoEmpresa',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['promobank'], operation: ['promobank'] } },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['promobank'], operation: ['promobank'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'NUMERO_BENEFICIO': this.getNodeParameter('numeroBeneficio', i) as string,
		'CODIGO_EMPRESA': this.getNodeParameter('codigoEmpresa', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'promobank',
		parametros,
		webhookUrl,
	});
}
