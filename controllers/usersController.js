const path = require('path');


let usersController = {
    /*login*/
    // pantalla de login
    login : (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    //pantalla desp de loguearse
    logged : (req, res) => {
        res.sendFile(path.join(__dirname, '../views/logged.html'));
    },

    /*registro*/
    //formulario de registro
    register : (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },

    //pantalla desp del registro
    registered : (req, res) => {
        res.sendFile(path.join(__dirname, '../views/registered.html'));
    },
    

    

}

module.exports = usersController;