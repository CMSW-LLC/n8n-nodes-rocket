/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
	},
	{
			displayName: 'COMPLEMENTO',
			name: 'complemento1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'NUMERO',
			name: 'numero1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'UF',
			name: 'uf2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
			required: true,
		},
	{
			displayName: 'MUNICIPIO',
			name: 'municipio2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'BAIRRO',
			name: 'bairro2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'CEP',
			name: 'cep2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
			required: true,
		},
	{
			displayName: 'COMPLEMENTO',
			name: 'complemento2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'NUMERO',
			name: 'numero2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'LOGRADOURO',
			name: 'logradouro2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'UF',
			name: 'uf1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
			required: true,
		},
	{
			displayName: 'MUNICIPIO',
			name: 'municipio1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'LOGRADOURO',
			name: 'logradouro1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'LONGITUDE 2',
			name: 'longitude2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'LATITUDE 2',
			name: 'latitude2',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'LATITUDE 1',
			name: 'latitude1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'CEP',
			name: 'cep1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
			required: true,
		},
	{
			displayName: 'LONGITUDE 1',
			name: 'longitude1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
	{
			displayName: 'BAIRRO',
			name: 'bairro1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cpfsrv_distancia_cep_cep'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'COMPLEMENTO_1': this.getNodeParameter('complemento1', i) as string,
		'NUMERO_1': this.getNodeParameter('numero1', i) as string,
		'UF_2': this.getNodeParameter('uf2', i) as string,
		'MUNICIPIO_2': this.getNodeParameter('municipio2', i) as string,
		'BAIRRO_2': this.getNodeParameter('bairro2', i) as string,
		'CEP_2': this.getNodeParameter('cep2', i) as string,
		'COMPLEMENTO_2': this.getNodeParameter('complemento2', i) as string,
		'NUMERO_2': this.getNodeParameter('numero2', i) as string,
		'LOGRADOURO_2': this.getNodeParameter('logradouro2', i) as string,
		'UF_1': this.getNodeParameter('uf1', i) as string,
		'MUNICIPIO_1': this.getNodeParameter('municipio1', i) as string,
		'LOGRADOURO_1': this.getNodeParameter('logradouro1', i) as string,
		'LONGITUDE_2': this.getNodeParameter('longitude2', i) as string,
		'LATITUDE_2': this.getNodeParameter('latitude2', i) as string,
		'LATITUDE_1': this.getNodeParameter('latitude1', i) as string,
		'CEP_1': this.getNodeParameter('cep1', i) as string,
		'LONGITUDE_1': this.getNodeParameter('longitude1', i) as string,
		'BAIRRO_1': this.getNodeParameter('bairro1', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'cpfsrv_distancia_cep_cep',
		parametros,
		webhookUrl,
	});
}
