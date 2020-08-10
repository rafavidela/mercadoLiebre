// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// ************ Middlewares Require ************
const middUploadFile = require('../middlewares/middUploadFileProducts');
var productsMiddlewares = require('../middlewares/productsMiddlewares');


router.get('/', productsController.productsList); /* GET - All products */
router.get('/onsale/', productsController.onsale); /* GET - Products onsale*/
router.get('/detail/:productId/', productsController.detail); /* GET - Product detail */


/*** CREATE ONE PRODUCT ***/
router.get('/create/', productsController.create); /* GET - Form to create */
router.post('/create/', middUploadFile.uploadFile, productsMiddlewares.newProductValidation, productsController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:productId', productsController.edit); /* GET - Form to create */
router.put('/edit', middUploadFile.uploadFile, productsMiddlewares.editProductValidation, productsController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/
router.delete('/delete', productsController.destroy); /* DELETE - Delete from DB */

module.exports = router;