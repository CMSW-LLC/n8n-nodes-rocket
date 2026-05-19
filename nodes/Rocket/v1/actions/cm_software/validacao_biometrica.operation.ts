/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_biometrica'] } },
	},
	{
			displayName: 'DOCUMENTO URL',
			name: 'documentoUrl',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_biometrica'] } },
		},
	{
			displayName: 'SELFIE URL',
			name: 'selfieUrl',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_biometrica'] } },
		},
	{
			displayName: 'SELFIE TICKET',
			name: 'selfieTicket',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_biometrica'] } },
		},
	{
			displayName: 'SELFIE UID',
			name: 'selfieUid',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_biometrica'] } },
		},
	{
			displayName: 'DOCUMENTO TICKET',
			name: 'documentoTicket',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_biometrica'] } },
		},
	{
			displayName: 'DOCUMENTO UID',
			name: 'documentoUid',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_biometrica'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['validacao_biometrica'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'DOCUMENTO_URL': this.getNodeParameter('documentoUrl', i) as string,
		'SELFIE_URL': this.getNodeParameter('selfieUrl', i) as string,
		'SELFIE_TICKET': this.getNodeParameter('selfieTicket', i) as string,
		'SELFIE_UID': this.getNodeParameter('selfieUid', i) as string,
		'DOCUMENTO_TICKET': this.getNodeParameter('documentoTicket', i) as string,
		'DOCUMENTO_UID': this.getNodeParameter('documentoUid', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'validacao_biometrica',
		parametros,
		webhookUrl,
	});
}
