/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rs'] } },
	},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rs'] } },
		},
	{
			displayName: 'COMARCA',
			name: 'comarca',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rs'] } },
		},
	{
			displayName: 'SITUACAO',
			name: 'situacao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rs'] } },
		},
	{
			displayName: 'NUM THEMIS',
			name: 'numThemis',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rs'] } },
		},
	{
			displayName: 'NUM PROCESSO',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_rs'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'COMARCA': this.getNodeParameter('comarca', i) as string,
		'SITUACAO': this.getNodeParameter('situacao', i) as string,
		'NUM_THEMIS': this.getNodeParameter('numThemis', i) as string,
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tj_rs', parametros);
}
