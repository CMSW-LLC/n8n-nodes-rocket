/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'ESTADO',
			name: 'estado',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
		},
	{
			displayName: 'DATANASCIMENTO',
			name: 'datanascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
			required: true,
		},
	{
			displayName: 'DATAEXPEDICAO',
			name: 'dataexpedicao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
			required: true,
		},
	{
			displayName: 'CODIGOPOSTO',
			name: 'codigoposto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
		},
	{
			displayName: 'VALOROPERACAO',
			name: 'valoroperacao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
			required: true,
		},
	{
			displayName: 'PREENCHIMENTO',
			name: 'preenchimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
			required: true,
		},
	{
			displayName: 'RG',
			name: 'rg',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['acertid'], operation: ['acertid_net_ws'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'ESTADO': this.getNodeParameter('estado', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'DATANASCIMENTO': this.getNodeParameter('datanascimento', i) as string,
		'DATAEXPEDICAO': this.getNodeParameter('dataexpedicao', i) as string,
		'CODIGOPOSTO': this.getNodeParameter('codigoposto', i) as string,
		'VALOROPERACAO': this.getNodeParameter('valoroperacao', i) as string,
		'PREENCHIMENTO': this.getNodeParameter('preenchimento', i) as string,
		'RG': this.getNodeParameter('rg', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'acertid_net_ws',
		parametros,
		webhookUrl,
	});
}
