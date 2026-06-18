/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
	},
	{
			displayName: 'DISTRIBUICAO',
			name: 'distribuicao',
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
			displayName: 'NOME COMPLETO',
			name: 'nomeCompleto',
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
	{
			displayName: 'CPF CNPJ',
			name: 'cpfCnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
			required: true,
		},
	{
			displayName: 'COMPETENCIA',
			name: 'competencia',
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
			displayName: 'NUM PROCESSO',
			name: 'numProcesso',
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
			displayName: 'NUM ANTIGO',
			name: 'numAntigo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['tribunal_de_justica'], operation: ['tj_pr'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'DISTRIBUICAO': this.getNodeParameter('distribuicao', i) as string,
		'VARA': this.getNodeParameter('vara', i) as string,
		'NOME_COMPLETO': this.getNodeParameter('nomeCompleto', i) as string,
		'ANO_INICIO': this.getNodeParameter('anoInicio', i) as string,
		'CPF_CNPJ': this.getNodeParameter('cpfCnpj', i) as string,
		'COMPETENCIA': this.getNodeParameter('competencia', i) as string,
		'GRAU': this.getNodeParameter('grau', i) as string,
		'NUM_PROCESSO': this.getNodeParameter('numProcesso', i) as string,
		'ANO_FIM': this.getNodeParameter('anoFim', i) as string,
		'NUM_ANTIGO': this.getNodeParameter('numAntigo', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'tj_pr', parametros);
}
