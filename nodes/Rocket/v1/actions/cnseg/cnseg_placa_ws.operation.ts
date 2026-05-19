/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cnseg'], operation: ['cnseg_placa_ws'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cnseg'], operation: ['cnseg_placa_ws'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cnseg'], operation: ['cnseg_placa_ws'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'Placa do Veiculo',
			name: 'cdplaca',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cnseg'], operation: ['cnseg_placa_ws'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CDPLACA': this.getNodeParameter('cdplaca', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'cnseg_placa_ws',
		parametros,
		webhookUrl,
	});
}
