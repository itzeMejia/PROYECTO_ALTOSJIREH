'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaFoto = Schema({
    Id_foto: String,
    Id_producto: { type: Schema.ObjectId, ref: "Producto" },
    ruta: String
});

module.exports = mongoose.model('Foto', EsquemaFoto);