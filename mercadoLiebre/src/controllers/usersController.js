const Sequelize = require('sequelize');
const Op = Sequelize.Op;
let db = require('../database/models');
let bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');
//let sequelize = db.sequelize;

// CONTROLLERS DE USUARIO
const controller = {

    register: (req, res) => {
        res.render('register', { usuarioLogueado: req.session.usuarioLogueado });
    },

    login: (req, res) => {
        res.render('login', { usuarioLogueado: req.session.usuarioLogueado });
    },

    access: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            let user = {
                email: req.body.email,
                password: req.body.password
            }
            db.User.findOne({
                where: {
                    email: user.email
                }
            }).then((usuario) => {
                if (usuario) {
                    let check = bcrypt.compareSync(user.password, usuario.password)
                    if (check == true) {
                        req.session.usuarioLogueado = usuario;
                        if (req.body.remember != null) {
                            // creamos una cookie de nombre "recordarme" que va a contener el email del usuario
                            let expiracion = new Date(Date.now() + 900000); //15 minutos
                            res.cookie('recordarme', usuario.id, { expires: expiracion });
                        };
                        return res.redirect(`/`);
                    };
                }

                return res.render("login", { errors: [{ msg: 'Revisa que el mail y la contraseña coincidan con un usuario registrado' }], usuarioLogueado: undefined });


            }).catch((err) => console.error(err));

        } else {
            return res.render("login", { errors: errors.errors, usuarioLogueado: req.session.usuarioLogueado });
        }
    },

    create: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            if (req.body.password == req.body.validation) {

                delete req.body.validation;
            }

            // creacion de usuario y almacenado en database


            db.User.findOne({ ///pasar esto a middleware de validación de registro
                where: {
                    email: req.body.email
                }
            }).then((usuario) => {

                if (usuario != undefined) {
                    return res.render("register", { errors: [{ msg: 'El email con el que intenta registrarse pertenece a un/a usuario/a ya registrado/a' }], usuarioLogueado: undefined });
                } else {

                    let user = {
                        id: parseInt(req.body.id),
                        name: req.body.name,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                    }

                    if (typeof req.file !== 'undefined') {
                        user.image = req.file.filename //si  se seleccionó algún archivo de imagen
                    } else if (
                        typeof req.body.imageName == 'undefined' ||
                        req.body.imageName == 'deleted') {
                        user.image = "default-image.png"; // si no se seleccionó o se borró la imagen que había elegido)
                    }

                    db.User.create({
                        name: req.body.name,
                        email: user.email,
                        password: user.password,
                        image: user.image,
                    }).then((created) => {
                        console.log("created");
                        console.log(created);
                        console.log("created.id");
                        console.log(created.id);


                        req.session.usuarioLogueado = created;
                        if (req.body.remember != undefined) {
                            // creamos una cookie de nombre "recordarme" que va a contener el email del usuario
                            let expiracion = new Date(Date.now() + 900000); //15 minutos
                            res.cookie('recordarme', created.id, { expires: expiracion });
                        }
                        return res.redirect('/');
                    });



                }
            });
        } else {

            res.render('register', { errors: errors.errors, usuarioLogueado: req.session.usuarioLogueado });
        }



    },

    logout: function(req, res) {
        req.session.destroy(function() { // Destruyo la sesión completa
            if (req.cookies.recordarme != undefined) {
                res.clearCookie("recordarme"); //eliminamos la cookie
            }

            mensaje = "Se cerró la sesión exitosamente";
            return res.redirect('/');
        });
    },

    //Borra usuario. No está implementada en la vista
    delete: (req, res) => {

        db.User.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                req.session.destroy(function() {
                    if (req.cookies.recordarme != undefined) {
                        res.clearCookie("recordarme");
                    }
                    return res.render("login", { usuarioLogueado: undefined });
                });
            })

    }
}





module.exports = controller;