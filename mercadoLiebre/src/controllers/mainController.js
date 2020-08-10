let db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {
    root: async(req, res) => {
        try {
            const productsOnsale = await db.Product.findAll({
                where: {
                    category: 'in-sale'
                }
            })
            const productsVisited = await db.Product.findAll({
                where: {
                    category: 'visited'
                }
            })
            res.render("index", {
                productsOnsale: productsOnsale,
                productsVisited: productsVisited,
                usuarioLogueado: req.session.usuarioLogueado
            });
        } catch (err) {
            console.error(err)
        }
    },
    search: async(req, res) => {
        try {
            let search = req.query.keywords
            let products = await db.Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${search}%`
                    }
                }
            })
            res.render('results', {
                products: products,
                search: search,
                usuarioLogueado: req.session.usuarioLogueado
            });
        } catch (err) {
            console.error(err)
        }
    },
};

module.exports = controller;