import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { RocketV1 } from './v1/RocketV1.version';

export class Rocket extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Rocket',
			name: 'rocket',
			icon: { light: 'file:rocket.svg', dark: 'file:rocket-dark.svg' },
			group: ['transform'],
			description: 'Consulta dados de provedores de informações',
			defaultVersion: 1,
			documentationUrl: 'https://rocket-providers.cmsw.com/docs/n8n-nodes-rocket',
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new RocketV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
