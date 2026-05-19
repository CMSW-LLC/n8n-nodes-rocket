import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class RocketApi implements ICredentialType {
	name = 'rocketApi';
	displayName = 'Rocket API';
	icon = 'file:rocket.svg' as const;
	documentationUrl = 'https://rocket-providers.cmsw.com/docs/n8n-nodes-rocket';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			typeOptions: { password: true },
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://rocket-api-cache.cmsw.com',
			url: '/provedores/validar-api-key',
			method: 'POST',
			body: {
				api_key: '={{$credentials.apiKey}}',
			},
			json: true,
		},
		rules: [
			{
				type: 'responseSuccessBody',
				properties: {
					key: 'valid',
					value: false,
					message: 'API key inválida, inativa ou expirada',
				},
			},
		],
	};
}
