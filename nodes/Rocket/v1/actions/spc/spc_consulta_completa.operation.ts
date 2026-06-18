/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiExecuteProvider } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['spc'], operation: ['spc_consulta_completa'] } },
	},
	{
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_consulta_completa'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_consulta_completa'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_consulta_completa'] } },
			required: true,
		},
	{
			displayName: 'TIPO CONSUMIDOR',
			name: 'tipoConsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_consulta_completa'] } },
			required: true,
		},
	{
			displayName: 'DOCUMENTO CONSUMIDOR',
			name: 'documentoConsumidor',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_consulta_completa'] } },
			required: true,
		},
	{
			displayName: 'CODIGO PRODUTO',
			name: 'codigoProduto',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['spc'], operation: ['spc_consulta_completa'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'TIPO_CONSUMIDOR': this.getNodeParameter('tipoConsumidor', i) as string,
		'DOCUMENTO_CONSUMIDOR': this.getNodeParameter('documentoConsumidor', i) as string,
		'CODIGO_PRODUTO': this.getNodeParameter('codigoProduto', i) as string,
	};

	return await rocketApiExecuteProvider.call(this, i, 'spc_consulta_completa', parametros);
}
