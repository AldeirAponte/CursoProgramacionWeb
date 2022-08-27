var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

// recibe /admin/login, renderiza el login.hbs
router.get('/', function(req, res, next) {
  res.render('admin/login', { 
    layout: 'admin/layout',
    title: 'Login Administrador' 
  });
});

// recibe /admin/login/logout, destruye la sesion y renderiza el login.hbs
router.get('/logout', function(req, res, next) {
  req.session.destroy(); // destruye las variables de sesion (id y usuario)
  res.render('admin/login', {
    layout: 'admin/layout',
    title: 'Login Administrador'
  });
});

// recibe y procesa la informacion, continua el proceso en coleccion.js o renderiza el login.hbs
router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario; // capturando la info de usuario
    var password = req.body.password; // capturando la info de contraseña

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if(data != undefined) {
      req.session.id_usuario = data.id; // capturamos y gurdamos el id para la capa de secured
      req.session.nombre = data.usuario;
      res.redirect('/admin/coleccion');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        title: 'Login Administrador',
        error: true
      });
    }
  } catch (error) {
      console.log(error);
  }
});

module.exports = router;