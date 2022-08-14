var express = require('express');
var router = express.Router();
var coleccionModel = require('./../../models/coleccionModel'); // llamamos el archivo que necesitamos

// recibe /admin/coleccion, renderiza la pagina de coleccion.hbs, y ejecuta la funcion getColeccion();
router.get('/', async function (req, res, next) {
  var coleccion = await coleccionModel.getColeccion();

  res.render('admin/coleccion', {
    layout: 'admin/layout',
    title: 'Administrar Colección',
    persona: req.session.nombre,
    coleccion
  });
});

// recibe /admin/coleccion/agregar, renderiza la pagina agregar.hbs 
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout',
    title: 'Agregar Colección'
  });
});

// recibe los datos ingresados y ejecuta la funcion insertColeccion();
router.post('/agregar', async (req, res, next) => {
  try {
    if(req.body.titulo != "" && req.body.informacion != "") {
      await coleccionModel.insertColeccion(req.body);
      res.redirect('/admin/coleccion');
    } else {
        res.render('admin/agregar', {
          layout: 'admin/layout',
          title: 'Agregar Colección',
          error: true,
          message: 'Todos los campos son requeridos'
        });
      }
  } catch {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      title: 'Agregar Colección',
      error: true,
      message: 'No se cargo la colección'
    });
  }
});

// recibe /admin/coleccion/eliminar/:id, ejecuta la funcion deleteColeccionById();
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id; // capturamos el id
  await coleccionModel.deleteColeccionById(id);
  res.redirect('/admin/coleccion');
});

// recibe /admin/coleccion/editar/:id, ejecuta la funcion getColeccionById();
router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id;
  var itemColeccion = await coleccionModel.getColeccionById(id);

  res.render('admin/editar', {
    layout: 'admin/layout',
    title: 'Editar Colección',
    itemColeccion
  });
});

// recibe /admin/coleccion/editar, ejecuta la funcion editar
router.post('/editar', async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      informacion: req.body.informacion,
      // aqui se pondra la imagen
    }

    await coleccionModel.editarColeccionById(obj, req.body.id);
    res.redirect('/admin/coleccion');
  } catch (error) {
    res.render('admin/editar', {
      layout: 'admin/layout',
      title: 'Editar Colección',
      error: true,
      message: 'No se modifico la Colección'
    });
  }
});

module.exports = router;