/**
 * Textos de ajuda (INodeProperties.description) partilhados entre v1, v2 e v3.
 * Os scripts factory importam este ficheiro para manter a mesma redação no código gerado.
 */

/** Campo URL Webhook — usado em v1, v2 (gerado) e v3 (common.description). */
export const WEBHOOK_URL_DESCRIPTION =
	'Endereço HTTPS para onde o Rocket envia o resultado da consulta ao provedor quando a operação conclui. Deve ser um URL publicamente acessível (por exemplo, o URL de um nó Webhook no n8n).';

/** Parâmetro Resource (grupo de integração). */
export const RESOURCE_DESCRIPTION =
	'Grupo ou categoria de integração. A escolha determina quais operações e parâmetros ficam disponíveis abaixo.';

/** Parâmetro Operation (v2/v3). */
export const OPERATION_DESCRIPTION =
	'Operação concreta a executar no provedor, dentro do grupo selecionado em Resource.';

/** Parâmetro Provedor (v1 serviceToExecute). */
export const SERVICE_TO_EXECUTE_DESCRIPTION =
	'Provedor de dados a consultar. Apenas os parâmetros necessários para o provedor escolhido são apresentados.';
