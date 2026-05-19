/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['resolv'], operation: ['cetelem_resolv_obito'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['resolv'], operation: ['cetelem_resolv_obito'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['resolv'], operation: ['cetelem_resolv_obito'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CPF',
			name: 'cpf',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['resolv'], operation: ['cetelem_resolv_obito'] } },
		},
	{
			displayName: 'DT NSCT',
			name: 'dtNsct',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['resolv'], operation: ['cetelem_resolv_obito'] } },
		},
	{
			displayName: 'NOME',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['resolv'], operation: ['cetelem_resolv_obito'] } },
		},
	{
			displayName: 'TIPO CONSULTA',
			name: 'tipoConsulta',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['resolv'], operation: ['cetelem_resolv_obito'] } },
		},
	{
			displayName: 'NM MAE',
			name: 'nmMae',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['resolv'], operation: ['cetelem_resolv_obito'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CPF': this.getNodeParameter('cpf', i) as string,
		'DT_NSCT': this.getNodeParameter('dtNsct', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'TIPO_CONSULTA': this.getNodeParameter('tipoConsulta', i) as string,
		'NM_MAE': this.getNodeParameter('nmMae', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'cetelem_resolv_obito',
		parametros,
		webhookUrl,
	});
}
