/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'TPCONS',
			name: 'tpcons',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'DTVCTOCHQ',
			name: 'dtvctochq',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'VALORCHQ',
			name: 'valorchq',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'Cmc7',
			name: 'cmc7',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'IDCHEQUE',
			name: 'idcheque',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'FEAT SCOR',
			name: 'featScor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'UF',
			name: 'uf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'CEP',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'TELEFONE',
			name: 'telefone',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
	{
			displayName: 'NUMDOC',
			name: 'numdoc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
			required: true,
		},
	{
			displayName: 'TIPOPESSOA',
			name: 'tipopessoa',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
			required: true,
		},
	{
			displayName: 'DDD',
			name: 'ddd',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['serasa_b49c'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'TPCONS': this.getNodeParameter('tpcons', i) as string,
		'DTVCTOCHQ': this.getNodeParameter('dtvctochq', i) as string,
		'VALORCHQ': this.getNodeParameter('valorchq', i) as string,
		'CMC7': this.getNodeParameter('cmc7', i) as string,
		'IDCHEQUE': this.getNodeParameter('idcheque', i) as string,
		'FEAT_SCOR': this.getNodeParameter('featScor', i) as string,
		'UF': this.getNodeParameter('uf', i) as string,
		'CEP': this.getNodeParameter('cep', i) as string,
		'TELEFONE': this.getNodeParameter('telefone', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'NUMDOC': this.getNodeParameter('numdoc', i) as string,
		'TIPOPESSOA': this.getNodeParameter('tipopessoa', i) as string,
		'DDD': this.getNodeParameter('ddd', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'serasa_b49c', parametros);
}
