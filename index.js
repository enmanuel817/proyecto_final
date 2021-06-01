require('dotenv').config;
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
//Config Mail//
/*const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });
  transporter.verify().then(()=>{
      console.log("Listo para enviar correo!");
  });*/
//Settings//
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
    extended: false
}));

/*
app.engine('ejs', ejs({
    defaultLayout: "main",
    layoutDir: path.join(app.get('views'),'layouts'),
    partialsDir : path.join(app.get('views'), 'partials'),
    extname :"jss"
}));*/

const PORT = 3000;


app. get ('/',(req, res)=>{
    res.render('pages/index');
})

app. get ('/nosotros',(req, res)=>{
    res.render('pages/nosotros')
})

app. get ('/contacto',(req, res)=>{
    res.render('pages/contacto');
})

app. post ('/Contacto', async(req, res)=>{
     // send mail with defined transport object
    await transporter.sendMail({
    from: process.env.MAIL_USER, // sender address
    to:process.env.MAIL_USER, // list of receivers
    subject: `${req.body.name} Requiere de su atención sobre lo escrito a continuacion`, // Subject line
    html: `<h1>Nombre:${req.body.name}</h1>
        <h1>Correo:${req.body.mail}</h1>
        <h1>Solicita la siguiente información:</h1>
    <h1>${req.body.comentarios}</h1>` // html body
  });
    res.redirect('/');
})

app. get ('/diseno',(req, res)=>{
    res.render('pages/diseno');
})

app. get ('/instalacion',(req, res)=>{
    res.render('pages/  instalacion')
})
app. use ((req, res)=>{
    res.render('pages/404');
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})