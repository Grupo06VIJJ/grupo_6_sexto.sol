const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js");

/* LOGIN -------------------------------- */
router.get("/login", usersController.login);

/* LOGGED -------------------------------- */
router.post('/', usersController.logged);

/* REGISTER -------------------------------- */
router.get('/register', usersController.register);
router.post('/register', usersController.create);

/* LIST*/
router.get("/list", usersController.userList);

module.exports = router;