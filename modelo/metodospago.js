'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaMetodopago = Schema({
    Id_mpago: String,
    Id_usuario: { type: Schema.ObjectId, ref: "Usuario" },
    Nombre: String,
    Ape_pat: String,
    Ape_mat: String,
    Fecha_ven: String,
    Cod_se: String
});

module.exports = mongoose.model('MetodoPago', EsquemaMetodopago);