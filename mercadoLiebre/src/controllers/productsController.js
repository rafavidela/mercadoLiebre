let db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { check, validationResult, body } = require('express-validator');

const controller = {
    // productsList - Shows all products
    productsList: async(req, res) => {
        try {
            const products = await db.Product.findAll();
            res.render('products', {
                products: products,
                usuarioLogueado: req.session.usuarioLogueado
            });
        } catch (err) {
            console.error(err)
        }
    },


    onsale: async(req, res) => {
        try {
            const products = await db.Product.findAll({
                where: {
                    category: 'in-sale'
                }
            });
            res.render('onsale', {
                products: products,
                usuarioLogueado: req.session.usuarioLogueado
            });

        } catch (err) {
            console.error(err)
        }
    },


    // Detail - Details from one product
    detail: async(req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.productId)
            res.render('detail', {
                product: product,
                usuarioLogueado: req.session.usuarioLogueado
            });

        } catch (err) {
            console.error(err)
        }
    },

    // Create - Form to create
    create: (req, res) => {
        res.render('product-create-form', {
            usuarioLogueado: req.session.usuarioLogueado
        });
    },

    // Create -  Method to store
    store: (req, res) => {

        let product = {
            id: parseInt(req.body.id),
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            category: req.body.category,
        }

        if (typeof req.file !== 'undefined') {
            product.image = req.file.filename //si  se seleccionó algún archivo de imagen
        } else if (
            typeof req.body.imageName == 'undefined' ||
            req.body.imageName == 'deleted') {
            product.image = "default-image.png"; // si no se seleccionó o se borró la imagen que había elegido)
        } else {
            product.image = req.body.imageName;
        }

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                image: product.image,
                category: req.body.category,
            }).then(() => {
                res.redirect("/");
            });
        } else {
            res.render('product-create-form', {
                errors: errors.errors,
                usuarioLogueado: req.session.usuarioLogueado
            });
        }

    },

    // Update - Form to edit
    edit: async(req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.productId)
            res.render('product-edit-form', {
                product: product,
                usuarioLogueado: req.session.usuarioLogueado
            });

        } catch (err) {
            console.error(err)
        }
    },
    // Update - Method to update
    update: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {


            let product = {
                id: parseInt(req.body.id),
                name: req.body.name,
                description: req.body.description,
                price: Number(req.body.price),
                discount: Number(req.body.discount),
                category: req.body.category,
            }

            if (typeof req.file !== 'undefined') {
                product.image = req.file.filename //si  se seleccionó algún archivo de imagen
            } else if (
                typeof req.body.imageName == 'undefined' ||
                req.body.imageName == 'deleted') {
                product.image = "default-image.png"; // si no se seleccionó y (se borró la imagen que tenía o es producto nuevo)
            } else {
                product.image = req.body.imageName;
            }

            db.Product.update({
                name: product.name,
                description: product.description,
                price: product.price,
                discount: product.discount,
                image: product.image,
                category: product.category,
            }, {
                where: {
                    id: product.id
                }
            }).then(() => {
                res.redirect("/products/detail/" + req.body.id);
            });

        } else {
            console.error(errors);
            res.redirect("/products/detail/" + req.body.id);

        }

    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.redirect("/");

        })
    }
};

module.exports = controller;