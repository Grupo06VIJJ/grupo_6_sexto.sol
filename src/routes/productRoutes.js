//Requerimos path, express y router para configurar las rutas
const express = require('express');
const router = express.Router();
const path = require('path');
const adminMiddleware = require('../middlewares/adminMiddleware');
const logMiddleware = require('../middlewares/logmiddleware');

//Requerimos multer para traer archivos
const multer = require('multer');

//Configuramos destino y nombre de archivos
const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        let productCategory = req.body.category;
        const filePath = path.join(__dirname, `../../public/img/${productCategory}`)
        callback(null, filePath);
    },
    filename: (req, file, callback) => {
        let productCategory = req.body.category,
            productMaterial = req.body.materials
        const imgName = `img-${productCategory.toLowerCase().replace(/ /g, '-')}-${Date.now().toString().slice(8)}-${productMaterial}${path.extname(file.originalname)}`;
        callback(null, imgName);
    }
})

const fileUpload = multer({ storage: multerDiskStorage })

//Requerimos el controlador para llamar a las funciones
const productController = require('../controllers/productController');

/*----Rutas para vista de productos----*/
/*router.get('/', productController.productos);*/

/*----Rutas para vista de plantas sin flor----*/
router.get('/sinflor', productController.sinflor);

/*----Rutas para vista de plantas con flor----*/
router.get('/conflor', productController.conflor);

/*----Rutas para creación de producto----*/
router.get('/product/create', logMiddleware, adminMiddleware, productController.create);
router.post('/', fileUpload.any(), productController.store);

/*----Rutas para edición de producto----*/
router.get('/:id/edit', logMiddleware, adminMiddleware, productController.edit);
router.patch('/:id', fileUpload.any(), productController.update);

/*----Rutas para vista de carrito de compras----*/
router.get('/productCart', logMiddleware, productController.productCart);

// carrito
router.get('/cart', productController.cart);
router.get('/productCart', productController.productCart);
//listado de productos + borrado 
router.get("/list", productController.productList);
router.get("/create", productController.newProductView);

//Borrar productos
router.delete("/:id/delete", productController.delete);

//Actualizar productos

router.get("/:id/update", productController.edit);
router.patch("/:id/update", productController.edit);

/*----Rutas para vista de detalle de producto----*/
router.get('/:id', productController.productDetail);










module.exports = router;