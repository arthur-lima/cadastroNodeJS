'use strict'

const express = require('express');
const route = express.Router();
const produtoController = require('../controller/produto-controller');

route.get('/', produtoController.get);
route.post('/', produtoController.post);
route.put('/:id', produtoController.put);
route.delete('/', produtoController.delete);

module.exports = route;