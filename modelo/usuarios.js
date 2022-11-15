'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaUsuario = Schema({
    nombre: String,
    ape_pat: String,
    ape_mat: String,
    telefono: String,
    email: String,
    password: String,
    rol: String,
    imagen: String
});

module.exports = mongoose.model('Usuario', EsquemaUsuario);