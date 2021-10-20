const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController.js");

//carrito de compras
router.get('/cart', productsController.cart);

//detalle del producto
router.get("/detail", productsController.detail);

//nuevo producto
router.get("/newProduct", productsController.newProductView);
router.post("/newProduct", productsController.newProductSave);

//listado de productos
router.get("/list", productsController.productList);
router.delete("/delete/:id", productsController.productDelete);

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





module.exports = router;

