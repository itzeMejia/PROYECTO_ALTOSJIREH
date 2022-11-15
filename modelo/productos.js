'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaProducto = Schema({
    Id_producto: String,
    Id_oferta: { type: Schema.ObjectId, ref: "Oferta" },
    Id_categoria: { type: Schema.ObjectId, ref: "Categoria" },
    Id_valoracion: { type: Schema.ObjectId, ref: "Valoracion" },
    Nombre: String,
    Foto: String,
    Precio: String,
    Descripcion: String,
    Stock: String,
    num_ventas: String
});

module.exports = mongoose.model('Producto', EsquemaProducto);