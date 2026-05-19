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
			displayName: 'Usuário De Acesso Ao Provedor',
			name: 'usuario',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
			required: true,
		},
	{
			displayName: 'Senha De Acesso Ao Provedor',
			name: 'senha',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
			typeOptions: { password: true },
			required: true,
		},
	{
			displayName: 'QTDEDEDIAS',
			name: 'qtdededias',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'CODIGO RISK SCORING',
			name: 'modeloriskscoring',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'FATURAMENTOPRESUMIDO',
			name: 'faturamentopresumido',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'AMBIENTE',
			name: 'ambiente',
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
			displayName: 'QUER ALERT SOC',
			name: 'querAlertSoc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'LIMITEPJ',
			name: 'limitepj',
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
			displayName: 'GERENCIE',
			name: 'gerencie',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'GRUPOE MAIL',
			name: 'grupoeMail',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'O Quadro Societario E Administrativo',
			name: 'qdsoc',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'CNPJ',
			name: 'cnpj',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'PERFIL',
			name: 'perfil',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Codigo De Opcaoo De Consulta Da Ip20',
			name: 'cdopcao',
			type: 'string',
			default: '',
			displayOptions: { show: { resource: ['serasa'], operation: ['SERASA_IP20'] } },
		},
	{
			displayName: 'Modelo Do Riskscoring',
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
		'QTDEDEDIAS': this.getNodeParameter('qtdededias', i) as string,
		'MODELORISKSCORING': this.getNodeParameter('modeloriskscoring', i) as string,
		'FATURAMENTOPRESUMIDO': this.getNodeParameter('faturamentopresumido', i) as string,
		'AMBIENTE': this.getNodeParameter('ambiente', i) as string,
		'QUER_ALERT_EMP': this.getNodeParameter('querAlertEmp', i) as string,
		'QUER_ALERT_SOC': this.getNodeParameter('querAlertSoc', i) as string,
		'LIMITEPJ': this.getNodeParameter('limitepj', i) as string,
		'IND_NOVO_QS': this.getNodeParameter('indNovoQs', i) as string,
		'GERENCIE': this.getNodeParameter('gerencie', i) as string,
		'GRUPOE_MAIL': this.getNodeParameter('grupoeMail', i) as string,
		'QDSOC': this.getNodeParameter('qdsoc', i) as string,
		'CNPJ': this.getNodeParameter('cnpj', i) as string,
		'PERFIL': this.getNodeParameter('perfil', i) as string,
		'CDOPCAO': this.getNodeParameter('cdopcao', i) as string,
		'RISKSCORING': this.getNodeParameter('riskscoring', i) as string,
	};

	return await rocketApiRequest.call(this, 'POST', '', {
		origem_solic: 'N8N',
		provider: 'SERASA_IP20',
		parametros,
		webhookUrl,
	});
}
