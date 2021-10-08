const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController.js");
/* CART -------------------------------- */
// cart
router.get('/cart', productsController.cart);
module.exports = router;