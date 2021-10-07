const express = require("express");
const router = express.Router();
const path = require('path');
/* LOGIN -------------------------------- */
// login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

// logged
router.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/logged.html'));
});


/* REGISTER -------------------------------- */
// register
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

// logged
router.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/registered.html'));
});


module.exports = router;