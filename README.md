# n8n-nodes-rocket

Node comunitário para o [n8n](https://n8n.io) que integra o **Rocket API** da CMSW — uma plataforma de consulta a provedores de dados brasileiros e internacionais (bureau de crédito, validação de documentos, dados veiculares, telefonia, SINTEGRA, e muito mais).

---

## Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
  - [Instalação via n8n Community Nodes](#instalação-via-n8n-community-nodes)
  - [Instalação Manual](#instalação-manual)
  - [Instalação via Docker](#instalação-via-docker)
- [Autenticação — Como obter a API Key](#autenticação--como-obter-a-api-key)
- [Configuração da Credencial](#configuração-da-credencial)
- [Como Usar o Node Rocket](#como-usar-o-node-rocket)
  - [Parâmetros Comuns](#parâmetros-comuns)
  - [Fluxo de Execução](#fluxo-de-execução)
- [Recursos (Resources) Disponíveis](#recursos-resources-disponíveis)
- [Exemplos de Uso](#exemplos-de-uso)
  - [Exemplo 1: Consulta à Receita Federal](#exemplo-1-consulta-à-receita-federal)
  - [Exemplo 2: Consulta de Score no SERASA](#exemplo-2-consulta-de-score-no-serasa)
  - [Exemplo 3: Consulta Veicular no DENATRAN](#exemplo-3-consulta-veicular-no-denatran)
  - [Exemplo 4: Pipeline completo com Webhook](#exemplo-4-pipeline-completo-com-webhook)
- [Versões do Node](#versões-do-node)
- [Arquitetura e Desenvolvimento](#arquitetura-e-desenvolvimento)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Scripts de Geração](#scripts-de-geração)
  - [Build Local](#build-local)
  - [Build via Docker](#build-via-docker)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Suporte](#suporte)
- [Licença](#licença)

---

## Visão Geral

O **n8n-nodes-rocket** conecta o n8n à [Rocket API Cache](https://rocket-api-cache.cmsw.com), um gateway unificado que expõe centenas de provedores de dados através de uma única interface HTTP autenticada por API Key.

### O que você pode fazer com este node:

- **Consultas de crédito e identidade** — SERASA, SPC, Boa Vista, QUOD, Assertiva, Neoway, LexisNexis
- **Dados da Receita Federal** — CPF, CNPJ, situação cadastral, sócios, filiais
- **Consultas veiculares** — Detran, RENAVAM, histórico de multas, débitos IPVA
- **Validação documental** — CNH, RG, certidões, documentos internacionais
- **Dados bancários** — Bradesco, Open Banking, Banco Central, CERC
- **Telefonia e localização** — Alloha, Correios, Prefeituras
- **Dados jurídicos** — Tribunal de Justiça, Tribunal Superior, PEP (Pessoa Politicamente Exposta)
- **Dados internacionais** — USA Criminal, Interpol, Dockets Justia
- **Monitoramento e enriquecimento** — IDwall, BigBoost, Big Data, Brain

---

## Pré-requisitos

| Requisito | Versão Mínima |
|-----------|--------------|
| n8n | `1.0.0` |
| Node.js | `20.x` ou superior |
| Conta CMSW | Ativa com plano que inclua acesso à Rocket API |
| API Key CMSW | Obtida no painel da CMSW |

---

## Instalação

### Instalação via n8n Community Nodes

1. Acesse **Settings → Community Nodes** no painel do n8n
2. Clique em **Install**
3. Informe o nome do pacote: `n8n-nodes-rocket`
4. Confirme a instalação
5. Reinicie o n8n quando solicitado

### Instalação Manual

```bash
# No diretório de dados do n8n (geralmente ~/.n8n)
npm install n8n-nodes-rocket
```

Após a instalação, reinicie o n8n:

```bash
n8n start
```

### Instalação via Docker

Se você usa n8n em Docker, adicione o pacote à imagem ou monte o volume compilado:

**Opção A — Imagem customizada:**

```dockerfile
FROM n8nio/n8n:latest
RUN cd /usr/local/lib/node_modules/n8n && npm install n8n-nodes-rocket
```

**Opção B — Volume compilado (recomendado para ambientes corporativos):**

```bash
# 1. Clone este repositório
git clone https://github.com/CMSW-LLC/n8n-nodes-rocket.git
cd n8n-nodes-rocket

# 2. Configure a API Key no .env
echo "CMSW_API_KEY=sua_chave_aqui" > .env

# 3. Compile e popule o volume Docker
docker compose run --rm build

# 4. No docker-compose.yml do n8n, monte o volume:
#    volumes:
#      - n8n-nodes-rocket-dist:/home/node/.n8n/custom
#      (ou o caminho configurado em N8N_CUSTOM_EXTENSIONS)
```

---

## Autenticação — Como obter a API Key

1. Acesse o portal CMSW: [https://rocket-providers.cmsw.com](https://rocket-providers.cmsw.com)
2. Faça login com sua conta corporativa
3. Navegue até **API Keys → Gerar Nova Chave**
4. Copie a chave gerada (ela não será exibida novamente)
5. Guarde-a de forma segura — ela será inserida na credencial do n8n

> **Importante:** A API Key deve ter permissão para os provedores que deseja consultar. Entre em contato com `contato@cmsw.com` para habilitar recursos adicionais.

---

## Configuração da Credencial

1. No n8n, vá em **Credentials → New Credential**
2. Selecione **Rocket API**
3. Preencha o campo **API Key** com a chave obtida na CMSW
4. Clique em **Test** para verificar a conexão
5. Salve com um nome descritivo (ex: `Rocket API - Produção`)

A autenticação é feita via header HTTP `x-api-key` em todas as requisições.

---

## Como Usar o Node Rocket

### Parâmetros Comuns

Todas as versões do node compartilham os seguintes campos obrigatórios:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **URL Webhook** | String | URL HTTPS onde a **Rocket API** (`rocket-api-cache`) recebe o callback assíncrono — em geral `POST …/n8n/callback`. **Não** use a URL do webhook de **entrada** do mesmo fluxo (ex.: `/webhook/api/cm-rf-cpf`): o motor OLTP postaria o resultado de volta no n8n, **re-disparando** o workflow e gerando várias chamadas a `/provedores/execute-provider`. Se o corpo do item já trouxer `webhookUrl` (ex.: disparo via `/n8n/execute`), o node usa esse valor em preferência ao campo do formulário. |
| **Resource** | Seleção | Grupo do provedor (ex: `SERASA`, `RECEITA_FEDERAL`) |
| **Operation** | Seleção | Operação específica dentro do grupo (ex: `score`, `consulta_cpf`) |

### Fluxo de Execução

O node Rocket opera de forma **assíncrona** por padrão:

```
n8n → Rocket Node → POST /execute-provider → Rocket API
                                                  ↓
n8n ← Webhook Node ← resultado ← Rocket API (callback)
```

1. O node envia a requisição à Rocket API com os parâmetros e a URL do webhook
2. A Rocket API processa a consulta no provedor
3. O resultado é enviado via `POST` para a URL do webhook informada
4. O nó Webhook no n8n recebe e processa a resposta

**Exemplo de resposta imediata (síncrona):**

```json
{
  "status": "queued",
  "id_consulta": "abc123",
  "mensagem": "Consulta enviada ao provedor. Resultado chegará no webhook."
}
```

**Exemplo de payload recebido no webhook:**

```json
{
  "id_consulta": "abc123",
  "provider": "serasa_score",
  "status": "success",
  "resultado": {
    "cpf": "12345678900",
    "score": 750,
    "faixa": "Bom",
    "risco": "Baixo"
  }
}
```

---

## Recursos (Resources) Disponíveis

O node agrupa os provedores por **Resource** (grupo de integração). Cada resource contém múltiplas **Operations** (provedores individuais).

| Resource | Descrição | Exemplos de Operações |
|----------|-----------|----------------------|
| `ACERTID` | Validação e consulta de identidade | `acertid_net_ws`, `acertid_resumo_ws` |
| `ALLCHECK` | Localização e dados veiculares | `allcheck_localizador`, `allchkcad`, `allchktel`, `allchkveic` |
| `ALLOHA` | Integrações com Alloha Telecom | `alloha_atualizar_status_sydle`, `alloha_conclusao_financeira` |
| `ANDBANK` | Dados bancários ANDBANK | Consultas de conta e perfil |
| `ASSERTIVA` | Bureau de dados Assertiva | Score, localização, vínculos |
| `BANCO_CENTRAL` | Dados do Banco Central do Brasil | Registros, autorizações |
| `BIANCOGRES` | Consultas específicas Biancogres | Dados cadastrais |
| `BIG_DATA` | Enriquecimento de dados | Perfil completo PF/PJ |
| `BIGBOOST` | BigBoost data enrichment | Dados comportamentais |
| `BOA_VISTA` | SCPC Boa Vista | Score, histórico de crédito |
| `BOVESPA` | Dados da B3/Bovespa | Empresas abertas, CVM |
| `BRADESCO` | Integrações Bradesco | Consultas bancárias |
| `BRAIN` | Brain Intelligence Bureau | Antifraude, KYC |
| `CADPOS_BOA_VISTA` | Cadastro Positivo Boa Vista | Histórico positivo de crédito |
| `CAPITALYS` | Dados Capitalys | Perfil financeiro |
| `CCB` | Cédula de Crédito Bancário | Consultas CCB |
| `CERC` | Central de Recebíveis | Garantias, recebíveis |
| `CHECKBEM` | Checkbem validação | Documentos e cadastro |
| `CM_SOFTWARE` | CM Software | Dados internos |
| `CNSEG` | CNSeg — Confederação Nacional de Seguros | Dados de seguros |
| `COFACE` | Coface credit management | Risco de crédito empresarial |
| `CORREIOS` | Correios Brasil | CEP, rastreamento, endereço |
| `CVM` | Comissão de Valores Mobiliários | Empresas registradas, fundos |
| `DEPTO_DE_TRANSITO` | Departamentos de Trânsito | Infrações, pontuação CNH |
| `ESFERA_5` | Esfera 5 analytics | Dados de comportamento |
| `EUROPA` | Dados europeus | Consultas internacionais |
| `FEDERAL` | Dados Federais | Processos, certidões federais |
| `IDWALL` | IDwall KYC | Validação de identidade, antifraude |
| `INOVAMIND` | InovaMind | Dados de inovação |
| `JUNTAS_COMERCIAIS` | Juntas Comerciais Estaduais | Dados empresariais, CNPJ |
| `LEXIS_NEXIS` | LexisNexis Risk Solutions | Compliance, PEP, sanções |
| `MINERVA` | Minerva analytics | Dados analíticos |
| `NEOWAY` | Neoway data platform | Big data, enriquecimento PF/PJ |
| `NOVA_VIDA` | Nova Vida | Dados específicos |
| `OPENBANKING` | Open Banking Brasil | Dados financeiros compartilhados |
| `OSAS` | OSAS | Dados operacionais |
| `PAGTUR` | PagTur pagamentos e turismo | Dados de turismo e pagamento |
| `PEP` | Pessoa Politicamente Exposta | Listas PEP nacionais e internacionais |
| `POLICIA` | Dados Policiais | Antecedentes, ocorrências |
| `POLOCRED` | PoloCred | Consultas de crédito |
| `PREFEITURAS` | Prefeituras Municipais | IPTU, dívida ativa, alvará |
| `PROMOBANK` | PromoBank | Dados bancários e financeiros |
| `QUOD` | QUOD bureau de crédito | Score, histórico, cadastro positivo |
| `RECEITA_FEDERAL` | Receita Federal do Brasil | CPF, CNPJ, situação cadastral, QSA |
| `RESOLV` | Resolv | Recuperação de crédito |
| `RPA` | RPA automação | Dados de automação |
| `SECR_DA_FAZENDA` | Secretarias da Fazenda | Dívida ativa estadual, SEFAZ |
| `SERASA` | Serasa Experian | Score, dívidas, histórico de crédito |
| `SERVICOS` | Serviços gerais | Utilitários e serviços |
| `SINTEGRA` | SINTEGRA | Situação tributária estadual, ICMS |
| `SPC` | SPC Brasil | Score, negativações, histórico |
| `TELEFONIA` | Dados de Telefonia | Portabilidade, linha, operadora |
| `TERRA` | Terra dados | Dados geoespaciais e cadastrais |
| `TRIBUNAL_DE_JUSTICA` | TJ Estaduais | Processos judiciais cíveis e criminais |
| `TRIBUNAL_SUPERIOR` | Tribunais Superiores | STJ, STF, TST, TRF |
| `UNITFOUR` | Unit Four | Dados analíticos |
| `USA_CRIMINAL` | Dados criminais EUA | `interpol`, `dockets_justia`, `linkedin` |

> **Total:** 57 grupos de recursos com centenas de operações individuais.

---

## Exemplos de Uso

### Exemplo 1: Consulta à Receita Federal

**Objetivo:** Validar um CNPJ e obter dados cadastrais da empresa.

**Configuração do Node Rocket:**
- Resource: `RECEITA_FEDERAL`
- Operation: `receita_federal_cnpj` (ou a operação disponível para CNPJ)
- URL Webhook: `{{ $node["Webhook"].json["webhookUrl"] }}`
- CNPJ: `{{ $json["cnpj"] }}`

**Workflow sugerido:**
```
[Trigger] → [Rocket: Consulta CNPJ] → [Wait/Webhook] → [IF: status=success] → [Processar dados]
```

### Exemplo 2: Consulta de Score no SERASA

**Objetivo:** Obter o score de crédito de um CPF.

**Configuração do Node Rocket:**
- Resource: `SERASA`
- Operation: `serasa_score` (ou equivalente)
- URL Webhook: `https://meu-n8n.empresa.com.br/webhook/serasa-callback`
- CPF: `{{ $json["cpf"] }}`

**Resultado esperado no webhook:**
```json
{
  "provider": "serasa_score",
  "status": "success",
  "resultado": {
    "score": 680,
    "faixa": "Regular",
    "probabilidade_inadimplencia": "12%"
  }
}
```

### Exemplo 3: Consulta Veicular no DENATRAN

**Objetivo:** Verificar débitos e histórico de um veículo por placa.

**Configuração do Node Rocket:**
- Resource: `DEPTO_DE_TRANSITO`
- Operation: selecione a operação de consulta por placa
- Placa: `{{ $json["placa"] }}`
- URL Webhook: `{{ $vars.webhookUrl }}`

### Exemplo 4: Pipeline completo com Webhook

```
[Form Trigger]
    │ CPF informado
    ▼
[Rocket Node]
    │ Resource: SERASA
    │ Operation: score
    │ webhookUrl: https://n8n.empresa.com/webhook/resultado
    ▼
[Respond to Form] ← "Consulta em processamento..."

(em paralelo, quando chega o resultado:)

[Webhook: /resultado]
    ▼
[IF: score >= 600]
    ├─ Sim → [Aprovar cadastro] → [Enviar e-mail aprovação]
    └─ Não → [Rejeitar cadastro] → [Enviar e-mail rejeição]
```

---

## Versões do Node

Atualmente, o node disponibiliza a versão **v1**:

| Versão | Estilo | Características |
|--------|--------|-----------------|
| **v1** | Programático | Lista plana com provedores e operações geradas automaticamente a partir da API Rocket. |

> A estrutura foi simplificada para manter uma única versão ativa no pacote e reduzir manutenção de código duplicado.

---

## Arquitetura e Desenvolvimento

### Estrutura do Projeto

```
n8n-nodes-rocket/
├── credentials/
│   └── RocketApi.credentials.ts       # Definição da credencial (API Key)
├── nodes/
│   └── Rocket/
│       ├── Rocket.node.ts             # Nó principal (VersionedNodeType)
│       ├── rocket.svg                 # Ícone (tema claro)
│       ├── rocket-dark.svg            # Ícone (tema escuro)
│       └── v1/
│           ├── RocketV1.version.ts    # Implementação v1
│           ├── GenericFunctions.ts    # Cliente HTTP da Rocket API
│           ├── versionDescription.ts  # ⚙️ GERADO: descrição da versão
│           └── actions/
│               ├── index.ts           # ⚙️ GERADO: mapeamento dos recursos
│               └── <resource>/        # ⚙️ GERADO: pasta por grupo
│                   ├── index.ts
│                   └── *.operation.ts
├── scripts/
│   ├── factory-providers.ts           # Busca list-providers.json da API
│   ├── factory-group-providers.ts     # Busca list-groups-providers.json da API
│   ├── factory-providers-v1.ts        # Gera código v1
│   ├── factory-string-utils.ts        # Utilitários de string (toTitleCase, toCamelCase)
│   └── providers-types.ts             # Tipos TypeScript para provedores
├── Dockerfile                         # Build multi-stage
├── docker-compose.yml                 # Ambiente de build Docker
├── package.json
└── tsconfig.json
```

> Arquivos marcados com ⚙️ **GERADO** são criados automaticamente pelos scripts de factory. **Não editar manualmente.**

### Scripts de Geração

Os arquivos TypeScript do node são **gerados automaticamente** a partir dos dados da API Rocket. Os scripts sempre recriam os arquivos para garantir que estão atualizados:

```bash
# 1. Buscar provedores da API (sempre recria list-providers.json)
npm run generate:providers

# 2. Buscar grupos de provedores (sempre recria list-groups-providers.json)
npm run generate:group-providers

# 3. Gerar código v1
npm run generate:providers-v1

```

O script `npm run build` executa todos os geradores automaticamente via `prebuild`:

```bash
npm run build
# Equivale a:
# npm run generate:providers
# npm run generate:group-providers
# npm run generate:providers-v1
# n8n-node build
```

**Variável de ambiente necessária para os geradores:**

```bash
CMSW_API_KEY=sua_chave_aqui npm run build
```

### Build Local

```bash
# Pré-requisitos: Node.js 20+, npm

# 1. Instalar dependências
npm install

# 2. Configurar API Key
cp .env.example .env
# Editar .env com CMSW_API_KEY=sua_chave

# 3. Build completo (gera providers + compila TypeScript)
npm run build

# 4. Verificar lint
npm run lint

# 5. Assistir mudanças durante desenvolvimento
npm run build:watch
```

### Build via Docker

```bash
# Build e geração em container isolado (não requer Node.js no host)
docker compose run --rm build

# Os artefatos ficam no volume Docker: n8n-nodes-rocket-dist
# Montar esse volume em N8N_CUSTOM_EXTENSIONS no container do n8n
```

---

## Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `CMSW_API_KEY` | **Sim** (build) | Chave de acesso à Rocket API. Necessária durante `npm run build` para baixar a lista de provedores. |
| `N8N_CUSTOM_EXTENSIONS` | Não | Caminho onde o n8n carrega nodes customizados. Padrão: `/home/node/.n8n/custom` |

Crie um arquivo `.env` na raiz do projeto (nunca commitar):

```env
CMSW_API_KEY=sua_chave_rocket_api_aqui
```

---

## Suporte

- **Documentação da Rocket API:** [https://rocket-providers.cmsw.com/docs/n8n-nodes-rocket](https://rocket-providers.cmsw.com/docs/n8n-nodes-rocket)
- **Portal CMSW:** [https://rocket-providers.cmsw.com](https://rocket-providers.cmsw.com)
- **E-mail suporte:** contato@cmsw.com
- **Issues:** Abra uma issue neste repositório para bugs ou solicitações de features

### Diagnóstico de Problemas

**Node não aparece no n8n:**
```bash
# Verificar se o volume está montado corretamente
docker exec n8n sh /custom-nodes-rocket/verify-n8n-mount.sh
```

**Erro de autenticação (401):**
- Verificar se a `CMSW_API_KEY` está correta na credencial do n8n
- Verificar se a chave tem permissão para o provedor consultado

**Webhook não recebe resposta:**
- Confirmar que a URL do webhook é pública e acessível pela internet
- Verificar se o nó Webhook no n8n está ativo

---

## Licença

[MIT](LICENSE) — CMSW Tecnologia
