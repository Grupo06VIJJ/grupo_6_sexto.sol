const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js")


/* INDEX -------------------------------- */
// Home
router.get("/", mainController.home)







module.exports = router;