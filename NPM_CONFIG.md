# Publicação npm — `n8n-nodes-rocket`

## Corrigir erro `npm ci` (package-lock dessincronizado)

No **servidor** (`vm-rocket-n8n`), na branch `main`:

```bash
cd /caminho/para/n8n-nodes-rocket
git checkout main
git pull origin main

# Node 22+ com npm 11 grava todas as optional deps no lock (obrigatório para npm ci no CI)
node -v    # v22 ou v24
npm -v     # npm 11.x

rm -rf node_modules
npm install --package-lock-only --ignore-scripts

# Teste igual ao CI (Node 24 = mesmo npm ci estrito do GitHub lts)
npm ci
npm run lint
npm run build

git add package-lock.json
git commit -m "fix: sync package-lock.json for npm ci in CI"
git push origin main
```

Depois, nova versão:

```bash
npm run release
# ex.: 1.0.4
```

## Fluxo

1. Local/servidor: `npm run release` → tag (não publica no npm)
2. GitHub Actions **Publish** → `npm ci` + `npm publish` com provenance

## npm — autenticação

Erro `ENEEDAUTH` = o GitHub Actions **não tem** `NPM_TOKEN` configurado (ou o token está inválido).

### Primeira publicação (pacote removido / 0 packages)

**Trusted Publisher não serve aqui** — ele só existe nas configurações de um pacote **já criado** no npm. Para recriar `n8n-nodes-rocket` do zero, use **obrigatoriamente** o secret `NPM_TOKEN`:

1. Entrar em [npmjs.com](https://www.npmjs.com/) com a conta/org que vai **criar** o pacote (ex.: usuário CMSW ou org `@cmsw`).
2. **Access Tokens** → **Generate New Token** → **Granular Access Token**.
3. Permissions:
   - **Packages and scopes** → **Read and write**
   - Se o pacote ainda não existe: marque **All packages** ou crie permissão para o nome `n8n-nodes-rocket` (o primeiro `npm publish` registra o pacote).
4. Copiar o token (`npm_...`) — só aparece uma vez.
5. GitHub → [CMSW-LLC/n8n-nodes-rocket](https://github.com/CMSW-LLC/n8n-nodes-rocket) → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
6. Nome exato: **`NPM_TOKEN`** | Valor: colar o token (sem espaços).
7. **Actions** → workflow **Publish** da tag → **Re-run all jobs**.

### Secret “configurado” mas o log mostra `NPM_TOKEN:` vazio

Isso significa que o **GitHub não repassou** o secret para o job (não é problema do npm).

| Causa | O que fazer |
|--------|-------------|
| Secret na **organização** CMSW-LLC | Org → **Settings** → **Secrets** → `NPM_TOKEN` → **Repository access** → incluir **`n8n-nodes-rocket`** |
| Secret em **Environment** | No `publish.yml`, descomente `environment: production` (ou o nome do seu environment) |
| Criado em **Variables** em vez de Secrets | Mover para **Repository secrets** (Variables não entram em `secrets.NPM_TOKEN`) |
| Tag no **fork** | Secrets do repo oficial não vão para fork — publicar tag em `CMSW-LLC/n8n-nodes-rocket` ou criar `NPM_TOKEN` no fork |
| Repo errado | Confirmar em **Settings → Secrets** que você está em `CMSW-LLC/n8n-nodes-rocket` |

No log do job **Diagnose GitHub context**, confira `repository=CMSW-LLC/n8n-nodes-rocket`.

### Depois que o pacote existir no npm (opcional)

Aí sim pode configurar **Trusted publishing** no pacote e, se quiser, remover `NPM_TOKEN` do GitHub (OIDC). Até lá, mantenha o token.

| Campo Trusted Publisher | Valor |
|-------------------------|--------|
| Organization or user | `CMSW-LLC` |
| Repository | `n8n-nodes-rocket` |
| Workflow filename | `publish.yml` |

## Tags

O workflow dispara em tags `1.0.0`, `1.0.1` (sem prefixo `v`).
