# TEMPERIS — React + Vite (Vercel Ready)

- Calendly: https://calendly.com/temperis
- WhatsApp: +351 969 337 121
- Instagram: https://www.instagram.com/temperisavac/
- Orçamentos via `/api/contact` (Nodemailer)

## Deploy (Vercel)
Framework: Vite
Install: npm install
Build: npm run build
Output: dist

Crie em Settings → Environment Variables:
- TEMPERIS_EMAIL_HOST = smtp.gmail.com
- TEMPERIS_EMAIL_PORT = 587
- TEMPERIS_EMAIL_SECURE = false
- TEMPERIS_EMAIL_USER = temperisavac@gmail.com
- TEMPERIS_EMAIL_PASS = (App Password do Gmail)
- TEMPERIS_EMAIL_TO   = temperisavac@gmail.com

## Local
npm install
npm run dev
