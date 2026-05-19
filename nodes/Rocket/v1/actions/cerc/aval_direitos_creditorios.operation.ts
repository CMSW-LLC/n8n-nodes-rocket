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
			displayName: 'REFERENCIA EXTERNA',
			name: 'referenciaExterna',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'CHAVES NFE',
			name: 'chavesNfe',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'PAGINACAO POR PAGINA',
			name: 'paginacaoPorPagina',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
	{
			displayName: 'STATUS PROCESSAMENTO',
			name: 'statusProcessamento',
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
			displayName: 'VEICULO ID',
			name: 'veiculoId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
			required: true,
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
			displayName: 'PAGINACAO PAGINA',
			name: 'paginacaoPagina',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['aval_direitos_creditorios'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'REFERENCIA_EXTERNA': this.getNodeParameter('referenciaExterna', i) as string,
		'CHAVES_NFE': this.getNodeParameter('chavesNfe', i) as string,
		'PAGINACAO_POR_PAGINA': this.getNodeParameter('paginacaoPorPagina', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'STATUS_PROCESSAMENTO': this.getNodeParameter('statusProcessamento', i) as string,
		'LOTE_IDS': this.getNodeParameter('loteIds', i) as string,
		'VEICULO_ID': this.getNodeParameter('veiculoId', i) as string,
		'TOKEN': this.getNodeParameter('token', i) as string,
		'PAGINACAO_PAGINA': this.getNodeParameter('paginacaoPagina', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'aval_direitos_creditorios',
		parametros,
		webhookUrl,
	});
}
