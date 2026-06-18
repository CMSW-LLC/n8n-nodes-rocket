/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_2'] } },
	},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_2'] } },
		},
	{
			displayName: 'DOCUMENTO',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_2'] } },
		},
	{
			displayName: 'TIPO DOCUMENTO',
			name: 'tipoDocumento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['trf_2'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'TIPO_DOCUMENTO': this.getNodeParameter('tipoDocumento', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'trf_2', parametros);
}
