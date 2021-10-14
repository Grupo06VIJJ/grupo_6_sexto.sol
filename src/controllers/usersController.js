const path = require('path');
let usersController = {
    /*login*/
    // pantalla de login
    login: (req, res) => {
        return res.render('/users/login');
    },

    //pantalla desp de loguearse
    logged: (req, res) => {
        res.render('/views/users/logged');
    },
    /*registro*/
    //formulario de registro
    register: (req, res) => {
        res.render('views/users/register');
    },
    //pantalla desp del registro
    registered: (req, res) => {
        res.render('/views/users/registered');
    },
}
module.exports = usersController;