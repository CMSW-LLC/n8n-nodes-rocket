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
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
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
	{
			displayName: 'Report NAME',
			name: 'reportName',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
			required: true,
		},
	{
			displayName: 'Opcional Features',
			name: 'opcionalFeatures',
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
			displayName: 'RLC Transaction VALUE',
			name: 'rlcTransactionValue',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'RLC Policy',
			name: 'rlcPolicy',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'Modelo Limite Credito',
			name: 'modeloLimiteCredito',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
	{
			displayName: 'Modelo Indice RMS PJ',
			name: 'modeloIndiceRmsPj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_avancado_pj'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'REPORT_NAME': this.getNodeParameter('reportName', i) as string,
		'OPCIONAL_FEATURES': this.getNodeParameter('opcionalFeatures', i) as string,
		'RLC_SALE_TYPE_CODE': this.getNodeParameter('rlcSaleTypeCode', i) as string,
		'RLC_TRANSACTION_VALUE': this.getNodeParameter('rlcTransactionValue', i) as string,
		'RLC_POLICY': this.getNodeParameter('rlcPolicy', i) as string,
		'MODELO_LIMITE_CREDITO': this.getNodeParameter('modeloLimiteCredito', i) as string,
		'MODELO_INDICE_RMS_PJ': this.getNodeParameter('modeloIndiceRmsPj', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'serasa_avancado_pj',
		parametros,
		webhookUrl,
	});
}
