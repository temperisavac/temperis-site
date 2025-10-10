# TEMPERIS — Site estático pronto para Vercel

Site moderno (HTML + Tailwind CDN) com:
- Agendamento via Calendly (embed)
- Balão do WhatsApp
- Link do Instagram
- Formulário de orçamento a enviar para e-mail (Serverless Function /api/contact)
- Preçário e testemunhos

## Como usar

1. **Editar contactos**
   - WhatsApp: edite o link `https://wa.me/351912345678` no `index.html` para o seu nº real.
   - Instagram: edite `https://instagram.com/temperis.avac` no `index.html`.
   - Calendly: edite `data-url="https://calendly.com/joaoablima813"` no `index.html` para o seu link específico de evento, se quiser.

2. **E-mail do formulário**
   Configure no Vercel (Project → Settings → Environment Variables):
   - `TEMPERIS_EMAIL_HOST` — ex: `smtp.gmail.com`
   - `TEMPERIS_EMAIL_PORT` — ex: `587`
   - `TEMPERIS_EMAIL_SECURE` — `false` (ou `true` se usar 465)
   - `TEMPERIS_EMAIL_USER` — conta emissora
   - `TEMPERIS_EMAIL_PASS` — senha/app password
   - `TEMPERIS_EMAIL_TO` — destinatário (inbox da TEMPERIS)

3. **Deploy no Vercel**
   - Faça push deste projeto para o GitHub.
   - Na Vercel: New Project → Import → Framework Preset: **Other/Static**.
   - **Build Command**: _vazio_
   - **Output Directory**: `.`
   - O diretório `/api` será tratado como Serverless Functions automaticamente.

## Desenvolvimento local
Abra `index.html` no navegador. As funções de e-mail só funcionam online (em Vercel) com as variáveis configuradas.
