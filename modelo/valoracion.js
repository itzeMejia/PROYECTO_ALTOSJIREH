'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaValoracion = Schema({
    Id_valoracion: String,
    Id_usuario: { type: Schema.ObjectId, ref: "Usuario" },
    Id_producto: { type: Schema.ObjectId, ref: "Producto" },
    Titulo: String,
    Descripcion: String,
    N_estrellas: String
});

module.exports = mongoose.model('Valoracion', EsquemaValoracion);