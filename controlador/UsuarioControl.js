'use strict'

var bcrypt = require('bcrypt');
var usuariosModelo = require('../modelo/usuarios');
var usuario = new usuariosModelo();

function prueba(req, res) {
    res.status(200).send({
        mesagge: 'Probando una accion del controlador de usuarios del API_REST con Node y Mongo, IMP'
    });
}

function registrarUsuario(req, res) {
    var usuario = new usuariosModelo();

    var params = req.body;
    console.log(params);

    usuario.nombre = params.nombre;
    usuario.ape_pat = params.ape_pat;
    usuario.ape_mat = params.ape_mat;
    usuario.telefono = params.telefono;
    usuario.email = params.email;
    usuario.password = params.password;
    usuario.rol = 'ROLE_USER';
    usuario.imagen = 'null';

    if (params.password) {
        bcrypt.hash(params.password, 10, function(err, hash) {
            usuario.password = hash;
            if (usuario.nombre != null && usuario.ape_pat != null && usuario.email != null) {
                //Guardas el usuario en BD
                usuario.save((errr, usuarioAlmacenado) => {
                    if (err) {
                        res.status(500).send({ mesagge: 'Error al guardar el usuario' });
                    } else {
                        if (!usuarioAlmacenado) {
                            res.status(400).send({ mesagge: 'No se ha registrado el usuario ' });
                        } else {
                            //Devuelve objeto con datos del usuario guardado
                            res.status(200).send({ usuarios: usuarioAlmacenado });
                        }
                    }
                });
            } else {
                res.status(200).send({ mesagge: 'Introduce todos los campos' });
            }
        });
    } else {
        res.status(500).send({ mesage: 'Introduce la contraseña' })
    }
}


function accesoUsuario(req, res) {
    var params = req.body;
    var email = params.email;
    var password = params.password;

    usuariosModelo.findOne({ email: email }, (err, user) => {
        if (err) {
            res.status(500).send({ mesagge: 'Error en la peticion' });
        } else {
            if (!user) {
                res.status(404).send({ mesagge: 'El usuario no existe' });
            } else {
                bcrypt.compare(password, usuario.password, function(err, check) {
                    if (check) {
                        //devolver los datos del usuario logueado
                        console.log('Coincide el password')
                        if (params.gethash) {
                            //devolver un token de jwt
                        } else {
                            res.status(200).send({ user: user })
                        }
                    } else {
                        res.status(404).send({ mesagge: 'El usuario no se ha identificado' });
                    }
                });
            }
        }
    });

}

module.exports = {
    prueba,
    registrarUsuario,
    accesoUsuario
};