/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
	},
	{
			displayName: 'Nome Do Cliente',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'CEP Da Residencia Do Cliente',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Tipo De Assessment A Ser Processado',
			name: 'tipoAssessment',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
			required: true,
		},
	{
			displayName: 'Renda Declarada PF',
			name: 'rendaDeclarada',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Quantidade De Vezes Que Se Quer Executar A Pesquisa Nos Meses Subsequentes',
			name: 'recorrencia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Quantidade De Parcelas PF',
			name: 'quantidadeParcelas',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Agencia Restituicao',
			name: 'agenciaReferencia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Valor Faturamento PJ',
			name: 'faturamentoAnual',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Data De Nascimento',
			name: 'dataNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Valor Da Parcela Que Pretende Comprometer',
			name: 'compromissoMensal',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Somatorias Das Parcelas No Ano',
			name: 'compromissoAnual',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Nome Cliente Para Utilizar No Unitfour',
			name: 'cliente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'CPF Ou CNPJ Do Alvo Da Pesquisa',
			name: 'cd',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
			required: true,
		},
	{
			displayName: 'Base Do CNPJ Da Empresa Requisitante Da Agregacao',
			name: 'basecnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
			required: true,
		},
	{
			displayName: 'Banco De Restituicao',
			name: 'bancoReferencia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Profissao Do Cliente',
			name: 'profissao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'NOME': this.getNodeParameter('nome', i) as string,
		'CEP': this.getNodeParameter('cep', i) as string,
		'TIPO_ASSESSMENT': this.getNodeParameter('tipoAssessment', i) as string,
		'RENDA_DECLARADA': this.getNodeParameter('rendaDeclarada', i) as string,
		'RECORRENCIA': this.getNodeParameter('recorrencia', i) as string,
		'QUANTIDADE_PARCELAS': this.getNodeParameter('quantidadeParcelas', i) as string,
		'AGENCIA_REFERENCIA': this.getNodeParameter('agenciaReferencia', i) as string,
		'FATURAMENTO_ANUAL': this.getNodeParameter('faturamentoAnual', i) as string,
		'DATA_NASCIMENTO': this.getNodeParameter('dataNascimento', i) as string,
		'COMPROMISSO_MENSAL': this.getNodeParameter('compromissoMensal', i) as string,
		'COMPROMISSO_ANUAL': this.getNodeParameter('compromissoAnual', i) as string,
		'CLIENTE': this.getNodeParameter('cliente', i) as string,
		'CD': this.getNodeParameter('cd', i) as string,
		'BASECNPJ': this.getNodeParameter('basecnpj', i) as string,
		'BANCO_REFERENCIA': this.getNodeParameter('bancoReferencia', i) as string,
		'PROFISSAO': this.getNodeParameter('profissao', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'cvc_assessment',
		parametros,
		webhookUrl,
	});
}
