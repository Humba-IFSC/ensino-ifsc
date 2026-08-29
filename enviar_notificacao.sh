#!/usr/bin/env bash
# Atalho para Notificação por E-mail (Mala Direta) PSJ0111
# Remetente padrão: hloliveira@gmail.com

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PYTHON_SCRIPT="$SCRIPT_DIR/.agents/skills/notificador-atualizacoes-psj0111/scripts/notificar_atualizacao.py"

python3 "$PYTHON_SCRIPT" --send "$@"
