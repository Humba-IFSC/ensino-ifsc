#!/usr/bin/env python3
"""
Script de Notificação por E-mail (Mala Direta) para PSJ0111 — IFSC
Lê a lista de contatos do Excel Contatos_Mala_Direta.xlsx, detecta
as atualizações recentes no Git e envia (ou pré-visualiza) uma
mensagem curta e direta com os links do portal no GitHub Pages.
"""

import sys
import os
import subprocess
import smtplib
import zipfile
import xml.etree.ElementTree as ET
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

# Raiz do repositório
REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../../'))
EXCEL_PATH = os.path.join(
    REPO_ROOT,
    '2026.2/psj0111/aula07/Contatos_Mala_Direta.xlsx'
)
BASE_URL_PAGES = "https://humba-ifsc.github.io/ensino-ifsc/2026.2/psj0111/"


def extrair_contatos(xlsx_path):
    """Lê os contatos do arquivo Excel XLSX sem dependências externas."""
    if not os.path.exists(xlsx_path):
        raise FileNotFoundError(f"Arquivo de contatos não encontrado: {xlsx_path}")

    contatos = []
    with zipfile.ZipFile(xlsx_path) as z:
        tree = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
        ns = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}

        for row in tree.findall('.//main:row', ns):
            r_idx = int(row.get('r', 0))
            if r_idx < 5:  # Pular cabeçalhos
                continue

            email = None
            categoria = "Discente"
            nome = ""

            for c in row.findall('main:c', ns):
                col = c.get('r', '')
                is_node = c.find('main:is', ns)
                v_node = c.find('main:v', ns)

                val = ""
                if is_node is not None:
                    val = ''.join([t.text for t in is_node.findall('.//main:t', ns) if t.text])
                elif v_node is not None and v_node.text:
                    val = v_node.text

                if col.startswith('B') and val:
                    nome = val
                elif col.startswith('C') and val and '@' in val:
                    email = val.strip()
                elif col.startswith('D') and val:
                    categoria = val.strip()

            if email:
                contatos.append({'nome': nome, 'email': email, 'categoria': categoria})

    return contatos


def obter_arquivos_atualizados(commits_atras=1):
    """Obtém a lista de arquivos alterados no commit mais recente."""
    try:
        cmd = ["git", "diff-tree", "--no-commit-id", "--name-status", "-r", f"HEAD~{commits_atras - 1}" if commits_atras > 1 else "HEAD"]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
        linhas = res.stdout.strip().split('\n')
        
        status_map = {'A': 'Novo arquivo', 'M': 'Atualizado', 'D': 'Removido', 'R': 'Renomeado'}
        arquivos = []
        for l in linhas:
            if not l.strip():
                continue
            partes = l.split('\t')
            if len(partes) >= 2:
                st = status_map.get(partes[0][0], partes[0])
                arq = partes[1]
                # Filtrar arquivos relevantes de psj0111 ou 2026.2
                arquivos.append({'status': st, 'path': arq})
        return arquivos
    except Exception as e:
        return [{'status': 'Atualizado', 'path': 'Arquivos do portal PSJ0111'}]


