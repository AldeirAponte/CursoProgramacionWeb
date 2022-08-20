var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Declaramos la dependencia a utilizar
require('dotenv').config();

// Declaramos la dependencia a utilizar
var session = require('express-session');

// Declaramos la dependencia a utilizar
var fileUpload = require('express-fileupload');

// Declaramos la dependencia a utilizar
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// creamos los controladores
var loginRouter = require('./routes/admin/login'); // login.js
var adminRouter = require('./routes/admin/coleccion'); // coleccion.js
var apiRouter = require('./routes/api'); // api.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// palabra secreta
app.use(session({
  secret: 'PW2021awqyeudj',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}))

// esto hace una capa más por seguridad
secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if(req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

// archivo temporario que nos ayuda con la subida de archivos
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// declaramos el modo de uso de los controladores
app.use('/admin/login', loginRouter);
app.use('/admin/coleccion', secured, adminRouter);
// declaramos el modo de uso del controlador
app.use('/api', cors(), apiRouter); // le agregamos la funcion cors




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
