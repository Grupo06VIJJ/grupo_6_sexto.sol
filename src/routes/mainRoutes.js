const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

    // Home
router.get("/", mainController.home)
router.get('/service', mainController.service);

  // Enlaces

router.get('/sobrenosotros', mainController.sobrenosotros);
router.get('/contacto',mainController.contacto);
router.get('/arrepentimiento',mainController.arrepentimiento);
module.exports = router;