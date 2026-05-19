/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'OPCIONAL FEATURES',
			name: 'opcionalFeatures',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'REPORT NAME',
			name: 'reportName',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
			required: true,
		},
	{
			displayName: 'MODELO INDICE RMS PJ',
			name: 'modeloIndiceRmsPj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'MODELO LIMITE CREDITO',
			name: 'modeloLimiteCredito',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'RLC POLICY',
			name: 'rlcPolicy',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'RLC TRANSACTION VALUE',
			name: 'rlcTransactionValue',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'RLC SALE TYPE CODE',
			name: 'rlcSaleTypeCode',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'OPCIONAL_FEATURES': this.getNodeParameter('opcionalFeatures', i) as string,
		'REPORT_NAME': this.getNodeParameter('reportName', i) as string,
		'MODELO_INDICE_RMS_PJ': this.getNodeParameter('modeloIndiceRmsPj', i) as string,
		'MODELO_LIMITE_CREDITO': this.getNodeParameter('modeloLimiteCredito', i) as string,
		'RLC_POLICY': this.getNodeParameter('rlcPolicy', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'RLC_TRANSACTION_VALUE': this.getNodeParameter('rlcTransactionValue', i) as string,
		'RLC_SALE_TYPE_CODE': this.getNodeParameter('rlcSaleTypeCode', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'serasa_avancado_pj',
		parametros,
		webhookUrl,
	});
}
