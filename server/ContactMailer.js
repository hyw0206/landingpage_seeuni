const nodeMailer = require('nodemailer')

module.exports = async (name, email, subject, message) => {
  const transporter = await nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com', // gmail server
    port: 587,
    secure: false,
    auth: {
      user: process.env.REACT_APP_SENDER_EMAIL,
      pass: process.env.REACT_APP_PASSWORD,
    }
  });

  const mailOption = {
    from: name,
    to: process.env.REACT_APP_RECIPIENT_EMAIL,
    subject: subject,
    html: 
      `You got a message from <br /> 
      Email : ${email} <br />
      Name: ${name} <br />
      Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return "success"
  } catch (error) {
    return error
  }
}