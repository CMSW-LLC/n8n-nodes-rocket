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

export async function rocketApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string = '',
	body: IDataObject = {},
	qs: IDataObject = {},
	url?: string,
	headers: IDataObject = {},
) {
	const options: IHttpRequestOptions = {
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

	try {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'rocketApi', options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}
