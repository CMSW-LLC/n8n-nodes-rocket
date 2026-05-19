/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
	},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'Paginacao POR Pagina',
			name: 'paginacaoPorPagina',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'Paginacao Pagina',
			name: 'paginacaoPagina',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'LOTE IDS',
			name: 'loteIds',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Veiculo ID',
			name: 'veiculoId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
			required: true,
		},
	{
			displayName: 'Chaves NFE',
			name: 'chavesNfe',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
			typeOptions: { password: true },
		},
	{
			displayName: 'Referencia Externa',
			name: 'referenciaExterna',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'Status Processamento',
			name: 'statusProcessamento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'PAGINACAO_POR_PAGINA': this.getNodeParameter('paginacaoPorPagina', i) as string,
		'PAGINACAO_PAGINA': this.getNodeParameter('paginacaoPagina', i) as string,
		'LOTE_IDS': this.getNodeParameter('loteIds', i) as string,
		'TOKEN': this.getNodeParameter('token', i) as string,
		'VEICULO_ID': this.getNodeParameter('veiculoId', i) as string,
		'CHAVES_NFE': this.getNodeParameter('chavesNfe', i) as string,
		'REFERENCIA_EXTERNA': this.getNodeParameter('referenciaExterna', i) as string,
		'STATUS_PROCESSAMENTO': this.getNodeParameter('statusProcessamento', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'aval_direitos_creditorios',
		parametros,
		webhookUrl,
	});
}
