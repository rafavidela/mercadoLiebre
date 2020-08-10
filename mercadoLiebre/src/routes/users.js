// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Middlewares Require ************
const middUploadFile = require('../middlewares/middUploadFileUsers');
var usersMiddlewares = require('../middlewares/usersMiddlewares');

/* LOGIN */
router.get('/login', usersController.login);
router.post('/login', usersMiddlewares.loginValidation, usersController.access);


/* REGISTRO */
router.get('/register', usersController.register);
router.post('/create', middUploadFile.uploadFile, usersMiddlewares.registerValidation, usersController.create);


/* CERRAR SESIÓN */
router.get('/logout', usersController.logout);

/* BORRAR USUARIO - A IMPLEMENTAR, NECESITO ROL DE ADMINISTRADOR*/
// router.delete('/delete', productsController.delete); /* DELETE - Delete from DB */

module.exports = router;