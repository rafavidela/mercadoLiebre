// requerimientos
let db = require('../database/models');
var { check, validationResult, body } = require('express-validator');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function findByid(id, callback) {
    let producto = db.Product.findAll({
        where: {
            id: id
        },
    })
    return producto.then(function(results) {
        return results[0];
    }).catch(function(err) {
        console.log("Error verifiando id.");
        console.log(err);
        throw err;
    });
}


let productsMiddlewares = {


    newProductValidation: [

        check('name')
        .exists().withMessage('Error de seguridad.')
        .trim()
        .isLength({ min: 5, max: 255 }).withMessage("El nombre debe tener entre 5 y 255 caracteres"),

        check('description')
        .exists().withMessage("Debés completar el campo: descripción")
        .trim()
        .isLength({ min: 20, max: 500 }).withMessage("La descripción debe tener entre 0 y 500 caracteres"),

        check('price')
        .exists().withMessage("Debés completar el campo: precio")
        .trim()
        .isNumeric().withMessage("El precio debe ser un número positivo"),

        check('discount')
        .trim()
        .isNumeric().withMessage("El descuento debe ser un número entre 0 y 100"),

        check('imageName')
        .exists().withMessage("Debés completar el campo: imagen")

    ],

    editProductValidation: [
        check('id')
        .exists().withMessage('Error de seguridad.')
        .trim(),

        check('name')
        .exists().withMessage('Error de seguridad.')
        .trim()
        .isLength({ min: 5, max: 255 }).withMessage("El nombre debe tener entre 5 y 255 caracteres"),

        check('description')
        .exists().withMessage("Debés completar el campo: descripción")
        .trim()
        .isLength({ min: 20, max: 500 }).withMessage("La descripción debe tener entre 0 y 500 caracteres"),

        check('price')
        .exists().withMessage("Debés completar el campo: precio")
        .trim()
        .isNumeric().withMessage("El precio debe ser un número positivo"),

        check('discount')
        .trim()
        .isNumeric().withMessage("El descuento debe ser un número entre 0 y 100"),

        check('imageName')
        .exists().withMessage("Debés completar el campo: imagen")
        .trim(),

    ],

    deleteProductValidation: [
        check('id')
        .trim()
        .exists().withMessage("id de producto no válido")
        .isInt().withMessage("id de producto no válido"),

        body('id').custom((value) => {
            return findByid(value).then(function(product) {
                if (!product) {
                    throw new Error('El producto que intenta borrar no existe.');
                }
            })
        })
    ],
};

module.exports = productsMiddlewares;