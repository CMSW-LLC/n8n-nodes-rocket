/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
	},
	{
			displayName: 'NUM ANTIGO',
			name: 'numAntigo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
	{
			displayName: 'ANO FIM',
			name: 'anoFim',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
	{
			displayName: 'NUM PROCESSO',
			name: 'numProcesso',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
	{
			displayName: 'GRAU',
			name: 'grau',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
			required: true,
		},
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
			required: true,
		},
	{
			displayName: 'DISTRIBUICAO',
			name: 'distribuicao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
	{
			displayName: 'NOME COMPLETO',
			name: 'nomeCompleto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
	{
			displayName: 'COMPETENCIA',
			name: 'competencia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
	{
			displayName: 'VARA',
			name: 'vara',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
	{
			displayName: 'ANO INICIO',
			name: 'anoInicio',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NUM_ANTIGO': this.getNodeParameter('numAntigo', i) as string,
		'ANO_FIM': this.getNodeParameter('anoFim', i) as string,
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
		'GRAU': this.getNodeParameter('grau', i) as string,
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
		'DISTRIBUICAO': this.getNodeParameter('distribuicao', i) as string,
		'NOME_COMPLETO': this.getNodeParameter('nomeCompleto', i) as string,
		'COMPETENCIA': this.getNodeParameter('competencia', i) as string,
		'VARA': this.getNodeParameter('vara', i) as string,
		'ANO_INICIO': this.getNodeParameter('anoInicio', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'tj_pr',
		parametros,
		webhookUrl,
	});
}
