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

**Trusted Publisher** em [npmjs.com](https://www.npmjs.com/) → pacote `n8n-nodes-rocket`:

| Campo | Valor |
|--------|--------|
| Publisher | GitHub Actions |
| Organization or user | `CMSW-LLC` |
| Repository | `n8n-nodes-rocket` |
| Workflow filename | `publish.yml` |

**Ou** secret `NPM_TOKEN` no repo GitHub `CMSW-LLC/n8n-nodes-rocket`.

## Tags

O workflow dispara em tags `1.0.0`, `1.0.1` (sem prefixo `v`).
