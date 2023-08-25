const nodemailer = require("nodemailer");

async function epostaGonder() {
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "your_email@gmail.com", // E-posta adresiniz
        pass: "your_password", // E-posta şifreniz
      },
    });

    let mailOptions = {
      from: "gonderen@example.com", // Gönderen e-posta adresi
      to: "alici@example.com", // Alıcı e-posta adresi
      subject: "Node.js E-posta Gönderimi",
      text: "Merhaba, bu bir test e-postasıdır.",
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("E-posta gönderildi:", info.messageId);
  } catch (error) {
    console.error("E-posta gönderilirken hata oluştu:", error);
  }
}

epostaGonder();

// npm install nodemailer
