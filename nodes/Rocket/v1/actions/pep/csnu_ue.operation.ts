/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['pep'], operation: ['csnu_ue'] } },
	},
	{
			displayName: 'KERESES (Pesquisa)',
			name: 'kereses',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['pep'], operation: ['csnu_ue'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'KERESES': this.getNodeParameter('kereses', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'csnu_ue', parametros);
}
