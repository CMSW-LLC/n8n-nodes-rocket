/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Utiliza CMC7',
			name: 'utilizaCmc7',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'Digito Cheque Inicial',
			name: 'digitoChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'Codigo Produto',
			name: 'codigoProduto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
			required: true,
		},
	{
			displayName: 'CMC72 Cheque Inicial',
			name: 'cmc72ChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'CMC73 Cheque Inicial',
			name: 'cmc73ChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'Quantidade Cheque',
			name: 'quantidadeCheque',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'CEP Origem',
			name: 'cepOrigem',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'Codigo Estacao Consultante',
			name: 'codigoEstacaoConsultante',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'NUMERO Cheque Inicial',
			name: 'numeroChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'Agencia Cheque Inicial',
			name: 'agenciaChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'BANCO Cheque Inicial',
			name: 'bancoChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'NUMERO',
			name: 'numero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'DDD',
			name: 'ddd',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'CEP Consumidor',
			name: 'cepConsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'Documentoconsumidor',
			name: 'documentoconsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
			required: true,
		},
	{
			displayName: 'TIPO Consumidor',
			name: 'tipoConsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
	{
			displayName: 'CMC71 Cheque Inicial',
			name: 'cmc71ChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_f'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'UTILIZA_CMC7': this.getNodeParameter('utilizaCmc7', i) as string,
		'DIGITO_CHEQUE_INICIAL': this.getNodeParameter('digitoChequeInicial', i) as string,
		'CODIGO_PRODUTO': this.getNodeParameter('codigoProduto', i) as string,
		'CMC72_CHEQUE_INICIAL': this.getNodeParameter('cmc72ChequeInicial', i) as string,
		'CMC73_CHEQUE_INICIAL': this.getNodeParameter('cmc73ChequeInicial', i) as string,
		'QUANTIDADE_CHEQUE': this.getNodeParameter('quantidadeCheque', i) as string,
		'CEP_ORIGEM': this.getNodeParameter('cepOrigem', i) as string,
		'CODIGO_ESTACAO_CONSULTANTE': this.getNodeParameter('codigoEstacaoConsultante', i) as string,
		'NUMERO_CHEQUE_INICIAL': this.getNodeParameter('numeroChequeInicial', i) as string,
		'AGENCIA_CHEQUE_INICIAL': this.getNodeParameter('agenciaChequeInicial', i) as string,
		'BANCO_CHEQUE_INICIAL': this.getNodeParameter('bancoChequeInicial', i) as string,
		'NUMERO': this.getNodeParameter('numero', i) as string,
		'DDD': this.getNodeParameter('ddd', i) as string,
		'CEP_CONSUMIDOR': this.getNodeParameter('cepConsumidor', i) as string,
		'DOCUMENTOCONSUMIDOR': this.getNodeParameter('documentoconsumidor', i) as string,
		'TIPO_CONSUMIDOR': this.getNodeParameter('tipoConsumidor', i) as string,
		'CMC71_CHEQUE_INICIAL': this.getNodeParameter('cmc71ChequeInicial', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'spc_mix_f',
		parametros,
		webhookUrl,
	});
}
