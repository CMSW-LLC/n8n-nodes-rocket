/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_goiania'] } },
	},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_goiania'] } },
		},
	{
			displayName: 'INSCRICAO',
			name: 'inscricao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['prefeituras'], operation: ['prefeitura_goiania'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'INSCRICAO': this.getNodeParameter('inscricao', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'prefeitura_goiania', parametros);
}
