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
			displayName: 'Banco de Restituicao',
			name: 'bancoReferencia',
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
			displayName: 'Quantidade de Vezes Que Se Quer Executar a Pesquisa Nos Meses Subsequentes',
			name: 'recorrencia',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Quantidade de Parcelas PF',
			name: 'quantidadeParcelas',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Renda Declarada PF',
			name: 'rendaDeclarada',
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
			displayName: 'Data de Nascimento',
			name: 'dataNascimento',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Valor da Parcela Que Pretende Comprometer',
			name: 'compromissoMensal',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Profissao do Cliente',
			name: 'profissao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Tipo de Assessment a Ser Processado',
			name: 'tipoAssessment',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
			required: true,
		},
	{
			displayName: 'Nome do Cliente',
			name: 'nome',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Somatorias das Parcelas no Ano',
			name: 'compromissoAnual',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'CEP da Residencia do Cliente',
			name: 'cep',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'Nome Cliente para Utilizar no Unitfour',
			name: 'cliente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
		},
	{
			displayName: 'CPF Ou CNPJ do Alvo da Pesquisa',
			name: 'cd',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
			required: true,
		},
	{
			displayName: 'Base do CNPJ da Empresa Requisitante da Agregacao',
			name: 'basecnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['cm_software'], operation: ['cvc_assessment'] } },
			required: true,
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'BANCO_REFERENCIA': this.getNodeParameter('bancoReferencia', i) as string,
		'AGENCIA_REFERENCIA': this.getNodeParameter('agenciaReferencia', i) as string,
		'RECORRENCIA': this.getNodeParameter('recorrencia', i) as string,
		'QUANTIDADE_PARCELAS': this.getNodeParameter('quantidadeParcelas', i) as string,
		'RENDA_DECLARADA': this.getNodeParameter('rendaDeclarada', i) as string,
		'FATURAMENTO_ANUAL': this.getNodeParameter('faturamentoAnual', i) as string,
		'DATA_NASCIMENTO': this.getNodeParameter('dataNascimento', i) as string,
		'COMPROMISSO_MENSAL': this.getNodeParameter('compromissoMensal', i) as string,
		'PROFISSAO': this.getNodeParameter('profissao', i) as string,
		'TIPO_ASSESSMENT': this.getNodeParameter('tipoAssessment', i) as string,
		'NOME': this.getNodeParameter('nome', i) as string,
		'COMPROMISSO_ANUAL': this.getNodeParameter('compromissoAnual', i) as string,
		'CEP': this.getNodeParameter('cep', i) as string,
		'CLIENTE': this.getNodeParameter('cliente', i) as string,
		'CD': this.getNodeParameter('cd', i) as string,
		'BASECNPJ': this.getNodeParameter('basecnpj', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'cvc_assessment',
		parametros,
		webhookUrl,
	});
}
