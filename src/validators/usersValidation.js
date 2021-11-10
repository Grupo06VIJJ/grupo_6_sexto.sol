/*const {check } = require ('express-validator'); //chequear campos de formulario loggin
const path = require('path');
const { user } = require('../../db/users');
 

module.exports = {
    
    create: [],
    login: [
        check('email')
            .notEmpty().withMessage("Completar el  email").bail()
            .isEmail().withMessage("Ingresar un email válido"),
        
        check('password')
            .notEmpty().withMessage("Completar el password")
            .bail()

    ],
    register: [
        
        check('full_name')
            .notEmpty().withMessage("Completar el nombre").bail()
            .isLength( {min: 5} ).withMessage("El nombre debe tener como mínimo 5 caracteres"),
        
        check('email')
            .notEmpty().withMessage("Completar el email").bail()
            .isEmail().withMessage("Ingresar un email válido"),
        
        check('password')
            .notEmpty().withMessage("Debes completar el campo password").bail()
            .isLength( {min: 8} ).withMessage("La contraseña debe tener 8 caracteres como mínimo"),
        ]
        
}*/