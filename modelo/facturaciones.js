'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaFactura = Schema({
    Id_factura: String,
    Id_compra: { type: Schema.ObjectId, ref: "Compra" },
    Id_direccion_env: { type: Schema.ObjectId, ref: "Direccion" },
    Id_direccion_fac: { type: Schema.ObjectId, ref: "Direccion" },
    N_doc_pago: String
});

module.exports = mongoose.model('Factura', EsquemaFactura);