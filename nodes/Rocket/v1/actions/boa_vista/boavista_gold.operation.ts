/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
			required: true,
		},
	{
			displayName: 'FATURAMENTO',
			name: 'faturamento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
		},
	{
			displayName: 'EXTRA PENDENCIAS',
			name: 'extraPendencias',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
		},
	{
			displayName: 'EXTRA PROTESTOS',
			name: 'extraProtestos',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
		},
	{
			displayName: 'SCORE EMP',
			name: 'scoreEmp',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
		},
	{
			displayName: 'SCORE ATA',
			name: 'scoreAta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['boa_vista'], operation: ['boavista_gold'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'FATURAMENTO': this.getNodeParameter('faturamento', i) as string,
		'EXTRA_PENDENCIAS': this.getNodeParameter('extraPendencias', i) as string,
		'EXTRA_PROTESTOS': this.getNodeParameter('extraProtestos', i) as string,
		'SCORE_EMP': this.getNodeParameter('scoreEmp', i) as string,
		'SCORE_ATA': this.getNodeParameter('scoreAta', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'boavista_gold',
		parametros,
		webhookUrl,
	});
}
