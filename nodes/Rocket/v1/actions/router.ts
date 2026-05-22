/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { IDataObject, IExecuteFunctions, INodeExecutionData, JsonObject } from 'n8n-workflow';
import { NodeApiError, NodeOperationError } from 'n8n-workflow';

import * as acertid from './acertid';
import * as allcheck from './allcheck';
import * as assertiva from './assertiva';
import * as bancoCentral from './banco_central';
import * as bigData from './big_data';
import * as bigboost from './bigboost';
import * as boaVista from './boa_vista';
import * as bovespa from './bovespa';
import * as cadposBoaVista from './cadpos_boa_vista';
import * as capitalys from './capitalys';
import * as ccb from './ccb';
import * as cerc from './cerc';
import * as checkbem from './checkbem';
import * as cmSoftware from './cm_software';
import * as cnseg from './cnseg';
import * as coface from './coface';
import * as correios from './correios';
import * as cvm from './cvm';
import * as deptoDeTransito from './depto_de_transito';
import * as europa from './europa';
import * as federal from './federal';
import * as idwall from './idwall';
import * as inovamind from './inovamind';
import * as juntasComerciais from './juntas_comerciais';
import * as lexisNexis from './lexis_nexis';
import * as neoway from './neoway';
import * as novaVida from './nova_vida';
import * as osas from './osas';
import * as pagtur from './pagtur';
import * as pep from './pep';
import * as policia from './policia';
import * as prefeituras from './prefeituras';
import * as promobank from './promobank';
import * as quod from './quod';
import * as receitaFederal from './receita_federal';
import * as resolv from './resolv';
import * as secrDaFazenda from './secr_da_fazenda';
import * as serasa from './serasa';
import * as sintegra from './sintegra';
import * as spc from './spc';
import * as telefonia from './telefonia';
import * as tribunalDeJustica from './tribunal_de_justica';
import * as tribunalSuperior from './tribunal_superior';
import * as unitfour from './unitfour';
import * as usaCriminal from './usa_criminal';
import type { RocketType } from './node.type';

type OperationHandler = (this: IExecuteFunctions, i: number) => Promise<IDataObject | IDataObject[]>;

