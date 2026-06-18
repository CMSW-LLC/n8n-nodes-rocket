import {
	type IDataObject,
	type IExecuteFunctions,
	type IHttpRequestMethods,
	type IHttpRequestOptions,
	type ILoadOptionsFunctions,
	type JsonObject,
	NodeApiError,
} from 'n8n-workflow';

const EXECUTE_URL = 'https://rocket-api-cache.cmsw.com/provedores/execute-provider';
const SYNC_TIMEOUT_MS = 120_000;

export interface RocketApiRequestOptions {
	timeout?: number;
}

export async function rocketApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string = '',
	body: IDataObject = {},
	qs: IDataObject = {},
	url?: string,
	headers: IDataObject = {},
	options: RocketApiRequestOptions = {},
) {
	const requestOptions: IHttpRequestOptions = {
		method,
		url: url ?? `${EXECUTE_URL}${resource}`,
		body,
		qs,
		json: true,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...headers,
		},
	};

	if (options.timeout != null) {
		requestOptions.timeout = options.timeout;
	}

	try {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'rocketApi', requestOptions);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function rocketApiExecuteProvider(
	this: IExecuteFunctions,
	i: number,
	provider: string,
	parametros: IDataObject,
): Promise<IDataObject> {
	const webhookUrl = String(this.getNodeParameter('webhookUrl', i) ?? '').trim();
	const isSync = webhookUrl === '';

	const body: IDataObject = {
		origem_solic: 'N8N',
		provider,
		parametros,
	};

	if (!isSync) {
		body.webhookUrl = webhookUrl;
	}

	return rocketApiRequest.call(
		this,
		'POST',
		'',
		body,
		{},
		undefined,
		{},
		{ timeout: isSync ? SYNC_TIMEOUT_MS : undefined },
	);
}
