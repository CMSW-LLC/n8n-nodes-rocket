/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_df'] } },
	},
	{
			displayName: 'NUM PROCESSO',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_df'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_df'] } },
		},
	{
			displayName: 'COMARCA',
			name: 'comarca',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_df'] } },
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_df'] } },
		},
	{
			displayName: 'INSTANCIA',
			name: 'instancia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_df'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'COMARCA': this.getNodeParameter('comarca', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'INSTANCIA': this.getNodeParameter('instancia', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tj_df', parametros);
}
