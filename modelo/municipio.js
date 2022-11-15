'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaMunicipio = Schema({
    Id_municipio: String,
    Id_estado: { type: Schema.ObjectId, ref: "Estado" },
    Nombre: String
});

module.exports = mongoose.model('Municipio', EsquemaMunicipio);