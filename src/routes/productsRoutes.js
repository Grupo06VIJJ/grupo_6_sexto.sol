const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// carrito
router.get('/cart', productsController.cart);

// detalle
router.get("/detail", productsController.detail);

// nuevo producto
router.get("/create", productsController.newProductView);
router.post("/create", productsController.productSave);

// todos los productos
router.get("/list", productsController.productList);

// borrar
router.delete("/:id/delete", productsController.productDelete);

// editar
router.get("/:id/update", productsController.productUpdateView);

// guardar
router.put("/:id/update", productsController.productUpdate);

module.exports = router;