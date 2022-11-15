'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaDireccion = Schema({
    Id_direccion: String,
    Id_usuario: { type: Schema.ObjectId, ref: "Usuario" },
    C_postal: { type: Schema.ObjectId, ref: "Localidad" },
    Calle: String,
    N_interior: String,
    N_exterior: String,
    EntreCalle1: String,
    EntreCalle2: String,
    Referencias: String
});

module.exports = mongoose.model('Direccion', EsquemaDireccion);