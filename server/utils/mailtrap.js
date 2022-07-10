const nodemailer = require("nodemailer");
const {tokenSing} = require("./jwtUtils");
const transport = nodemailer.createTransport({
    host: process.env.nm_host,
    port:  process.env.nm_port,
    auth: {
      user:  process.env.nm_user,
      pass:  process.env.nm_pass
    }
  });

 


const createMail = async(data)=>{
  const user = {
    _id: data._id,
    email: data.email,
    username: data.username,
  }
  const url = process.env.client_url
  const token = await tokenSing(user, "15m");  
  const link = `${url}/users/reset/${token}/`

  let mail = {
    from: "buenviaje@sistem.com",
    to: user.email,
    subject: "Recupero de Contraseña",
    html: `<h2>Recupere la Contraseña para acceder</h2>
    <p>Haga click en el siguiente link para recuperar la contraseña y siga las instrucciones</p>
    <a href="${link}">click aqui</a>
    `
  }
return mail;
}


  module.exports = {transport, createMail};