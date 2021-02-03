var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require("body-parser");
const cors = require("cors");

var mascotaRouter = require('./routes/mascota.routes');
var usuarioRouter = require('./routes/usuario.routes');
var direccionRouter = require('./routes/direccion.routes');



var app = express();

const db = require("./models");
db.sequelize.sync();

var corsOptions = {origin: "http://localhost:4200"};


app.use(cors(corsOptions)); 

// parse requests of content-type - application/json
app.use(bodyParser.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({​​​​​​​​extended: true}​​​​​​​​));
app.use(bodyParser.urlencoded({extended:true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/mascotas',mascotaRouter);
app.use('/api/usuarios',usuarioRouter);
app.use('/api/direcciones',direccionRouter);



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
