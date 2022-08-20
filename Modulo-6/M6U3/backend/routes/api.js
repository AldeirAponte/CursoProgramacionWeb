// Este archivo es el que hace la conexion con el front
var express = require('express');
var router = express.Router();
var colecionModel = require('./../models/coleccionModel');
var cloudinary = require('cloudinary').v2;

router.get('/coleccion', async function (req, res, next) {
  let coleccion = await colecionModel.getColeccion();

  coleccion = coleccion.map(coleccion => {
    if (coleccion.img_id) {
      const imagen = cloudinary.url(coleccion.img_id, {
        width: 322,
        height: 200,
        crop: 'fill'
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

module.exports = router;