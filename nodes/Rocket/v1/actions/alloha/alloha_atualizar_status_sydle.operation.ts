/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
	},
	{
			displayName: 'REANALYSIS TABLE',
			name: 'reanalysisTable',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
	{
			displayName: 'REQUIRED DOCUMENTS',
			name: 'requiredDocuments',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
	{
			displayName: 'QUALITY CALL SECOND ATTEMPT',
			name: 'qualityCallSecondAttempt',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
	{
			displayName: 'ANALYSIS ATTEMPT',
			name: 'analysisAttempt',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
	{
			displayName: 'SALE ORIGIN',
			name: 'saleOrigin',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
	{
			displayName: 'ANALYSIS TABLE',
			name: 'analysisTable',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
	{
			displayName: 'SALE ID',
			name: 'saleId',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
			required: true,
		},
	{
			displayName: 'QUALITY CALL THIRD ATTEMPT',
			name: 'qualityCallThirdAttempt',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
	{
			displayName: 'REQUESTING DOCUMENTATION',
			name: 'requestingDocumentation',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['alloha'], operation: ['alloha_atualizar_status_sydle'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'REANALYSIS_TABLE': this.getNodeParameter('reanalysisTable', i) as string,
		'REQUIRED_DOCUMENTS': this.getNodeParameter('requiredDocuments', i) as string,
		'QUALITY_CALL_SECOND_ATTEMPT': this.getNodeParameter('qualityCallSecondAttempt', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'ANALYSIS_ATTEMPT': this.getNodeParameter('analysisAttempt', i) as string,
		'SALE_ORIGIN': this.getNodeParameter('saleOrigin', i) as string,
		'ANALYSIS_TABLE': this.getNodeParameter('analysisTable', i) as string,
		'SALE_ID': this.getNodeParameter('saleId', i) as string,
		'QUALITY_CALL_THIRD_ATTEMPT': this.getNodeParameter('qualityCallThirdAttempt', i) as string,
		'REQUESTING_DOCUMENTATION': this.getNodeParameter('requestingDocumentation', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'alloha_atualizar_status_sydle',
		parametros,
		webhookUrl,
	});
}
