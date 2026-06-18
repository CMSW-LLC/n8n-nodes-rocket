/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
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
			displayName: 'CONTEXTO',
			name: 'contexto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['base_dados_contexto'] } },
			required: true,
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
	const parametros: IDataObject = {
		'ID_FLUXO_DASH': this.getNodeParameter('idFluxoDash', i) as string,
		'CONTEXTO': this.getNodeParameter('contexto', i) as string,
		'ID_WORK_DASH': this.getNodeParameter('idWorkDash', i) as string,
		'DATA_HORA_DASH': this.getNodeParameter('dataHoraDash', i) as string,
		'ID_EMPRESA_DASH': this.getNodeParameter('idEmpresaDash', i) as string,
		'TICKET_DASH': this.getNodeParameter('ticketDash', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'base_dados_contexto', parametros);
}
