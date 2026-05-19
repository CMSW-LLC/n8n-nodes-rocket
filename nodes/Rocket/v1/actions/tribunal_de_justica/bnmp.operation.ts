/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['bnmp'] } },
	},
	{
			displayName: 'NUMERO do Processo',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['bnmp'] } },
		},
	{
			displayName: 'Nome da Mae',
			name: 'nomeMae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['bnmp'] } },
		},
	{
			displayName: 'Tipo do Documento',
			name: 'tipoDocumento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['bnmp'] } },
		},
	{
			displayName: 'Registro Judiciario Individual',
			name: 'rji',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['bnmp'] } },
		},
	{
			displayName: 'Documento',
			name: 'documento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['bnmp'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['bnmp'] } },
		},
	{
			displayName: 'NUM PECA',
			name: 'numPeca',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['bnmp'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
		'NOME_MAE': this.getNodeParameter('nomeMae', i) as string,
		'TIPO_DOCUMENTO': this.getNodeParameter('tipoDocumento', i) as string,
		'RJI': this.getNodeParameter('rji', i) as string,
		'DOCUMENTO': this.getNodeParameter('documento', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'NUM_PECA': this.getNodeParameter('numPeca', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'bnmp',
		parametros,
		webhookUrl,
	});
}
