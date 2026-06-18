/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cadpos_boa_vista'], operation: ['boa_vista_score_positivo_pf'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cadpos_boa_vista'], operation: ['boa_vista_score_positivo_pf'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cadpos_boa_vista'], operation: ['boa_vista_score_positivo_pf'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'SCORE',
			name: 'score',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cadpos_boa_vista'], operation: ['boa_vista_score_positivo_pf'] } },
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cadpos_boa_vista'], operation: ['boa_vista_score_positivo_pf'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'SCORE': this.getNodeParameter('score', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'boa_vista_score_positivo_pf', parametros);
}
