/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
	},
	{
			displayName: 'ID WORK DASH',
			name: 'idWorkDash',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
			required: true,
		},
	{
			displayName: 'DATA HORA DASH',
			name: 'dataHoraDash',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
		},
	{
			displayName: 'CONTEXTO',
			name: 'contexto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
			required: true,
		},
	{
			displayName: 'ID FLUXO DASH',
			name: 'idFluxoDash',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
			required: true,
		},
	{
			displayName: 'ID EMPRESA DASH',
			name: 'idEmpresaDash',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
			required: true,
		},
	{
			displayName: 'TICKET DASH',
			name: 'ticketDash',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'ID_WORK_DASH': this.getNodeParameter('idWorkDash', i) as string,
		'DATA_HORA_DASH': this.getNodeParameter('dataHoraDash', i) as string,
		'CONTEXTO': this.getNodeParameter('contexto', i) as string,
		'ID_FLUXO_DASH': this.getNodeParameter('idFluxoDash', i) as string,
		'ID_EMPRESA_DASH': this.getNodeParameter('idEmpresaDash', i) as string,
		'TICKET_DASH': this.getNodeParameter('ticketDash', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'base_dados_contexto',
		parametros,
		webhookUrl,
	});
}
