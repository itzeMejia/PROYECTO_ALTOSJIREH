'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var user_routes = require('./controlador/usuarioRuta');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configurar las cabeceras http
//rutas base
app.use('/api', user_routes);

//Codigo para observar la respuesta del servidor web
//app.get('/pruebas', function(req, res) {
//    res.status(200).send({ mesage: 'Este es el inicio de la practica 3 IMP' });
//});

module.exports = app;