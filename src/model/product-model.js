'use restrict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String
    },
    preco_venda:{
        type: Number,
        required: true
    },
    preco_custo: {
        type: Number
    }
});

module.exports = mongoose.model('Product', schema)