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

## npm — autenticação (uma vez)

Erro `ENEEDAUTH` / `need auth` no GitHub Actions = **nenhum método de auth está ativo**. Configure **uma** das opções abaixo.

### Opção A — Trusted Publisher (recomendado)

1. Conta com permissão de **publish** no pacote [n8n-nodes-rocket](https://www.npmjs.com/package/n8n-nodes-rocket).
2. [npmjs.com](https://www.npmjs.com/) → pacote → **Settings** → **Trusted publishing** → **Add publisher**.
3. Preencha **exatamente** (case-sensitive):

| Campo | Valor |
|--------|--------|
| Publisher | GitHub Actions |
| Organization or user | `CMSW-LLC` |
| Repository | `n8n-nodes-rocket` |
| Workflow filename | `publish.yml` |

4. **Não** crie o secret `NPM_TOKEN` no GitHub (senão o OIDC fica desnecessário).
5. Reexecute o workflow (re-run) ou empurre a tag de novo.

Requisito: npm **≥ 11.5.1** no CI (o workflow usa Node 24 e faz upgrade se precisar).

### Opção B — Secret `NPM_TOKEN`

1. [npmjs.com](https://www.npmjs.com/) → **Access Tokens** → **Generate New Token** → **Granular Access Token**.
2. Pacote `n8n-nodes-rocket` → permissão **Read and write**.
3. GitHub → `CMSW-LLC/n8n-nodes-rocket` → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
4. Nome: `NPM_TOKEN` | Valor: o token (começa com `npm_...`).
5. Reexecute o workflow **Publish**.

### Conferir no log do job

- `Using NPM_TOKEN for registry authentication` → Opção B ativa.
- `NPM_TOKEN not set — using OIDC Trusted Publishing` → Opção A; se ainda falhar, o Trusted Publisher no npm não está configurado ou os campos estão errados.

## Tags

O workflow dispara em tags `1.0.0`, `1.0.1` (sem prefixo `v`).
