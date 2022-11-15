'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaCategoria = Schema({
    Id_categoria: String,
    Nombre: String
});

module.exports = mongoose.model('Categoria', EsquemaCategoria);