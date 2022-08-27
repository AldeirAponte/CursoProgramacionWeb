// Este archivo controla todas las peticiones que se hagan a la tabla coleccion de la BD
// aqui declaramos las funciones que itilizaremos
var pool = require('./bd');

// Esta funcion muestra toda la info de la tabla coleccion
async function getColeccion() {
  var query = 'select * from coleccion';
  var rows = await pool.query(query);
  return rows;
}

// Esta funcion inserta la info en la tabla coleccion
async function insertColeccion(obj) {
  try {
    var query = 'insert into coleccion set ?';
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Esta funcion borra la info en la tabla coleccion
async function deleteColeccionById(id) {
  var query = 'delete from coleccion where id = ?';
  var rows = await pool.query(query, [id]);
  return rows;
}

//Esta funcion selecciona el item con la info a editar de la tabla coleccion
async function getColeccionById(id) {
  var query = 'select * from coleccion where id = ?';
  var rows = await pool.query(query, [id]);
  return rows[0];
}

//Esta funcion edita o actualiza el item seleccionado previamente de la tabla coleccion
async function editarColeccionById(obj, id) {
  try {
    var query = 'update coleccion set ? where id = ?';
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { getColeccion, insertColeccion, deleteColeccionById, getColeccionById, editarColeccionById }