def gerar_mensagem(arquivos, recado_extra=""):
    """Gera o assunto e os corpos (texto e HTML) da mensagem de forma curta e direta."""
    data_str = datetime.now().strftime("%d/%m/%Y")
    assunto = f"[PSJ0111] Atualização no Portal de Metodologia da Pesquisa ({data_str})"

    # Lista formatada em texto
    lista_txt = "\n".join([f"• [{a['status']}] {a['path']}" for a in arquivos[:15]])
    if len(arquivos) > 15:
        lista_txt += f"\n• ... e mais {len(arquivos) - 15} arquivo(s)."

    corpo_txt = f"""Olá, professores e estudantes de PSJ0111,

O repositório da disciplina de Metodologia da Pesquisa em Educação (2026.2) foi atualizado no GitHub Pages.

📋 Arquivos atualizados / Novidades:
{lista_txt}
{f'\n📢 Nota adicional: {recado_extra}\n' if recado_extra else ''}
🌐 Acesse o portal e os materiais atualizados:
{BASE_URL_PAGES}

Atenciosamente,
Corpo Docente — Prof. Humberto Luz Oliveira, Profª. Joce Mary Mello Giotto e Prof. Volmir Von Dentz
IFSC Câmpus São José
"""

    # Lista formatada em HTML
    lista_html = "".join([f"<li><strong>[{a['status']}]</strong> <code>{a['path']}</code></li>" for a in arquivos[:15]])
    if len(arquivos) > 15:
        lista_html += f"<li><em>... e mais {len(arquivos) - 15} arquivo(s).</em></li>"

    corpo_html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; color: #1e293b; padding: 20px; }}
        .container {{ max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 10px; border: 1px solid #e2e8f0; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }}
        .header {{ border-bottom: 2px solid #10b981; padding-bottom: 12px; margin-bottom: 16px; }}
        .header h2 {{ margin: 0; color: #065f46; font-size: 1.25rem; }}
        .badge {{ background: #ecfdf5; color: #059669; padding: 4px 8px; border-radius: 6px; font-weight: bold; font-size: 0.8rem; display: inline-block; margin-bottom: 8px; }}
        ul {{ background: #f8fafc; border-left: 3px solid #10b981; padding: 12px 12px 12px 28px; border-radius: 0 6px 6px 0; }}
        li {{ margin-bottom: 6px; font-size: 0.9rem; }}
        code {{ background: #e2e8f0; padding: 2px 5px; border-radius: 4px; font-size: 0.85rem; }}
        .btn {{ display: inline-block; background: #10b981; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; margin-top: 14px; text-align: center; }}
        .footer {{ margin-top: 24px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 0.8rem; color: #64748b; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <span class="badge">IFSC São José · 2026.2</span>
            <h2>Metodologia da Pesquisa em Educação (PSJ0111)</h2>
        </div>
        <p>Olá, professores e estudantes,</p>
        <p>Informamos que novos arquivos e conteúdos foram atualizados no repositório e portal da disciplina no <strong>GitHub Pages</strong>.</p>
        
        <p><strong>📋 Arquivos atualizados / Novidades:</strong></p>
        <ul>
            {lista_html}
        </ul>

        {f'<p style="background:#fef3c7; color:#92400e; padding:10px; border-radius:6px;"><strong>📢 Nota:</strong> {recado_extra}</p>' if recado_extra else ''}

        <p style="text-align: center;">
            <a href="{BASE_URL_PAGES}" class="btn">🌐 Acessar Portal no GitHub Pages</a>
        </p>

        <div class="footer">
            <p><strong>Corpo Docente:</strong> Prof. Dr. Humberto Luz Oliveira, Profª. Dra. Joce Mary Mello Giotto e Prof. Dr. Volmir Von Dentz<br>
            Especialização em Educação Ambiental — IFSC Câmpus São José</p>
        </div>
    </div>
</body>
</html>"""

    return assunto, corpo_txt, corpo_html


DEFAULT_SENDER = "hloliveira@gmail.com"

def carregar_env_local():
    """Tenta carregar variáveis de um arquivo .env na raiz do repo se existir."""
    env_file = os.path.join(REPO_ROOT, '.env')
    if os.path.exists(env_file):
        try:
            with open(env_file, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#') and '=' in line:
                        k, v = line.split('=', 1)
                        k = k.strip()
                        v = v.strip().strip("'").strip('"')
                        if k and not os.environ.get(k):
                            os.environ[k] = v
        except Exception:
            pass


def enviar_emails(contatos, assunto, corpo_txt, corpo_html, smtp_host, smtp_port, smtp_user, smtp_pass):
    """Envia os e-mails usando envio CCO (BCC) para preservar privacidade."""
    destinatarios = [c['email'] for c in contatos]

    msg = MIMEMultipart('alternative')
    msg['Subject'] = assunto
    msg['From'] = f"Prof. Humberto Luz Oliveira (PSJ0111 - IFSC) <{smtp_user}>"
    msg['To'] = smtp_user  # O remetente recebe a cópia pública
    # Todos os alunos e professores recebem em cópia oculta (BCC)

    part1 = MIMEText(corpo_txt, 'plain', 'utf-8')
    part2 = MIMEText(corpo_html, 'html', 'utf-8')
    msg.attach(part1)
    msg.attach(part2)

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, destinatarios, msg.as_string())
        print(f"\n🎉 SUCESSO: Notificação enviada para {len(destinatarios)} destinatários (Docentes e Discentes)!")
        return True
    except smtplib.SMTPAuthenticationError as e:
        print("\n❌ ERRO DE AUTENTICAÇÃO NO GMAIL:")
        print("A conta Google requer uma 'Senha de Aplicativo' (App Password) de 16 caracteres quando a verificação em duas etapas está ativada.")
        print("Como gerar:")
        print("1. Acesse: https://myaccount.google.com/apppasswords")
        print("2. Crie uma senha chamada 'Antigravity Mala Direta'")
        print("3. Insira o código de 16 letras gerado.")
        return False
    except Exception as e:
        print(f"\n❌ Erro ao enviar e-mail: {e}")
        return False


def main():
    import argparse
    import getpass

    carregar_env_local()

    parser = argparse.ArgumentParser(description="Notificador de Atualizações do GitHub para PSJ0111")
    parser.add_argument('--send', action='store_true', help='Enviar e-mails de fato via SMTP')
    parser.add_argument('--preview', action='store_true', help='Apenas pré-visualizar a mensagem e lista')
    parser.add_argument('--msg', type=str, default="", help='Mensagem ou aviso adicional')
    parser.add_argument('--user', type=str, default=DEFAULT_SENDER, help='E-mail do remetente (padrão: hloliveira@gmail.com)')
    parser.add_argument('--excel', type=str, default=EXCEL_PATH, help='Caminho para o Excel de Mala Direta')
    args = parser.parse_args()

    # 1. Carregar contatos
    contatos = extrair_contatos(args.excel)
    print(f"👥 Total de contatos carregados da Mala Direta: {len(contatos)}")
    docentes = [c for c in contatos if c['categoria'] == 'Docente']
    discentes = [c for c in contatos if c['categoria'] == 'Discente']
    print(f"   • Docentes ({len(docentes)}): {', '.join([c['email'] for c in docentes])}")
    print(f"   • Discentes: {len(discentes)} estudantes")

    # 2. Obter arquivos atualizados do git
    arquivos = obter_arquivos_atualizados()
    print(f"📦 Arquivos identificados na última atualização: {len(arquivos)}")

    # 3. Gerar mensagem
    assunto, corpo_txt, corpo_html = gerar_mensagem(arquivos, args.msg)

    print("\n" + "="*70)
    print(f"📬 ASSUNTO: {assunto}")
    print(f"👤 REMETENTE: {args.user}")
    print("="*70)
    print(corpo_txt)
    print("="*70)

    if args.send:
        smtp_user = os.environ.get("SMTP_USER", args.user)
        smtp_pass = os.environ.get("SMTP_PASS")
        smtp_host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
        smtp_port = int(os.environ.get("SMTP_PORT", 587))

        if not smtp_pass:
            print(f"\n🔐 Digite a Senha de Aplicativo da conta Google ({smtp_user}):")
            smtp_pass = getpass.getpass(prompt="Senha (os caracteres ficarão ocultos): ").strip()

            if not smtp_pass:
                print("❌ Senha não fornecida. Cancelando envio.")
                sys.exit(1)

            salvar = input("\nDeseja salvar essa senha localmente no arquivo .env para os próximos envios? (s/N): ").strip().lower()
            if salvar in ['s', 'sim', 'y', 'yes']:
                env_file = os.path.join(REPO_ROOT, '.env')
                with open(env_file, 'w', encoding='utf-8') as f:
                    f.write(f"SMTP_USER='{smtp_user}'\n")
                    f.write(f"SMTP_PASS='{smtp_pass}'\n")
                    f.write(f"SMTP_HOST='{smtp_host}'\n")
                    f.write(f"SMTP_PORT={smtp_port}\n")
                os.chmod(env_file, 0o600)
                print(f"🔒 Credenciais salvas com segurança em {env_file} (permissão 600, ignorado no git).")

        print(f"\n🚀 Disparando e-mails para {len(contatos)} destinatários via {smtp_host}:{smtp_port}...")
        enviar_emails(contatos, assunto, corpo_txt, corpo_html, smtp_host, smtp_port, smtp_user, smtp_pass)
    else:
        print("\nℹ️ Modo PREVIEW. Para efetuar o envio real aos alunos e professores, execute:")
        print(f"   python3 .agents/skills/notificador-atualizacoes-psj0111/scripts/notificar_atualizacao.py --send")


if __name__ == "__main__":
    main()
