const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")

/* LOGIN -------------------------------- */
// login
router.get('/login', usersController.login);

// logged
router.post('/', usersController.logged);

/* REGISTER -------------------------------- */
// register
router.get('/register', usersController.register);

// logged
router.post('/register', usersController.registered); 



module.exports = router;