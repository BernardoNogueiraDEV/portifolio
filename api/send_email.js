const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método inválido' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bernardo.nogueiraff@gmail.com',
      pass: 'icro afub ityk ttsr', // senha de app do Gmail
    },
  });

  const mailOptions = {
    from: 'bernardo.nogueiraff@gmail.com',
    to: 'bernardo.nogueiraff@gmail.com',
    subject: `Contato de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email enviado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao enviar o email' });
  }
}
