var pool = require('./bd'); // llamando datos al archivo que tiene la conexion a la BD
var md5 = require('md5');

// Esta funcion comprueba que los datos ingresados sean los mismos que los de la BD
async function getUserByUsernameAndPassword(user, password) {
  try {
    var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
    var rows = await pool.query(query, [user, md5(password)]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getUserByUsernameAndPassword }