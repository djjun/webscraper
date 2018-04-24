const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const index = require('./routes/index');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/auth', authRoute);
app.use('/user', userRoute);

app.use('/', index);

module.exports = app;