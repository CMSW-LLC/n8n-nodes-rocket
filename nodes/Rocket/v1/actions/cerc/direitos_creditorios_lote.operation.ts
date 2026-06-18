/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
	},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'VEICULO ID',
			name: 'veiculoId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
			required: true,
		},
	{
			displayName: 'MONITORAMENTO',
			name: 'monitoramento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'RECEBIVEL NUMERO',
			name: 'recebivelNumero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'DISPONIBILIZACAO ARQUIVO RETORNO',
			name: 'disponibilizacaoArquivoRetorno',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'RECEBIVEL VENCIMENTO',
			name: 'recebivelVencimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'RECEBIVEL VALOR',
			name: 'recebivelValor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'RECEBIVEL TIPO',
			name: 'recebivelTipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'DOCUMENTO FISCAL NUMERO',
			name: 'documentoFiscalNumero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
			required: true,
		},
	{
			displayName: 'RECEBIVEL DOCTO FISCAL TIPO',
			name: 'recebivelDoctoFiscalTipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'PARTES ORIGINADOR DOCTO NUMERO',
			name: 'partesOriginadorDoctoNumero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'PARTES PAGADOR DOCTO TIPO',
			name: 'partesPagadorDoctoTipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'PARTES ORIGINADOR DOCTO TIPO',
			name: 'partesOriginadorDoctoTipo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
	{
			displayName: 'PARTES PAGADOR DOCTO NUMERO',
			name: 'partesPagadorDoctoNumero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cerc'], operation: ['direitos_creditorios_lote'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'TOKEN': this.getNodeParameter('token', i) as string,
		'VEICULO_ID': this.getNodeParameter('veiculoId', i) as string,
		'MONITORAMENTO': this.getNodeParameter('monitoramento', i) as string,
		'RECEBIVEL_NUMERO': this.getNodeParameter('recebivelNumero', i) as string,
		'DISPONIBILIZACAO_ARQUIVO_RETORNO': this.getNodeParameter('disponibilizacaoArquivoRetorno', i) as string,
		'RECEBIVEL_VENCIMENTO': this.getNodeParameter('recebivelVencimento', i) as string,
		'RECEBIVEL_VALOR': this.getNodeParameter('recebivelValor', i) as string,
		'RECEBIVEL_TIPO': this.getNodeParameter('recebivelTipo', i) as string,
		'DOCUMENTO_FISCAL_NUMERO': this.getNodeParameter('documentoFiscalNumero', i) as string,
		'RECEBIVEL_DOCTO_FISCAL_TIPO': this.getNodeParameter('recebivelDoctoFiscalTipo', i) as string,
		'PARTES_ORIGINADOR_DOCTO_NUMERO': this.getNodeParameter('partesOriginadorDoctoNumero', i) as string,
		'PARTES_PAGADOR_DOCTO_TIPO': this.getNodeParameter('partesPagadorDoctoTipo', i) as string,
		'PARTES_ORIGINADOR_DOCTO_TIPO': this.getNodeParameter('partesOriginadorDoctoTipo', i) as string,
		'PARTES_PAGADOR_DOCTO_NUMERO': this.getNodeParameter('partesPagadorDoctoNumero', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'direitos_creditorios_lote', parametros);
}
