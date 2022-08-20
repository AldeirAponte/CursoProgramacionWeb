var express = require('express');
var router = express.Router();
var coleccionModel = require('./../../models/coleccionModel'); // llamamos el archivo que necesitamos
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

// recibe /admin/coleccion, renderiza la pagina de coleccion.hbs, y ejecuta la funcion getColeccion();
router.get('/', async function (req, res, next) {

  var coleccion = await coleccionModel.getColeccion();

  coleccion = coleccion.map(colex => {
    if(colex.img_id) {
      const imagen = cloudinary.image(colex.img_id, {
        width: 322,
        height: 200,
        crop: 'fill'
      });
      return {
        ...colex,
        imagen
      }
    } else {
      return {
        ...colex,
        imagen: ''
      }
    }
  });

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

    var img_id = '';
    // verificamos si hay o no imagen
    if(req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }
    // verificamos que lo campos no esten vacios
    if(req.body.titulo != "" && req.body.informacion != "") {
      await coleccionModel.insertColeccion({
        ...req.body,
        img_id
      });
      res.redirect('/admin/coleccion');
    } else {
        res.render('admin/agregar', {
          layout: 'admin/layout',
          title: 'Agregar Colección',
          error: true,
          message: 'Todos los campos son requeridos'
        });
      }
  } catch (error) {
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

  let coleccion = await coleccionModel.getColeccionById(id);
  
  if(coleccion.img_id) {
    await(destroy(coleccion.img_id));
  }

  await coleccionModel.deleteColeccionById(id);
  res.redirect('/admin/coleccion');
});

// recibe /admin/coleccion/editar/:id, ejecuta la funcion getColeccionById(); selecciona el item a editar
router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id;
  var itemColeccion = await coleccionModel.getColeccionById(id);

  res.render('admin/editar', {
    layout: 'admin/layout',
    title: 'Editar Colección',
    itemColeccion
  });
});

// recibe /admin/coleccion/editar, ejecuta la funcion editarColeccionById(); realiza los cambios
router.post('/editar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if(req.body.img_delete === '1') {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if(req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }

    if(borrar_img_vieja && req.body.img_original) {
      await(destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      informacion: req.body.informacion,
      img_id
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