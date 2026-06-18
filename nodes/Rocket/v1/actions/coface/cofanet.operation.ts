/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Fax',
			name: 'fax',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Comentario',
			name: 'cmt',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Telefone',
			name: 'tel',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Valor Min',
			name: 'valorMin',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Valor',
			name: 'valor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Cidade',
			name: 'cid',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Endereco',
			name: 'end',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Cep',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Nome',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Tipo',
			name: 'tipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
	{
			displayName: 'Cnpj',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['coface'], operation: ['cofanet'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'fax': this.getNodeParameter('fax', i) as string,
		'cmt': this.getNodeParameter('cmt', i) as string,
		'tel': this.getNodeParameter('tel', i) as string,
		'valor_min': this.getNodeParameter('valorMin', i) as string,
		'valor': this.getNodeParameter('valor', i) as string,
		'cid': this.getNodeParameter('cid', i) as string,
		'end': this.getNodeParameter('end', i) as string,
		'cep': this.getNodeParameter('cep', i) as string,
		'nome': this.getNodeParameter('nome', i) as string,
		'tipo': this.getNodeParameter('tipo', i) as string,
		'cnpj': this.getNodeParameter('cnpj', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'cofanet', parametros);
}
