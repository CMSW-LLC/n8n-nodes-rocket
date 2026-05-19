/* Arquivo gerado automaticamente por scripts/factory-providers-v1.ts - não editar manualmente */

import type { AllEntities } from 'n8n-workflow';

type NodeMap = {
	'acertid': 'acertid_net_ws' | 'acertid_resumo_ws';
	'allcheck': 'allcheck_localizador' | 'allchkcad' | 'allchktel' | 'allchkveic';
	'assertiva': 'assertiva' | 'assertiva_cnpj' | 'assertiva_cnpj_tarifado' | 'assertiva_tarifado';
	'banco_central': 'bacen_nome_cpf' | 'bcb_cotacao_dolar' | 'bcb';
	'big_data': 'bigdata_relacionamento' | 'bigdata_dados_pj' | 'bigdata_ind_ativ_pj' | 'bigdata_dados_pessoas' | 'bigdata_dados_raiz';
	'bigboost': 'bigboost';
	'boa_vista': 'boa_vista_acerta_pos_essencial' | 'boa_vista_define_risco_positivo' | 'boavista_gold' | 'boa_vista_gerenciamento' | 'boa_vista_modular_pf_cadastral' | 'boavista_consta_debito';
	'bovespa': 'bovespa_balanco_financeiro';
	'cadpos_boa_vista': 'boa_vista_score_positivo_pf';
	'capitalys': 'api_captalys' | 'webhook_captalys';
	'ccb': 'ccb_relatorio';
	'cerc': 'avaliacoes_dados_dfe' | 'avaliacoes_dados_partes' | 'aval_direitos_creditorios' | 'avaliacoes_ind_consistencia' | 'consulta_aval_eventos' | 'direitos_creditorios_lote' | 'lotes_avaliacoes';
	'checkbem': 'checkbem';
	'cm_software': 'base_dados_contexto' | 'clearsale' | 'cvc_pf' | 'cvc_pj' | 'cnh_extracao_dados' | 'ip2location' | 'cvc_assessment' | 'apigateway_sms' | 'cnh_digito';
	'cnseg': 'cnseg_placa_ws';
	'coface': 'cofanet';
	'correios': 'correios' | 'ceplivre' | 'correios_logradouro';
	'cvm': 'afast_determinacao_judicial' | 'suspensao_cvm' | 'cvm_cadastro' | 'cvm_processos' | 'deliberacoes_cvm' | 'identificacao_processo_cvm';
	'depto_de_transito': 'detran_amapa' | 'detran_pe' | 'detran_rj_infracoes' | 'detran_sc_cnh' | 'detran_sp_codev' | 'detran_ma_cnh' | 'detran_rn';
	'europa': 'procurados_europol' | 'procurados_fbi';
	'federal': 'acordos_leniencia' | 'ancord' | 'ceaf' | 'cepim' | 'cidade_fronteiricas' | 'cnep' | 'consulta_obito_rj' | 'trabalho_escravo' | 'ibama' | 'ibama_cert_negativa_debt' | 'ibama_embargos' | 'ibge_municipios' | 'ieptb_nacional' | 'ieptb' | 'portal_transparencia' | 'portal_transparencia_bas' | 'portal_transparencia_pf_rpfc' | 'portal_transparencia_bf' | 'portal_transparencia_ceis' | 'portal_transparencia_pj' | 'registro_br' | 'fgts_empregador' | 'beneficio_seguro_defeso' | 'sinesp_cidadao' | 'suframa' | 'tcu_contas_irregulares';
	'idwall': 'idwall_pep_resp' | 'idwall_doc_copia' | 'idwall_doc_copia_resp' | 'idwall_endereco' | 'idwall_endereco_resp' | 'idwall_midias_n_pf' | 'idwall_midias_n_pf_resp' | 'idwall_midias_n_pj' | 'idwall_midias_n_pj_resp' | 'idwall_pep' | 'idwall_processos_pj' | 'idwall_processos_pj_resp' | 'idwall_processos' | 'idwall_processos_resp';
	'inovamind': 'inovamind_rg_detalhe' | 'inovamind_rg_token' | 'inovamind_cpf_rf' | 'inovamind_rg' | 'inovamind_cnh' | 'inovamind_cnh_detalhe' | 'inovamind_cnh_token' | 'inovamind_doadores_campanha_pf_detalhe' | 'inovamind_doadores_campanha_pf_token' | 'inovamind_doadores_campanha_pj_detalhe' | 'inovamind_doadores_campanha_pj_token' | 'inovamind_endereco' | 'inovamind_endereco_detalhe' | 'inovamind_endereco_token' | 'inovamind_nome_mae' | 'inovamind_nome_mae_detalhe' | 'inovamind_nome_mae_token' | 'inovamind_pep' | 'inovamind_pep_detalhe' | 'inovamind_pep_token' | 'inovamind_consulta_assistencia_social' | 'inovamind_doadores_campanha_pf' | 'inovamind_doadores_campanha_pj';
	'juntas_comerciais': 'jucesp_simples';
	'lexis_nexis': 'lexis_nexis_search';
	'neoway': 'neoway_cnpj';
	'nova_vida': 'nvti_ws023' | 'novavida_inadimplencia_pf' | 'novavida_inadimplencia_pj' | 'novavida_nvcheck' | 'nvti_ws009_tarifado' | 'nv_pessoas_empr_tk_tarifado' | 'nv_sit_cad_tk_tarifado' | 'nvti_ws009' | 'nvti_ws012' | 'nvti_ws016';
	'osas': 'tipificacao_base64_osas';
	'pagtur': 'pagtur_api';
	'pep': 'coaf_pep' | 'crsfn' | 'csnu' | 'csnu_ue' | 'doadores_fornecedores_politicas' | 'dowjones' | 'dowjones_resposta' | 'dowjones_token' | 'indicio_fraude_clearsale' | 'ofac_consolidated_list' | 'ofac_sanctions_list' | 'poder360_detalhe' | 'poder360_lista' | 'sancoes_banco_mundial' | 'tse_dados_eleitorais' | 'accuity';
	'policia': 'policia_ac' | 'policia_al' | 'policia_ba' | 'policia_ce' | 'policia_es' | 'policia_federal' | 'policia_go' | 'policia_mg' | 'policia_ms' | 'policia_pa' | 'policia_pe' | 'policia_rj' | 'policia_rr' | 'policia_rs' | 'policia_se' | 'policia_sp';
	'prefeituras': 'prefeitura_bh' | 'prefeitura_cuiaba' | 'prefeitura_brasilia' | 'prefeitura_ctba' | 'prefeitura_sp' | 'prefeitura_riojaneiro' | 'prefeitura_goiania' | 'pref_porto_alegre' | 'prefeitura_porto_velho';
	'promobank': 'promobank';
	'quod': 'quod_pf' | 'quod_faturamento_presumido' | 'quod_pj' | 'quod_renda_presumida_pf';
	'receita_federal': 'datavalid_biometria_face' | 'serpro_dv_face_tarifado' | 'serpro_dv_face_tarifado_v4' | 'pgfn_da' | 'serpro_datavalid' | 'portal_empreendedor' | 'consulta_rf_qsa' | 'simples_nacional' | 'serpro_cnpj' | 'serpro_cnpj_tarifado' | 'serpro_cpf' | 'serpro_cpf_tarifado' | 'rf_dau' | 'rf_dau_cnpj' | 'cons_qsa' | 'rf_irpf' | 'rf_cnpj' | 'rf_cpf' | 'simples_nacional_da';
	'resolv': 'cetelem_resolv_obito';
	'secr_da_fazenda': 'cadesp_icms';
	'serasa': 'serasa_crednet_light' | 'serasa_crednet_top' | 'serasa_cb' | 'SERASA_IP20' | 'serasa_avancado_pj' | 'serasa_base_inconsistencia' | 'b49c_concentre' | 'serasa_confie' | 'serasa_b49c' | 'serasa_intermediario_pj' | 'verify_id_pf';
	'sintegra': 'sintegra_sp' | 'sintegra_ac' | 'sintegra_al' | 'sintegra_ap' | 'sintegra_am' | 'sintegra_ba' | 'sintegra_ce' | 'sintegra_df' | 'sintegra_es' | 'sintegra_go' | 'sintegra_ma' | 'sintegra_mt' | 'sintegra_ms' | 'sintegra_mg' | 'sintegra_pa' | 'sintegra_pb' | 'sintegra_pr' | 'sintegra_pe' | 'sintegra_pi' | 'sintegra_rj' | 'sintegra_rn' | 'sintegra_rs' | 'sintegra_ro' | 'sintegra_rr' | 'sintegra_sc' | 'sintegra_se' | 'sintegra_to' | 'sintegra_ccc';
	'spc': 'jbcred_spc' | 'scpc_acerta_pf' | 'spc_consulta_completa' | 'spc_inclusao_exclusao' | 'spc_mix_j' | 'spc_mix_f';
	'telefonia': 'imei' | 'telefonica';
	'tribunal_de_justica': 'bnmp' | 'processos_cnj' | 'cnj_processos' | 'cnj_improbidade' | 'cvm_inqueritos' | 'escavador' | 'processos_jusbrasil' | 'stf' | 'stj' | 'trf_1' | 'trf_2' | 'trf_3' | 'trf_4regiao' | 'trf_5regiao' | 'trf_6regiao' | 'tj_mg' | 'tj_pe_unificada' | 'tj_sc' | 'tj_ac' | 'tj_al' | 'tj_am' | 'tj_ap' | 'tj_ba' | 'tj_ce' | 'tj_df' | 'tj_es' | 'tj_go' | 'tj_ma' | 'tj_ms' | 'tj_mt' | 'tj_pa' | 'tj_pb' | 'tj_pe' | 'tj_pi' | 'tj_pr' | 'tj_rj' | 'tj_rn' | 'tj_ro' | 'tj_rr' | 'tj_rs' | 'tj_se' | 'tj_sp' | 'tj_to' | 'tre_sp';
	'tribunal_superior': 'tst' | 'tse';
	'unitfour': 'unitfour_cnpj' | 'unitfour_cpf';
	'usa_criminal': 'dockets_justia' | 'interpol' | 'linkedin';
};

export type RocketType = AllEntities<NodeMap>;
