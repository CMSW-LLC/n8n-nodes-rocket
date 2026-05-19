/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Banco-cheque-inicial',
			name: 'bancoChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Numero-cheque-inicial',
			name: 'numeroChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Digito-cheque-inicial',
			name: 'digitoChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Cep-consumidor',
			name: 'cepConsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'DOCUMENTOCONSUMIDOR',
			name: 'documentoconsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Tipo-consumidor',
			name: 'tipoConsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Codigo-estacao-consultante',
			name: 'codigoEstacaoConsultante',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Cmc71-cheque-inicial',
			name: 'cmc71ChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Cmc73-cheque-inicial',
			name: 'cmc73ChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Cmc72-cheque-inicial',
			name: 'cmc72ChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Utiliza-cmc7',
			name: 'utilizaCmc7',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Agencia-cheque-inicial',
			name: 'agenciaChequeInicial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'NUMERO',
			name: 'numero',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Codigo-produto',
			name: 'codigoProduto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'DDD',
			name: 'ddd',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Cep-origem',
			name: 'cepOrigem',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
	{
			displayName: 'Quantidade-cheque',
			name: 'quantidadeCheque',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_mix_j'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'BANCO-CHEQUE-INICIAL': this.getNodeParameter('bancoChequeInicial', i) as string,
		'NUMERO-CHEQUE-INICIAL': this.getNodeParameter('numeroChequeInicial', i) as string,
		'DIGITO-CHEQUE-INICIAL': this.getNodeParameter('digitoChequeInicial', i) as string,
		'CEP-CONSUMIDOR': this.getNodeParameter('cepConsumidor', i) as string,
		'DOCUMENTOCONSUMIDOR': this.getNodeParameter('documentoconsumidor', i) as string,
		'TIPO-CONSUMIDOR': this.getNodeParameter('tipoConsumidor', i) as string,
		'CODIGO-ESTACAO-CONSULTANTE': this.getNodeParameter('codigoEstacaoConsultante', i) as string,
		'CMC71-CHEQUE-INICIAL': this.getNodeParameter('cmc71ChequeInicial', i) as string,
		'CMC73-CHEQUE-INICIAL': this.getNodeParameter('cmc73ChequeInicial', i) as string,
		'CMC72-CHEQUE-INICIAL': this.getNodeParameter('cmc72ChequeInicial', i) as string,
		'UTILIZA-CMC7': this.getNodeParameter('utilizaCmc7', i) as string,
		'AGENCIA-CHEQUE-INICIAL': this.getNodeParameter('agenciaChequeInicial', i) as string,
		'NUMERO': this.getNodeParameter('numero', i) as string,
		'CODIGO-PRODUTO': this.getNodeParameter('codigoProduto', i) as string,
		'DDD': this.getNodeParameter('ddd', i) as string,
		'CEP-ORIGEM': this.getNodeParameter('cepOrigem', i) as string,
		'QUANTIDADE-CHEQUE': this.getNodeParameter('quantidadeCheque', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'spc_mix_j',
		parametros,
		webhookUrl,
	});
}
