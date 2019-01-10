'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) =>{
        Product
            .find({})
            .then(data => {
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e);
            });
}

exports.post = (req, res, next) =>{
    var product = new Product(req.body);
    product
        .save()
        .then(x =>{
            res.status(200).send({
                message: 'Produto cadastrado com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o produto',
                data: e
            });
        });
}

exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.body.id, {
            $set:{
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco_venda: req.body.preco_venda,
                preco_custo: req.body.preco_custo
            }
        }).then(x => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar produto'
            });
        });
}
