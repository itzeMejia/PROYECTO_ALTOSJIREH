'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaEstado = Schema({
    Id_estado: String,
    Nombre: String,
});

module.exports = mongoose.model('Estado', EsquemaEstado);