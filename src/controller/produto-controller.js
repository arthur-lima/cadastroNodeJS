'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produtos');

exports.get = (req, res, next) =>{
    Produto
            .find({})
            .then(data => {
                res.status(200).send(data);
            }).catch(e => {
                res.status(400).send(e);
            });
}

exports.post = (req, res, next) =>{
    var produto = new Produto(req.body);
    produto
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
    Produto
        .findByIdAndUpdate(req.params.id, {
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

exports.delete = (req, res, next) => {
    Produto
        .findOneAndDelete(req.body.id)
        .then(x => {
            res.status(200).send({
                message: 'Produto deletado com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao deletar produto'
            });
        });
}
