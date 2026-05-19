/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Limetecredito',
			name: 'limetecredito',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
	{
			displayName: 'Tipopessoa',
			name: 'tipopessoa',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
			required: true,
		},
	{
			displayName: 'Numdoc',
			name: 'numdoc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
			required: true,
		},
	{
			displayName: 'Detalhe OU Resumo',
			name: 'detalheouresumo',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
	{
			displayName: 'Rendapresumidacpf',
			name: 'rendapresumidacpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
	{
			displayName: 'Concentrescoring',
			name: 'concentrescoring',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
	{
			displayName: 'Consultante',
			name: 'consultante',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
	{
			displayName: 'Modeloscore',
			name: 'modeloscore',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
	{
			displayName: 'Cod1',
			name: 'cod1',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
	{
			displayName: 'Fatpresumidocnpj',
			name: 'fatpresumidocnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
	{
			displayName: 'Localizador',
			name: 'localizador',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['b49c_concentre'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'LIMETECREDITO': this.getNodeParameter('limetecredito', i) as string,
		'TIPOPESSOA': this.getNodeParameter('tipopessoa', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'NUMDOC': this.getNodeParameter('numdoc', i) as string,
		'DETALHEOURESUMO': this.getNodeParameter('detalheouresumo', i) as string,
		'RENDAPRESUMIDACPF': this.getNodeParameter('rendapresumidacpf', i) as string,
		'CONCENTRESCORING': this.getNodeParameter('concentrescoring', i) as string,
		'CONSULTANTE': this.getNodeParameter('consultante', i) as string,
		'MODELOSCORE': this.getNodeParameter('modeloscore', i) as string,
		'COD1': this.getNodeParameter('cod1', i) as string,
		'FATPRESUMIDOCNPJ': this.getNodeParameter('fatpresumidocnpj', i) as string,
		'LOCALIZADOR': this.getNodeParameter('localizador', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'b49c_concentre',
		parametros,
		webhookUrl,
	});
}
