const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

    // Home
router.get("/", mainController.home)
router.get('/service', mainController.service);


module.exports = router;