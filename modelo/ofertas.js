'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaOferta = Schema({
    Id_oferta: String,
    Nombre: String,
    Descripcion: String
});

module.exports = mongoose.model('Oferta', EsquemaOferta);