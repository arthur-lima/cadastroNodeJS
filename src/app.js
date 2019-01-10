'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Carrega DB
mongoose.connect('mongodb://sa:sa1234@ds054308.mlab.com:54308/vendasdb', { useNewUrlParser: true });

//Carrega Models
const Product = require('./model/product-model');

//Carrega Rotas
const indexRoute = require('./router/index-route');
const productRoute = require('./router/product-route');

//Para trabalhar com Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Resolver problema de Acces-Controll-Origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});

app.use('/', indexRoute);
app.use('/produtos', productRoute);

module.exports = app;