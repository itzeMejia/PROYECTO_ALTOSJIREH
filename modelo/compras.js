'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaCompra = Schema({
    Id_compra: String,
    Id_mpago: { type: Schema.ObjectId, ref: "MetodoPago" },
    Id_usuario: { type: Schema.ObjectId, ref: "Usuario" },
    Fecha: String,
    Costo_envio: String,
    Total: String
});

module.exports = mongoose.model('Compra', EsquemaCompra);