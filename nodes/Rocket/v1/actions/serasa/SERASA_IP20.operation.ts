/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';

import { webhookUrlDescription } from '../../descriptions/common.description';
import { rocketApiRequest } from '../../transport';

export const properties: INodeProperties[] = [
	{
		...webhookUrlDescription,
		displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
	},
	{
			displayName: 'Usuário de Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
			required: true,
		},
	{
			displayName: 'Senha de Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Codigo RISK Scoring',
			name: 'modeloriskscoring',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Codigo de Opcaoo de Consulta da Ip20',
			name: 'cdopcao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Perfil',
			name: 'perfil',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Grupoe MAIL',
			name: 'grupoeMail',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Qtdededias',
			name: 'qtdededias',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Gerencie',
			name: 'gerencie',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Faturamentopresumido',
			name: 'faturamentopresumido',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'O Quadro Societario e Administrativo',
			name: 'qdsoc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Limitepj',
			name: 'limitepj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'QUER ALERT SOC',
			name: 'querAlertSoc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'QUER ALERT EMP',
			name: 'querAlertEmp',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'IND NOVO QS',
			name: 'indNovoQs',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Ambiente',
			name: 'ambiente',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Modelo do Riskscoring',
			name: 'riskscoring',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
];

export const description = properties;

export async function execute(this: IExecuteFunctions, i: number) {
	const webhookUrl = (this.getNodeParameter('webhookUrl', i) as string);
	const parametros: IDataObject = {
		'usuario': this.getNodeParameter('usuario', i) as string,
		'senha': this.getNodeParameter('senha', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'MODELORISKSCORING': this.getNodeParameter('modeloriskscoring', i) as string,
		'CDOPCAO': this.getNodeParameter('cdopcao', i) as string,
		'PERFIL': this.getNodeParameter('perfil', i) as string,
		'GRUPOE_MAIL': this.getNodeParameter('grupoeMail', i) as string,
		'QTDEDEDIAS': this.getNodeParameter('qtdededias', i) as string,
		'GERENCIE': this.getNodeParameter('gerencie', i) as string,
		'FATURAMENTOPRESUMIDO': this.getNodeParameter('faturamentopresumido', i) as string,
		'QDSOC': this.getNodeParameter('qdsoc', i) as string,
		'LIMITEPJ': this.getNodeParameter('limitepj', i) as string,
		'QUER_ALERT_SOC': this.getNodeParameter('querAlertSoc', i) as string,
		'QUER_ALERT_EMP': this.getNodeParameter('querAlertEmp', i) as string,
		'IND_NOVO_QS': this.getNodeParameter('indNovoQs', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'RISKSCORING': this.getNodeParameter('riskscoring', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'SERASA_IP20',
		parametros,
		webhookUrl,
	});
}
