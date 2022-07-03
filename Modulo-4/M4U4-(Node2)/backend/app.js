var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// declaramos la dependencia de express
var session = require('express-session');


// declaramos la variable para el login
//var loginRouter = require('./routes/admin/login'); // login.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// utilizamos session
app.use(session({
  secret: 'hsdhuyrbfjkfkkdfsjad',
  resave: false,
  saveUninitialized: true
}));

// accionamos la variable declarada
//app.use('/admin/login', loginRouter); 


// metodo get, obtenemos la info
app.get('/admin/login', function (req, res) {
  var conocido = Boolean(req.session.nombre);
  
  res.render('admin/login', {
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });
});

// metodo post, se envia la informacion
app.post('/ingresar', function (req, res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect('/admin/login');
});

// metodo para salir
app.get('/salir', function (req, res) {
  req.session.destroy();
  res.redirect('/admin/login');
});




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
