/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cvm'], operation: ['afast_determinacao_judicial'] } },
	},
	{
			displayName: 'NUMERO PROCESSO',
			name: 'numeroProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cvm'], operation: ['afast_determinacao_judicial'] } },
		},
	{
			displayName: 'PARTICIPANTE',
			name: 'participante',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cvm'], operation: ['afast_determinacao_judicial'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NUMERO_PROCESSO': this.getNodeParameter('numeroProcesso', i) as string,
		'PARTICIPANTE': this.getNodeParameter('participante', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'afast_determinacao_judicial', parametros);
}
