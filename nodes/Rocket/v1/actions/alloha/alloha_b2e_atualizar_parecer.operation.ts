/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Observacoes',
			name: 'observacoes',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
		},
	{
			displayName: 'Codigo Instituicao',
			name: 'codigoInstituicao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
			required: true,
		},
	{
			displayName: 'Codigo Proposta Cliente',
			name: 'codigoPropostaCliente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
			required: true,
		},
	{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
		},
	{
			displayName: 'Nome',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
		},
	{
			displayName: 'Descricao',
			name: 'descricao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_b2e_atualizar_parecer'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'OBSERVACOES': this.getNodeParameter('observacoes', i) as string,
		'CODIGO_INSTITUICAO': this.getNodeParameter('codigoInstituicao', i) as string,
		'CODIGO_PROPOSTA_CLIENTE': this.getNodeParameter('codigoPropostaCliente', i) as string,
		'ID': this.getNodeParameter('id', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'DESCRICAO': this.getNodeParameter('descricao', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'alloha_b2e_atualizar_parecer',
		parametros,
		webhookUrl,
	});
}
