'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaDetalleCompra = Schema({
    Id_decompra: String,
    Id_compra: { type: Schema.ObjectId, ref: "Compra" },
    Id_producto: { type: Schema.ObjectId, ref: "Producto" },
    Titulo: String,
    Descripcion: String,
    N_estrellas: String
});

module.exports = mongoose.model('DetalleCompra', EsquemaDetalleCompra);