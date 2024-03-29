const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')


const register = require('./routes/Register');

app.use(cors())
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: "50mb", extended: true }));
app.use(cookieParser());


app.use('/api/v1', register);


module.exports = app