/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
	},
	{
			displayName: 'CORRELACTION ID',
			name: 'correlactionId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'CNPJ CPF',
			name: 'cnpjCpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'CODIGO BANCO',
			name: 'codigoBanco',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'COMENTARIO',
			name: 'comentario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'DESCRICAO',
			name: 'descricao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'CONTA DIGITO',
			name: 'contaDigito',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'CONTA',
			name: 'conta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'AGENCIA DIGITO',
			name: 'agenciaDigito',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'AGENCIA',
			name: 'agencia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'TIPO',
			name: 'tipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'CHAVE',
			name: 'chave',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
			typeOptions: { password: true },
		},
	{
			displayName: 'TIPO CHAVE',
			name: 'tipoChave',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
	{
			displayName: 'TRANSACAO',
			name: 'transacao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['token_pix'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'CORRELACTION_ID': this.getNodeParameter('correlactionId', i) as string,
		'CNPJ_CPF': this.getNodeParameter('cnpjCpf', i) as string,
		'CODIGO_BANCO': this.getNodeParameter('codigoBanco', i) as string,
		'COMENTARIO': this.getNodeParameter('comentario', i) as string,
		'DESCRICAO': this.getNodeParameter('descricao', i) as string,
		'CONTA_DIGITO': this.getNodeParameter('contaDigito', i) as string,
		'CONTA': this.getNodeParameter('conta', i) as string,
		'AGENCIA_DIGITO': this.getNodeParameter('agenciaDigito', i) as string,
		'AGENCIA': this.getNodeParameter('agencia', i) as string,
		'TIPO': this.getNodeParameter('tipo', i) as string,
		'CHAVE': this.getNodeParameter('chave', i) as string,
		'TIPO_CHAVE': this.getNodeParameter('tipoChave', i) as string,
		'TRANSACAO': this.getNodeParameter('transacao', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'token_pix',
		parametros,
		webhookUrl,
	});
}
