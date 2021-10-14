const path = require('path');
let usersController = {
    /*login*/
    // pantalla de login
    login: (req, res) => {
        res.render('users/login.ejs');
    },
    //pantalla desp de loguearse
    logged: (req, res) => {
        res.render('./users/logged.ejs');
    },
    /*registro*/
    //formulario de registro
    register: (req, res) => {
        res.render('./users/register.ejs');
    },
    //pantalla desp del registro
    registered: (req, res) => {
        res.render('./users/registered.ejs');
    },
}
module.exports = usersController;