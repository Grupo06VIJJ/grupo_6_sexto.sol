const express = require("express");
const router = express.Router();
const path = require ('path');
const productsController = require("../controllers/productsController.js");

//carrito de compras
router.get('/cart', productsController.cart);

//detalle del producto
router.get("/detail", productsController.detail);































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

/*CARGAR PRODUCTO (Nuevo) */ 
router.get('/newproduct',productsController.newproduct);
/*router.post('/newproduct', uploadFile.single('imgProducto'), productsController.newproduct);*/

/*EDITAR PRODUCTO (Actualizar) */ 
router.get('/updateproduct/:id?',productsController.edicion);
/*router.put('/updateproduct/:id',uploadFile.single('imgProducto'),productsController.actualizar);*/



module.exports = router;

