const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const { nome, email, telefone, local, quantidade, mensagem } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.TEMPERIS_EMAIL_HOST,
      port: Number(process.env.TEMPERIS_EMAIL_PORT || 587),
      secure: String(process.env.TEMPERIS_EMAIL_SECURE || 'false') === 'true',
      auth: {
        user: process.env.TEMPERIS_EMAIL_USER,
        pass: process.env.TEMPERIS_EMAIL_PASS,
      },
    });

    const html = `
      <h2>Novo pedido de orçamento - TEMPERIS</h2>
      <p><b>Nome:</b> ${nome}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Telefone:</b> ${telefone || '-'}</p>
      <p><b>Local:</b> ${local}</p>
      <p><b>Quantidade:</b> ${quantidade}</p>
      <p><b>Mensagem:</b></p>
      <pre>${mensagem}</pre>
    `;

    await transporter.sendMail({
      from: `TEMPERIS Website <${process.env.TEMPERIS_EMAIL_USER}>`,
      to: process.env.TEMPERIS_EMAIL_TO,
      subject: 'Pedido de orçamento - TEMPERIS',
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Falha ao enviar' });
  }
};
