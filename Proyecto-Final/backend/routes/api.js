// Este archivo es el que hace la conexion con el front
var express = require('express');
var router = express.Router();
var colecionModel = require('./../models/coleccionModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/coleccion', async function (req, res, next) {
  let coleccion = await colecionModel.getColeccion();

  coleccion = coleccion.map(coleccion => {
    if (coleccion.img_id) {
      const imagen = cloudinary.url(coleccion.img_id, {
        width: 322,
        height: 200,
        // crop: 'fill'
      });
      return {
        ...coleccion,
        imagen
      }
    } else {
      return {
        ...coleccion,
        imagen: ''
      }
    }
  });

  res.json(coleccion);
});

// nodemailer  para el envio de contacto
router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'aapontebobadilla@gmail.com',
    subject: 'Contacto web',
    html: `${req.body.nombre} se contacto a traves de la web y quiere más información a este
    correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje}
    <br> Su teléfono es: ${req.body.telefono}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
  });
});

module.exports = router;