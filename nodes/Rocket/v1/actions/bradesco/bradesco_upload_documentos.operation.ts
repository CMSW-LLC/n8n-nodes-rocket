/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['bradesco'], operation: ['bradesco_upload_documentos'] } },
	},
	{
			displayName: 'Image Uid',
			name: 'imageUid',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bradesco'], operation: ['bradesco_upload_documentos'] } },
			required: true,
		},
	{
			displayName: 'Sequence',
			name: 'sequence',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bradesco'], operation: ['bradesco_upload_documentos'] } },
			required: true,
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bradesco'], operation: ['bradesco_upload_documentos'] } },
		},
	{
			displayName: 'Image Url',
			name: 'imageUrl',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['bradesco'], operation: ['bradesco_upload_documentos'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'IMAGE_UID': this.getNodeParameter('imageUid', i) as string,
		'SEQUENCE': this.getNodeParameter('sequence', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'IMAGE_URL': this.getNodeParameter('imageUrl', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'bradesco_upload_documentos',
		parametros,
		webhookUrl,
	});
}
