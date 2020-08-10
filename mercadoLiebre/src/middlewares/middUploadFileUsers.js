const path = require('path');
let imagenesUsuariosPath = path.resolve(__dirname, '../../public/images/users');
const multer = require('multer'); // file uploads

// Start File uploads config ---------------------------------------------------------
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, imagenesUsuariosPath)
    },
    filename: function(req, file, cb) {
        let fechaActual = new Date();
        cb(null, req.body.id + ' - ' + fechaActual.getDate() + "-" + fechaActual.getMonth() + "-" + fechaActual.getFullYear() + " " + fechaActual.getHours() + "_" + fechaActual.getMinutes() + "_" + fechaActual.getSeconds() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('La imagen sólo puede ser imagen JPG, PNG, JPEG.'))
        }
        callback(null, true)
    }
}).single('image');
// End File uploads config ---------------------------------------------------------

let uploadFile = {
    uploadFile: function(req, res, next) {
        upload(req, res, function(err) { // invocamos la función upload de multer para subir el archivo
            if (err) {
                console.log(err);
                //return res.render("index", { title: err }); //corregir mensaje de error
            } else {
                next();
            } // todo salió bien, continuamos al próximo middleware
        });
    }
}
module.exports = uploadFile;