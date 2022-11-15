'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaLocalidad = Schema({
    C_postal: String,
    Id_municipio: { type: Schema.ObjectId, ref: "Municipio" },
    Nombre: String
});

module.exports = mongoose.model('Localidad', EsquemaLocalidad);