/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_acerta_pos_essencial'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_acerta_pos_essencial'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_acerta_pos_essencial'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_acerta_pos_essencial'] } },
			required: true,
		},
	{
			displayName: 'TIPO CREDITO',
			name: 'tipoCredito',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_acerta_pos_essencial'] } },
		},
	{
			displayName: 'SCORE',
			name: 'score',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_acerta_pos_essencial'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'TIPO_CREDITO': this.getNodeParameter('tipoCredito', i) as string,
		'SCORE': this.getNodeParameter('score', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'boa_vista_acerta_pos_essencial',
		parametros,
		webhookUrl,
	});
}
