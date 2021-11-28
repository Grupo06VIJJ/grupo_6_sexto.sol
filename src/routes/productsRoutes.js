const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

//carrito de compras
router.get('/cart', productsController.cart);

//detalle del producto
router.get("/detail", productsController.detail);

//nuevo producto
router.get("/create", productsController.newProductView);
router.post("/create", productsController.productSave);

//listado de productos + borrado
router.get("/list", productsController.productList);
router.delete("/:id/delete", productsController.productDelete);

//vista de la pantalla de actualizacion + guardado
router.get("/:id/update",productsController.productUpdateView);
router.put("/:id/update",productsController.productUpdate);




/* Imagenes*/
const multer = require('multer'); 

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






module.exports = router;

