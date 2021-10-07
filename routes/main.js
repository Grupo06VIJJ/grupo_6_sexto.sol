const path = require('path');
const express = require("express");
const router = express.Router();


/* INDEX -------------------------------- */
// Home
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/index.html"))
})







module.exports = router;