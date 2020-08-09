var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const configFile = require('./config.json');

var indexRouter = require('./routes/index');
var updateroomsRouter = require('./routes/updaterooms');
var createroomRouter = require('./routes/createroom');

var app = express();
var keys = Object.keys( configFile );
for( var i = 0,length = keys.length; i < length; i++ ) {
  app.set('k'+keys[i], configFile[keys[i]]);
}
// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/templates'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/updaterooms', updateroomsRouter);
app.use('/createroom', createroomRouter);

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
