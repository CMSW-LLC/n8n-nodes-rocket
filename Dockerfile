# Build stage - compila o pacote de community nodes
# Node 22: isolated-vm (via @n8n/node-cli → @n8n/expression-runtime) exige engines >=22.
# python3 + make + g++: node-gyp compila o addon nativo; Alpine não inclui isso por padrão.
FROM node:22-alpine AS builder

RUN apk add --no-cache python3 make g++

WORKDIR /app

ENV PYTHON=/usr/bin/python3

# Copia arquivos de dependências primeiro (melhor cache de layers)
COPY package*.json ./
COPY tsconfig.json ./

# Instala dependências (incluindo devDependencies para o build)
# Usa npm install para tolerar lock file desatualizado; rode 'npm install' localmente para manter sincronizado
RUN npm install

# Copia o resto do código
COPY . .

# Gera providers, verifica erros de código e compila o projeto
RUN npm run build:compile
#RUN npm run release  # cria release com o pacote compilado

# Runtime stage - imagem minimal com apenas os artefatos para o n8n
FROM node:22-alpine AS runtime

WORKDIR /app

# Copia package.json e dist do build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist

# Mantém node_modules vazio - o n8n usa suas próprias dependências (peer de n8n-workflow)
# O pacote será montado em N8N_CUSTOM_EXTENSIONS e carregado pelo n8n em runtime

CMD ["node", "--version"]

# Imagem usada pelo serviço `build` em docker-compose (monta o repo em /app).
# Mesmas ferramentas que o estágio builder: Node 22 + toolchain para isolated-vm.
FROM node:22-alpine AS build-env
RUN apk add --no-cache python3 make g++
ENV PYTHON=/usr/bin/python3
WORKDIR /app
