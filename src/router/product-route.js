'use strict'

const express = require('express');
const route = express.Router();
const productController = require('../controller/product-controller');

route.get('/', productController.get);
route.post('/', productController.post);
route.put('/:id', productController.put);

module.exports = route;