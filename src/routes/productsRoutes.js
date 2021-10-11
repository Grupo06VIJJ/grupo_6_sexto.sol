const express = require("express");
const router = express.Router();
const path = require ('path');
const productsController = require("../controllers/productsController.js");
/* CART -------------------------------- */
// cart
router.get('/cart', productsController.cart);


/* Imagenes*/
/*const multer = require('multer'); 

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       
     cb(null, path.join(__dirname,'../../public/img/plantas'));    
    },
    filename: function(req, file, cb) {          
     let imageName = 'img' + '-' + file.originalname;   
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });
*/
router.get('/newproduct',productsController.newproduct);

/*CARGAR PRODUCTO (Nuevo) */ 
router.get('/newproduct',productsController.newproduct);
/*router.post('/newproduct', uploadFile.single('imgProducto'), productsController.newproduct);*/

router.get('/cart/:id', productsController.cart);

/*EDITAR PRODUCTO (Actualizar) */ 
router.get('/updateproduct/:id?',productsController.edicion);
/*router.put('/updateproduct/:id',uploadFile.single('imgProducto'),productsController.actualizar);*/



module.exports = router;

