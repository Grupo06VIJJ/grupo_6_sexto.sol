const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

/* LOGIN -------------------------------- */
router.get('/src/views/users/login', usersController.login);

/* LOGGED -------------------------------- */
router.post('/', usersController.logged);

/* REGISTER -------------------------------- */
router.get('/src/views/users/register', usersController.register);

/* REGISTERED -------------------------------- */
router.post('/', usersController.registered);

module.exports = router;