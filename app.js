const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const indexRouter = require('./routes/index');

const passport = require('passport');
const jwtStrategy = require('./strategies/jwt');
passport.use(jwtStrategy);

require('dotenv').config();

const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = process.env.MONGODB_URI || process.env.DEV_DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
