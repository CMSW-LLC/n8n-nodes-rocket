/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
	},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NASCIMENTO',
			name: 'nascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'TIPO REGISTRO',
			name: 'tipoRegistro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'DATA COMPRA',
			name: 'dataCompra',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'DATA VENCIMENTO',
			name: 'dataVencimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NUMERO CONTRATO',
			name: 'numeroContrato',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'VALOR DEBITO',
			name: 'valorDebito',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NATUREZA INCLUSAO ID',
			name: 'naturezaInclusaoId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'CEP',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'BAIRRO',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NUMERO ENDERECO',
			name: 'numeroEndereco',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'DDD TELEFONE',
			name: 'dddTelefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NUM TELEFONE',
			name: 'numTelefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'RAZAO SOCIAL',
			name: 'razaoSocial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NOME COMERCIAL',
			name: 'nomeComercial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'MOTIVO EXCLUSAO',
			name: 'motivoExclusao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'LOGRADOURO',
			name: 'logradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'CODIGO TIPO DEVEDOR',
			name: 'codigoTipoDevedor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'DESCRICAO MOTIVO EXCLUSAO',
			name: 'descricaoMotivoExclusao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'TIPO CONSUMIDOR',
			name: 'tipoConsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'NASCIMENTO': this.getNodeParameter('nascimento', i) as string,
		'TIPO_REGISTRO': this.getNodeParameter('tipoRegistro', i) as string,
		'DATA_COMPRA': this.getNodeParameter('dataCompra', i) as string,
		'DATA_VENCIMENTO': this.getNodeParameter('dataVencimento', i) as string,
		'NUMERO_CONTRATO': this.getNodeParameter('numeroContrato', i) as string,
		'VALOR_DEBITO': this.getNodeParameter('valorDebito', i) as string,
		'NATUREZA_INCLUSAO_ID': this.getNodeParameter('naturezaInclusaoId', i) as string,
		'CEP': this.getNodeParameter('cep', i) as string,
		'BAIRRO': this.getNodeParameter('bairro', i) as string,
		'NUMERO_ENDERECO': this.getNodeParameter('numeroEndereco', i) as string,
		'DDD_TELEFONE': this.getNodeParameter('dddTelefone', i) as string,
		'NUM_TELEFONE': this.getNodeParameter('numTelefone', i) as string,
		'RAZAO_SOCIAL': this.getNodeParameter('razaoSocial', i) as string,
		'NOME_COMERCIAL': this.getNodeParameter('nomeComercial', i) as string,
		'MOTIVO_EXCLUSAO': this.getNodeParameter('motivoExclusao', i) as string,
		'LOGRADOURO': this.getNodeParameter('logradouro', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'CODIGO_TIPO_DEVEDOR': this.getNodeParameter('codigoTipoDevedor', i) as string,
		'DESCRICAO_MOTIVO_EXCLUSAO': this.getNodeParameter('descricaoMotivoExclusao', i) as string,
		'TIPO_CONSUMIDOR': this.getNodeParameter('tipoConsumidor', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'spc_inclusao_exclusao', parametros);
}
