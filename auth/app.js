const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes')
const connectDB = require('./connection/dbConnection');
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middlewares/authMiddleware')


// middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.disable('X-Powered-By');

// view engine
app.set('view engine', 'ejs');

// routes
app.use('*', checkUser);
app.use(authRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404 not found' });
})

// DB connection
connectDB();

//Server init
app.listen(process.env.PORT, () => {
  console.log('App listening ✅ on ' + process.env.ADDRESS + process.env.PORT || 3300)
})
module.exports = app;