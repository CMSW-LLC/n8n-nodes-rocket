/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['idwall'], operation: ['idwall_processos_pj_resp'] } },
	},
	{
			displayName: 'TOKEN',
			name: 'token',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_processos_pj_resp'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'ID RELATORIO',
			name: 'idRelatorio',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['idwall'], operation: ['idwall_processos_pj_resp'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'TOKEN': this.getNodeParameter('token', i) as string,
		'ID_RELATORIO': this.getNodeParameter('idRelatorio', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'idwall_processos_pj_resp', parametros);
}
