const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// carrito
router.get('/cart', productController.cart);

// detalle
router.get("/detail", productController.detail);

// nuevo producto
router.get("/create", productController.newProductView);
router.post("/create", productController.productSave);

// todos los productos
router.get("/list", productController.productList);

// borrar
router.delete("/:id/delete", productController.productDelete);

// editar
router.get("/:id/update", productController.productUpdateView);

// guardar
router.put("/:id/update", productController.productUpdate);

module.exports = router;