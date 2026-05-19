/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'TEMPO ACOMP',
			name: 'tempoAcomp',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
		},
	{
			displayName: 'ACOMP Rating',
			name: 'acompRating',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
		},
	{
			displayName: 'ACOMP RESTR',
			name: 'acompRestr',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
		},
	{
			displayName: 'ACOMP Cadastral',
			name: 'acompCadastral',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
			required: true,
		},
	{
			displayName: 'Tipo',
			name: 'tipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
		},
	{
			displayName: 'Cod Interno',
			name: 'codInterno',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
		},
	{
			displayName: 'Segmentacao',
			name: 'segmentacao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boa_vista_gerenciamento'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'TEMPO_ACOMP': this.getNodeParameter('tempoAcomp', i) as string,
		'ACOMP_RATING': this.getNodeParameter('acompRating', i) as string,
		'ACOMP_RESTR': this.getNodeParameter('acompRestr', i) as string,
		'ACOMP_CADASTRAL': this.getNodeParameter('acompCadastral', i) as string,
		'cnpj': this.getNodeParameter('cnpj', i) as string,
		'tipo': this.getNodeParameter('tipo', i) as string,
		'cod_interno': this.getNodeParameter('codInterno', i) as string,
		'segmentacao': this.getNodeParameter('segmentacao', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'boa_vista_gerenciamento',
		parametros,
		webhookUrl,
	});
}