const operationHandlers: Record<RocketType['resource'], Record<string, OperationHandler>> = {
	'acertid': {
			'acertid_net_ws': acertid['acertid_net_ws'].execute,
			'acertid_resumo_ws': acertid['acertid_resumo_ws'].execute,
	},
	'allcheck': {
			'allcheck_localizador': allcheck['allcheck_localizador'].execute,
			'allchkcad': allcheck['allchkcad'].execute,
			'allchktel': allcheck['allchktel'].execute,
			'allchkveic': allcheck['allchkveic'].execute,
	},
	'assertiva': {
			'assertiva': assertiva['assertiva'].execute,
			'assertiva_cnpj': assertiva['assertiva_cnpj'].execute,
			'assertiva_cnpj_tarifado': assertiva['assertiva_cnpj_tarifado'].execute,
			'assertiva_tarifado': assertiva['assertiva_tarifado'].execute,
	},
	'banco_central': {
			'bacen_nome_cpf': bancoCentral['bacen_nome_cpf'].execute,
			'bcb_cotacao_dolar': bancoCentral['bcb_cotacao_dolar'].execute,
			'bcb': bancoCentral['bcb'].execute,
	},
	'big_data': {
			'bigdata_relacionamento': bigData['bigdata_relacionamento'].execute,
			'bigdata_dados_pj': bigData['bigdata_dados_pj'].execute,
			'bigdata_ind_ativ_pj': bigData['bigdata_ind_ativ_pj'].execute,
			'bigdata_dados_pessoas': bigData['bigdata_dados_pessoas'].execute,
			'bigdata_dados_raiz': bigData['bigdata_dados_raiz'].execute,
	},
	'bigboost': {
			'bigboost': bigboost['bigboost'].execute,
	},
	'boa_vista': {
			'boa_vista_acerta_pos_essencial': boaVista['boa_vista_acerta_pos_essencial'].execute,
			'boa_vista_define_risco_positivo': boaVista['boa_vista_define_risco_positivo'].execute,
			'boavista_gold': boaVista['boavista_gold'].execute,
			'boa_vista_gerenciamento': boaVista['boa_vista_gerenciamento'].execute,
			'boa_vista_modular_pf_cadastral': boaVista['boa_vista_modular_pf_cadastral'].execute,
			'boavista_consta_debito': boaVista['boavista_consta_debito'].execute,
	},
	'bovespa': {
			'bovespa_balanco_financeiro': bovespa['bovespa_balanco_financeiro'].execute,
	},
	'cadpos_boa_vista': {
			'boa_vista_score_positivo_pf': cadposBoaVista['boa_vista_score_positivo_pf'].execute,
	},
	'capitalys': {
			'api_captalys': capitalys['api_captalys'].execute,
			'webhook_captalys': capitalys['webhook_captalys'].execute,
	},
	'ccb': {
			'ccb_relatorio': ccb['ccb_relatorio'].execute,
	},
	'cerc': {
			'avaliacoes_dados_dfe': cerc['avaliacoes_dados_dfe'].execute,
			'avaliacoes_dados_partes': cerc['avaliacoes_dados_partes'].execute,
			'aval_direitos_creditorios': cerc['aval_direitos_creditorios'].execute,
			'avaliacoes_ind_consistencia': cerc['avaliacoes_ind_consistencia'].execute,
			'consulta_aval_eventos': cerc['consulta_aval_eventos'].execute,
			'direitos_creditorios_lote': cerc['direitos_creditorios_lote'].execute,
			'lotes_avaliacoes': cerc['lotes_avaliacoes'].execute,
	},
	'checkbem': {
			'checkbem': checkbem['checkbem'].execute,
	},
	'cm_software': {
			'base_dados_contexto': cmSoftware['base_dados_contexto'].execute,
			'clearsale': cmSoftware['clearsale'].execute,
			'cvc_pf': cmSoftware['cvc_pf'].execute,
			'cvc_pj': cmSoftware['cvc_pj'].execute,
			'cnh_extracao_dados': cmSoftware['cnh_extracao_dados'].execute,
			'ip2location': cmSoftware['ip2location'].execute,
			'cvc_assessment': cmSoftware['cvc_assessment'].execute,
			'apigateway_sms': cmSoftware['apigateway_sms'].execute,
			'cnh_digito': cmSoftware['cnh_digito'].execute,
	},
	'cnseg': {
			'cnseg_placa_ws': cnseg['cnseg_placa_ws'].execute,
	},
	'coface': {
			'cofanet': coface['cofanet'].execute,
	},
	'correios': {
			'correios': correios['correios'].execute,
			'ceplivre': correios['ceplivre'].execute,
			'correios_logradouro': correios['correios_logradouro'].execute,
	},
	'cvm': {
			'afast_determinacao_judicial': cvm['afast_determinacao_judicial'].execute,
			'suspensao_cvm': cvm['suspensao_cvm'].execute,
			'cvm_cadastro': cvm['cvm_cadastro'].execute,
			'cvm_processos': cvm['cvm_processos'].execute,
			'deliberacoes_cvm': cvm['deliberacoes_cvm'].execute,
			'identificacao_processo_cvm': cvm['identificacao_processo_cvm'].execute,
	},
	'depto_de_transito': {
			'detran_amapa': deptoDeTransito['detran_amapa'].execute,
			'detran_pe': deptoDeTransito['detran_pe'].execute,
			'detran_rj_infracoes': deptoDeTransito['detran_rj_infracoes'].execute,
			'detran_sc_cnh': deptoDeTransito['detran_sc_cnh'].execute,
			'detran_sp_codev': deptoDeTransito['detran_sp_codev'].execute,
			'detran_ma_cnh': deptoDeTransito['detran_ma_cnh'].execute,
			'detran_rn': deptoDeTransito['detran_rn'].execute,
	},
	'europa': {
			'procurados_europol': europa['procurados_europol'].execute,
			'procurados_fbi': europa['procurados_fbi'].execute,
	},
	'federal': {
			'acordos_leniencia': federal['acordos_leniencia'].execute,
			'ancord': federal['ancord'].execute,
			'ceaf': federal['ceaf'].execute,
			'cepim': federal['cepim'].execute,
			'cidade_fronteiricas': federal['cidade_fronteiricas'].execute,
			'cnep': federal['cnep'].execute,
			'consulta_obito_rj': federal['consulta_obito_rj'].execute,
			'trabalho_escravo': federal['trabalho_escravo'].execute,
			'ibama': federal['ibama'].execute,
			'ibama_cert_negativa_debt': federal['ibama_cert_negativa_debt'].execute,
			'ibama_embargos': federal['ibama_embargos'].execute,
			'ibge_municipios': federal['ibge_municipios'].execute,
			'ieptb_nacional': federal['ieptb_nacional'].execute,
			'ieptb': federal['ieptb'].execute,
			'portal_transparencia': federal['portal_transparencia'].execute,
			'portal_transparencia_bas': federal['portal_transparencia_bas'].execute,
			'portal_transparencia_pf_rpfc': federal['portal_transparencia_pf_rpfc'].execute,
			'portal_transparencia_bf': federal['portal_transparencia_bf'].execute,
			'portal_transparencia_ceis': federal['portal_transparencia_ceis'].execute,
			'portal_transparencia_pj': federal['portal_transparencia_pj'].execute,
			'registro_br': federal['registro_br'].execute,
			'fgts_empregador': federal['fgts_empregador'].execute,
			'beneficio_seguro_defeso': federal['beneficio_seguro_defeso'].execute,
			'sinesp_cidadao': federal['sinesp_cidadao'].execute,
			'suframa': federal['suframa'].execute,
			'tcu_contas_irregulares': federal['tcu_contas_irregulares'].execute,
	},
	'idwall': {
			'idwall_pep_resp': idwall['idwall_pep_resp'].execute,
			'idwall_doc_copia': idwall['idwall_doc_copia'].execute,
			'idwall_doc_copia_resp': idwall['idwall_doc_copia_resp'].execute,
			'idwall_endereco': idwall['idwall_endereco'].execute,
			'idwall_endereco_resp': idwall['idwall_endereco_resp'].execute,
			'idwall_midias_n_pf': idwall['idwall_midias_n_pf'].execute,
			'idwall_midias_n_pf_resp': idwall['idwall_midias_n_pf_resp'].execute,
			'idwall_midias_n_pj': idwall['idwall_midias_n_pj'].execute,
			'idwall_midias_n_pj_resp': idwall['idwall_midias_n_pj_resp'].execute,
			'idwall_pep': idwall['idwall_pep'].execute,
			'idwall_processos_pj': idwall['idwall_processos_pj'].execute,
			'idwall_processos_pj_resp': idwall['idwall_processos_pj_resp'].execute,
			'idwall_processos': idwall['idwall_processos'].execute,
			'idwall_processos_resp': idwall['idwall_processos_resp'].execute,
	},
	'inovamind': {
			'inovamind_rg_detalhe': inovamind['inovamind_rg_detalhe'].execute,
			'inovamind_rg_token': inovamind['inovamind_rg_token'].execute,
			'inovamind_cpf_rf': inovamind['inovamind_cpf_rf'].execute,
			'inovamind_rg': inovamind['inovamind_rg'].execute,
			'inovamind_cnh': inovamind['inovamind_cnh'].execute,
			'inovamind_cnh_detalhe': inovamind['inovamind_cnh_detalhe'].execute,
			'inovamind_cnh_token': inovamind['inovamind_cnh_token'].execute,
			'inovamind_doadores_campanha_pf_detalhe': inovamind['inovamind_doadores_campanha_pf_detalhe'].execute,
			'inovamind_doadores_campanha_pf_token': inovamind['inovamind_doadores_campanha_pf_token'].execute,
			'inovamind_doadores_campanha_pj_detalhe': inovamind['inovamind_doadores_campanha_pj_detalhe'].execute,
			'inovamind_doadores_campanha_pj_token': inovamind['inovamind_doadores_campanha_pj_token'].execute,
			'inovamind_endereco': inovamind['inovamind_endereco'].execute,
			'inovamind_endereco_detalhe': inovamind['inovamind_endereco_detalhe'].execute,
			'inovamind_endereco_token': inovamind['inovamind_endereco_token'].execute,
			'inovamind_nome_mae': inovamind['inovamind_nome_mae'].execute,
			'inovamind_nome_mae_detalhe': inovamind['inovamind_nome_mae_detalhe'].execute,
			'inovamind_nome_mae_token': inovamind['inovamind_nome_mae_token'].execute,
			'inovamind_pep': inovamind['inovamind_pep'].execute,
			'inovamind_pep_detalhe': inovamind['inovamind_pep_detalhe'].execute,
			'inovamind_pep_token': inovamind['inovamind_pep_token'].execute,
			'inovamind_consulta_assistencia_social': inovamind['inovamind_consulta_assistencia_social'].execute,
			'inovamind_doadores_campanha_pf': inovamind['inovamind_doadores_campanha_pf'].execute,
			'inovamind_doadores_campanha_pj': inovamind['inovamind_doadores_campanha_pj'].execute,
	},
	'juntas_comerciais': {
			'jucesp_simples': juntasComerciais['jucesp_simples'].execute,
	},
	'lexis_nexis': {
			'lexis_nexis_search': lexisNexis['lexis_nexis_search'].execute,
	},
	'neoway': {
			'neoway_cnpj': neoway['neoway_cnpj'].execute,
	},
	'nova_vida': {
			'nvti_ws023': novaVida['nvti_ws023'].execute,
			'novavida_inadimplencia_pf': novaVida['novavida_inadimplencia_pf'].execute,
			'novavida_inadimplencia_pj': novaVida['novavida_inadimplencia_pj'].execute,
			'novavida_nvcheck': novaVida['novavida_nvcheck'].execute,
			'nvti_ws009_tarifado': novaVida['nvti_ws009_tarifado'].execute,
			'nv_pessoas_empr_tk_tarifado': novaVida['nv_pessoas_empr_tk_tarifado'].execute,
			'nv_sit_cad_tk_tarifado': novaVida['nv_sit_cad_tk_tarifado'].execute,
			'nvti_ws009': novaVida['nvti_ws009'].execute,
			'nvti_ws012': novaVida['nvti_ws012'].execute,
			'nvti_ws016': novaVida['nvti_ws016'].execute,
	},
	'osas': {
			'tipificacao_base64_osas': osas['tipificacao_base64_osas'].execute,
	},
	'pagtur': {
			'pagtur_api': pagtur['pagtur_api'].execute,
	},
	'pep': {
			'coaf_pep': pep['coaf_pep'].execute,
			'crsfn': pep['crsfn'].execute,
			'csnu': pep['csnu'].execute,
			'csnu_ue': pep['csnu_ue'].execute,
			'doadores_fornecedores_politicas': pep['doadores_fornecedores_politicas'].execute,
			'dowjones': pep['dowjones'].execute,
			'dowjones_resposta': pep['dowjones_resposta'].execute,
			'dowjones_token': pep['dowjones_token'].execute,
			'indicio_fraude_clearsale': pep['indicio_fraude_clearsale'].execute,
			'ofac_consolidated_list': pep['ofac_consolidated_list'].execute,
			'ofac_sanctions_list': pep['ofac_sanctions_list'].execute,
			'poder360_detalhe': pep['poder360_detalhe'].execute,
			'poder360_lista': pep['poder360_lista'].execute,
			'sancoes_banco_mundial': pep['sancoes_banco_mundial'].execute,
			'tse_dados_eleitorais': pep['tse_dados_eleitorais'].execute,
			'accuity': pep['accuity'].execute,
	},
	'policia': {
			'policia_ac': policia['policia_ac'].execute,
			'policia_al': policia['policia_al'].execute,
			'policia_ba': policia['policia_ba'].execute,
			'policia_ce': policia['policia_ce'].execute,
			'policia_es': policia['policia_es'].execute,
			'policia_federal': policia['policia_federal'].execute,
			'policia_go': policia['policia_go'].execute,
			'policia_mg': policia['policia_mg'].execute,
			'policia_ms': policia['policia_ms'].execute,
			'policia_pa': policia['policia_pa'].execute,
			'policia_pe': policia['policia_pe'].execute,
			'policia_rj': policia['policia_rj'].execute,
			'policia_rr': policia['policia_rr'].execute,
			'policia_rs': policia['policia_rs'].execute,
			'policia_se': policia['policia_se'].execute,
			'policia_sp': policia['policia_sp'].execute,
	},
	'prefeituras': {
			'prefeitura_bh': prefeituras['prefeitura_bh'].execute,
			'prefeitura_cuiaba': prefeituras['prefeitura_cuiaba'].execute,
			'prefeitura_brasilia': prefeituras['prefeitura_brasilia'].execute,
			'prefeitura_ctba': prefeituras['prefeitura_ctba'].execute,
			'prefeitura_sp': prefeituras['prefeitura_sp'].execute,
			'prefeitura_riojaneiro': prefeituras['prefeitura_riojaneiro'].execute,
			'prefeitura_goiania': prefeituras['prefeitura_goiania'].execute,
			'pref_porto_alegre': prefeituras['pref_porto_alegre'].execute,
			'prefeitura_porto_velho': prefeituras['prefeitura_porto_velho'].execute,
	},
	'promobank': {
			'promobank': promobank['promobank'].execute,
	},
	'quod': {
			'quod_pf': quod['quod_pf'].execute,
			'quod_faturamento_presumido': quod['quod_faturamento_presumido'].execute,
			'quod_pj': quod['quod_pj'].execute,
			'quod_renda_presumida_pf': quod['quod_renda_presumida_pf'].execute,
	},
	'receita_federal': {
			'datavalid_biometria_face': receitaFederal['datavalid_biometria_face'].execute,
			'serpro_dv_face_tarifado': receitaFederal['serpro_dv_face_tarifado'].execute,
			'serpro_dv_face_tarifado_v4': receitaFederal['serpro_dv_face_tarifado_v4'].execute,
			'pgfn_da': receitaFederal['pgfn_da'].execute,
			'serpro_datavalid': receitaFederal['serpro_datavalid'].execute,
			'portal_empreendedor': receitaFederal['portal_empreendedor'].execute,
			'consulta_rf_qsa': receitaFederal['consulta_rf_qsa'].execute,
			'simples_nacional': receitaFederal['simples_nacional'].execute,
			'serpro_cnpj': receitaFederal['serpro_cnpj'].execute,
			'serpro_cnpj_tarifado': receitaFederal['serpro_cnpj_tarifado'].execute,
			'serpro_cpf': receitaFederal['serpro_cpf'].execute,
			'serpro_cpf_tarifado': receitaFederal['serpro_cpf_tarifado'].execute,
			'rf_dau': receitaFederal['rf_dau'].execute,
			'rf_dau_cnpj': receitaFederal['rf_dau_cnpj'].execute,
			'cons_qsa': receitaFederal['cons_qsa'].execute,
			'rf_irpf': receitaFederal['rf_irpf'].execute,
			'rf_cnpj': receitaFederal['rf_cnpj'].execute,
			'rf_cpf': receitaFederal['rf_cpf'].execute,
			'simples_nacional_da': receitaFederal['simples_nacional_da'].execute,
	},
	'resolv': {
			'cetelem_resolv_obito': resolv['cetelem_resolv_obito'].execute,
	},
	'secr_da_fazenda': {
			'cadesp_icms': secrDaFazenda['cadesp_icms'].execute,
	},
	'serasa': {
			'serasa_crednet_light': serasa['serasa_crednet_light'].execute,
			'serasa_crednet_top': serasa['serasa_crednet_top'].execute,
			'serasa_cb': serasa['serasa_cb'].execute,
			'SERASA_IP20': serasa['SERASA_IP20'].execute,
			'serasa_avancado_pj': serasa['serasa_avancado_pj'].execute,
			'serasa_base_inconsistencia': serasa['serasa_base_inconsistencia'].execute,
			'b49c_concentre': serasa['b49c_concentre'].execute,
			'serasa_confie': serasa['serasa_confie'].execute,
			'serasa_b49c': serasa['serasa_b49c'].execute,
			'serasa_intermediario_pj': serasa['serasa_intermediario_pj'].execute,
			'verify_id_pf': serasa['verify_id_pf'].execute,
	},
	'sintegra': {
			'sintegra_sp': sintegra['sintegra_sp'].execute,
			'sintegra_ac': sintegra['sintegra_ac'].execute,
			'sintegra_al': sintegra['sintegra_al'].execute,
			'sintegra_ap': sintegra['sintegra_ap'].execute,
			'sintegra_am': sintegra['sintegra_am'].execute,
			'sintegra_ba': sintegra['sintegra_ba'].execute,
			'sintegra_ce': sintegra['sintegra_ce'].execute,
			'sintegra_df': sintegra['sintegra_df'].execute,
			'sintegra_es': sintegra['sintegra_es'].execute,
			'sintegra_go': sintegra['sintegra_go'].execute,
			'sintegra_ma': sintegra['sintegra_ma'].execute,
			'sintegra_mt': sintegra['sintegra_mt'].execute,
			'sintegra_ms': sintegra['sintegra_ms'].execute,
			'sintegra_mg': sintegra['sintegra_mg'].execute,
			'sintegra_pa': sintegra['sintegra_pa'].execute,
			'sintegra_pb': sintegra['sintegra_pb'].execute,
			'sintegra_pr': sintegra['sintegra_pr'].execute,
			'sintegra_pe': sintegra['sintegra_pe'].execute,
			'sintegra_pi': sintegra['sintegra_pi'].execute,
			'sintegra_rj': sintegra['sintegra_rj'].execute,
			'sintegra_rn': sintegra['sintegra_rn'].execute,
			'sintegra_rs': sintegra['sintegra_rs'].execute,
			'sintegra_ro': sintegra['sintegra_ro'].execute,
			'sintegra_rr': sintegra['sintegra_rr'].execute,
			'sintegra_sc': sintegra['sintegra_sc'].execute,
			'sintegra_se': sintegra['sintegra_se'].execute,
			'sintegra_to': sintegra['sintegra_to'].execute,
			'sintegra_ccc': sintegra['sintegra_ccc'].execute,
	},
	'spc': {
			'jbcred_spc': spc['jbcred_spc'].execute,
			'scpc_acerta_pf': spc['scpc_acerta_pf'].execute,
			'spc_consulta_completa': spc['spc_consulta_completa'].execute,
			'spc_inclusao_exclusao': spc['spc_inclusao_exclusao'].execute,
			'spc_mix_j': spc['spc_mix_j'].execute,
			'spc_mix_f': spc['spc_mix_f'].execute,
	},
	'telefonia': {
			'imei': telefonia['imei'].execute,
			'telefonica': telefonia['telefonica'].execute,
	},
	'tribunal_de_justica': {
			'bnmp': tribunalDeJustica['bnmp'].execute,
			'processos_cnj': tribunalDeJustica['processos_cnj'].execute,
			'cnj_processos': tribunalDeJustica['cnj_processos'].execute,
			'cnj_improbidade': tribunalDeJustica['cnj_improbidade'].execute,
			'cvm_inqueritos': tribunalDeJustica['cvm_inqueritos'].execute,
			'escavador': tribunalDeJustica['escavador'].execute,
			'processos_jusbrasil': tribunalDeJustica['processos_jusbrasil'].execute,
			'stf': tribunalDeJustica['stf'].execute,
			'stj': tribunalDeJustica['stj'].execute,
			'trf_1': tribunalDeJustica['trf_1'].execute,
			'trf_2': tribunalDeJustica['trf_2'].execute,
			'trf_3': tribunalDeJustica['trf_3'].execute,
			'trf_4regiao': tribunalDeJustica['trf_4regiao'].execute,
			'trf_5regiao': tribunalDeJustica['trf_5regiao'].execute,
			'trf_6regiao': tribunalDeJustica['trf_6regiao'].execute,
			'tj_mg': tribunalDeJustica['tj_mg'].execute,
			'tj_pe_unificada': tribunalDeJustica['tj_pe_unificada'].execute,
			'tj_sc': tribunalDeJustica['tj_sc'].execute,
			'tj_ac': tribunalDeJustica['tj_ac'].execute,
			'tj_al': tribunalDeJustica['tj_al'].execute,
			'tj_am': tribunalDeJustica['tj_am'].execute,
			'tj_ap': tribunalDeJustica['tj_ap'].execute,
			'tj_ba': tribunalDeJustica['tj_ba'].execute,
			'tj_ce': tribunalDeJustica['tj_ce'].execute,
			'tj_df': tribunalDeJustica['tj_df'].execute,
			'tj_es': tribunalDeJustica['tj_es'].execute,
			'tj_go': tribunalDeJustica['tj_go'].execute,
			'tj_ma': tribunalDeJustica['tj_ma'].execute,
			'tj_ms': tribunalDeJustica['tj_ms'].execute,
			'tj_mt': tribunalDeJustica['tj_mt'].execute,
			'tj_pa': tribunalDeJustica['tj_pa'].execute,
			'tj_pb': tribunalDeJustica['tj_pb'].execute,
			'tj_pe': tribunalDeJustica['tj_pe'].execute,
			'tj_pi': tribunalDeJustica['tj_pi'].execute,
			'tj_pr': tribunalDeJustica['tj_pr'].execute,
			'tj_rj': tribunalDeJustica['tj_rj'].execute,
			'tj_rn': tribunalDeJustica['tj_rn'].execute,
			'tj_ro': tribunalDeJustica['tj_ro'].execute,
			'tj_rr': tribunalDeJustica['tj_rr'].execute,
			'tj_rs': tribunalDeJustica['tj_rs'].execute,
			'tj_se': tribunalDeJustica['tj_se'].execute,
			'tj_sp': tribunalDeJustica['tj_sp'].execute,
			'tj_to': tribunalDeJustica['tj_to'].execute,
			'tre_sp': tribunalDeJustica['tre_sp'].execute,
	},
	'tribunal_superior': {
			'tst': tribunalSuperior['tst'].execute,
			'tse': tribunalSuperior['tse'].execute,
	},
	'unitfour': {
			'unitfour_cnpj': unitfour['unitfour_cnpj'].execute,
			'unitfour_cpf': unitfour['unitfour_cpf'].execute,
	},
	'usa_criminal': {
			'dockets_justia': usaCriminal['dockets_justia'].execute,
			'interpol': usaCriminal['interpol'].execute,
			'linkedin': usaCriminal['linkedin'].execute,
	},
};

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];
	const resource = this.getNodeParameter('resource', 0) as RocketType['resource'];
	const operation = this.getNodeParameter('operation', 0) as RocketType['operation'];
	let responseData: IDataObject | IDataObject[];
	const resourceHandlers = operationHandlers[resource];
	const operationHandler = resourceHandlers?.[operation];

	if (!operationHandler) {
		throw new NodeOperationError(
			this.getNode(),
			`The operation "${operation}" is not supported for resource "${resource}"!`,
		);
	}

	for (let i = 0; i < items.length; i++) {
		try {
			responseData = await operationHandler.call(this, i);

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			returnData.push(...executionData);
		} catch (error) {
			if (this.continueOnFail()) {
				const executionErrorData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray({ error: (error as Error).message }),
					{ itemData: { item: i } },
				);
				returnData.push(...executionErrorData);
				continue;
			}
			throw new NodeApiError(this.getNode(), error as JsonObject);
		}
	}

	return [returnData];
}
