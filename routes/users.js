const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")

/* LOGIN -------------------------------- */
router.get('/login', usersController.login);

/* LOGGED -------------------------------- */
router.post('/', usersController.logged);

/* REGISTER -------------------------------- */
router.get('/register', usersController.register);

/* REGISTERED -------------------------------- */
router.post('/register', usersController.registered);

module.exports = router;