/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_am'] } },
	},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_am'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_am'] } },
		},
	{
			displayName: 'GRAU',
			name: 'grau',
			type: 'number',
			default: 0,
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_am'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'GRAU': this.getNodeParameter('grau', i) as number,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tj_am', parametros);
}
