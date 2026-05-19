/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
	},
	{
			displayName: 'Documento',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'Nascimento',
			name: 'nascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'TIPO Registro',
			name: 'tipoRegistro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'DATA Compra',
			name: 'dataCompra',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'DATA Vencimento',
			name: 'dataVencimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NUMERO Contrato',
			name: 'numeroContrato',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'VALOR Debito',
			name: 'valorDebito',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'Natureza Inclusao ID',
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
			displayName: 'Bairro',
			name: 'bairro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NUMERO Endereco',
			name: 'numeroEndereco',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'DDD Telefone',
			name: 'dddTelefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NUM Telefone',
			name: 'numTelefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'RAZAO Social',
			name: 'razaoSocial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'NOME Comercial',
			name: 'nomeComercial',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'Motivo Exclusao',
			name: 'motivoExclusao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'Logradouro',
			name: 'logradouro',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'Codigo TIPO Devedor',
			name: 'codigoTipoDevedor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'Descricao Motivo Exclusao',
			name: 'descricaoMotivoExclusao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
	{
			displayName: 'TIPO Consumidor',
			name: 'tipoConsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_inclusao_exclusao'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
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

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'spc_inclusao_exclusao',
		parametros,
		webhookUrl,
	});
}
