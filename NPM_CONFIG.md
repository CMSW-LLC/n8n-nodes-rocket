# Passo a passo para publicar `n8n-nodes-rocket` no npm

Com o pacote excluído, você republica do zero. O fluxo oficial do n8n é: **release local → tag no GitHub → GitHub Actions publica no npm com provenance**.

---

## Parte 1 — Pré-requisitos (uma vez)

### 1. Conta npm com acesso ao nome do pacote

- Entre em [https://www.npmjs.com/](https://www.npmjs.com/) com a conta que vai publicar (ex.: org/usuário CMSW).
- O nome `n8n-nodes-rocket` precisa estar **livre** (após exclusão pode haver bloqueio temporário do nome — se der erro, espere algumas horas ou use suporte npm).

### 2. Repositório GitHub pronto

- Repo público: `https://github.com/CMSW-LLC/n8n-nodes-rocket`
- Workflow em `.github/workflows/publish.yml` (já existe no projeto)
- Branch padrão: `main` (o `n8n-node release` exige branch `main`)

### 3. Corrigir o remote do Git (segurança)

Se o remote ainda tiver token na URL, remova:

```bash
git remote set-url origin https://github.com/CMSW-LLC/n8n-nodes-rocket.git
```

Autentique com SSH ou `gh auth login` — não coloque token na URL.

### 4. Trusted Publisher no npm

No npm → pacote (na **primeira** publicação o pacote ainda não existe; configure **depois** da primeira publicação **ou** crie o pacote manualmente — veja nota abaixo).

**Após a primeira publicação** (ou se o npm permitir configurar antes na conta):


| Campo                | Valor              |
| -------------------- | ------------------ |
| Publisher            | GitHub Actions     |
| Organization or user | `CMSW-LLC`         |
| Repository           | `n8n-nodes-rocket` |
| Workflow filename    | `publish.yml`      |
| Environment name     | *(vazio)*          |


### 5. Secret no GitHub (escolha A ou B)

**Opção A — Só Trusted Publisher (recomendado)**  

- Não precisa de `NPM_TOKEN`.

**Opção B — Token no GitHub**  

- npm → **Access Tokens** → **Granular Access Token** → permissão **Read and write** no pacote `n8n-nodes-rocket`
- GitHub → `CMSW-LLC/n8n-nodes-rocket` → **Settings** → **Secrets and variables** → **Actions** → secret `NPM_TOKEN`

### 6. Conferir `package.json`

Já deve estar assim (confira antes de publicar):

- `"name": "n8n-nodes-rocket"`
- `"keywords": ["n8n-community-node-package"]`
- `"repository.url": "https://github.com/CMSW-LLC/n8n-nodes-rocket.git"`
- Bloco `"n8n"` com `credentials` e `nodes`
- `"license": "MIT"`

Para **primeira** publicação após exclusão, use versão inicial, por exemplo `1.0.0`:

```json
"version": "1.0.0"
```

---

## Parte 2 — Testar localmente (antes de publicar)

No diretório do projeto:

```bash
cd /home/robsonsilva/projetos/n8n-oficial/n8n-nodes-rocket

npm ci
npm run lint
npm run build
```

Se `lint` e `build` passarem, o CI tem boa chance de passar também (o CI não roda `generate`; usa os arquivos já commitados em `nodes/`).

Opcional — testar no n8n local:

```bash
npm run dev
```

---

## Parte 3 — Commit e push do código

```bash
git status
git add .
git commit -m "chore: prepare release"
git push origin main
```

Tudo que o CI precisa (workflow, `package.json`, código em `nodes/`) deve estar no GitHub.

---

## Parte 4 — Release local (cria tag; não publica no npm)

```bash
npm run release
```

O comando vai:

1. Perguntar a versão (ex.: `1.0.0` na primeira vez)
2. Rodar lint e build
3. Atualizar changelog, commit, tag e push
4. Mostrar a mensagem *"The node was not published to NPM"* — **isso é normal**

A tag deve seguir o padrão do workflow: `1.0.0` (não `v1.0.0`, a menos que você altere o workflow).

---

## Parte 5 — GitHub Actions publica no npm

1. Abra: `https://github.com/CMSW-LLC/n8n-nodes-rocket/actions`
2. Deve aparecer o workflow **Publish** disparado pela tag
3. Aguarde o job **Publish to npm** terminar com sucesso

No CI acontece: `lint` → `build` → `npm publish` com **provenance**.

Se falhar, abra o passo **Release** e veja o erro real (401 = token/Trusted Publisher; 403 = versão já existe; lint/build = erro antes do publish).

---

## Parte 6 — Primeira publicação e Trusted Publisher

**Cenário comum:** na primeira vez o pacote não existe no npm.

1. Deixe o workflow publicar (com `NPM_TOKEN` **ou** Trusted Publisher já configurado na conta npm para publicação inicial).
2. Depois que `1.0.0` aparecer em [https://www.npmjs.com/package/n8n-nodes-rocket](https://www.npmjs.com/package/n8n-nodes-rocket), configure o **Trusted Publisher** (tabela da Parte 1).
3. Nas próximas versões você pode remover o `NPM_TOKEN` e usar só OIDC, se quiser.

Se o Trusted Publisher for obrigatório **antes** da primeira publicação e o workflow falhar na primeira vez, publique uma vez com **NPM_TOKEN** no secret e depois adicione o Trusted Publisher.

---

## Parte 7 — Validar publicação

- [https://www.npmjs.com/package/n8n-nodes-rocket](https://www.npmjs.com/package/n8n-nodes-rocket) — versão e README
- Na versão, conferir **provenance** / link para o repositório GitHub
- Instalar teste: `npm install n8n-nodes-rocket`

---

## Parte 8 — Próximas versões (rotina)

```bash
# 1. Alterações commitadas em main
git push origin main

# 2. Release (ex.: 1.0.1, 1.1.0)
npm run release

# 3. Actions publica automaticamente na tag
```

---

## Parte 9 — Verificação no n8n (opcional)

Para node **verificado** no [Creator Portal](https://creators.n8n.io/nodes):

- Publicado via GitHub Actions com provenance
- README em inglês (requisito de verificação)
- Sem dependências de runtime no `package.json` (só `devDependencies` + `peerDependencies`)

---

## Checklist rápido


| #   | Item                                                                     |
| --- | ------------------------------------------------------------------------ |
| 1   | Conta npm com permissão de publicar                                      |
| 2   | `package.json` com `repository` = `github.com/CMSW-LLC/n8n-nodes-rocket` |
| 3   | Versão definida (ex. `1.0.0`)                                            |
| 4   | `npm run lint` e `npm run build` OK localmente                           |
| 5   | Código + `publish.yml` no GitHub (`main`)                                |
| 6   | Trusted Publisher **ou** `NPM_TOKEN` no repo                             |
| 7   | `npm run release` local → tag enviada                                    |
| 8   | Workflow Actions verde                                                   |
| 9   | Pacote visível no npm                                                    |


---

## O que **não** fazer

- `npm publish` manual na máquina (sem provenance; o n8n não aceita para verificação)
- `npm run release -- --publish` (publica local sem provenance)
- Tags `v1.0.0` com o workflow atual (só dispara `*.*.`* sem `v`)

Se quiser, no **modo Agent** posso ajudar a ajustar versão inicial, workflow para tags `v`*, ou revisar um log de erro específico do Actions.