'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega DB

//Carrega Models

//Carrega Rotas
const indexRoute = require('./index/index');

//Para trabalhar com Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);

module.exports = app;