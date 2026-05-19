#!/bin/sh
# Script de diagnóstico - verifica se o n8n consegue enxergar os nodes
# Execute: docker exec n8n sh /custom-nodes-rocket/verify-n8n-mount.sh

EXT_PATH="${N8N_CUSTOM_EXTENSIONS:-/custom-nodes-rocket}"
echo "==> Verificando N8N_CUSTOM_EXTENSIONS: $EXT_PATH"
echo

if [ ! -d "$EXT_PATH" ]; then
    echo "ERRO: Diretório $EXT_PATH não existe (volume não montado?)"
    exit 1
fi
echo "OK: Diretório existe"

if [ ! -f "$EXT_PATH/package.json" ]; then
    echo "ERRO: package.json não encontrado em $EXT_PATH"
    exit 1
fi
echo "OK: package.json encontrado"

if [ ! -d "$EXT_PATH/dist" ]; then
    echo "ERRO: dist/ não existe - RODE O BUILD no host: npm run build (ou deploy.sh)"
    exit 1
fi
echo "OK: dist/ existe"

NODE_COUNT=$(find "$EXT_PATH/dist/nodes" -name "*.node.js" 2>/dev/null | wc -l)
if [ "$NODE_COUNT" -eq 0 ]; then
    echo "ERRO: Nenhum arquivo .node.js em dist/nodes - build incompleto"
    exit 1
fi
echo "OK: $NODE_COUNT node(s) encontrado(s)"
find "$EXT_PATH/dist" -name "*.node.js" 2>/dev/null | while read f; do ls -la "$f"; done

echo
echo "==> Permissões:"
ls -la "$EXT_PATH"
echo
echo "Se tudo OK acima, reinicie o n8n: docker compose restart n8n"
