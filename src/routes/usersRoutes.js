const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const path = require('path');
/*const {check, body, validationResult} = require('express-validator');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const logMiddleware = require ('../middlewares/logMiddleware');
const multer = require('multer');*/




/*----Rutas para vista de formulario de login----*/
router.get("/login", usersController.login);
router.post('/', usersController.logged);

/*----Rutas para vista de formulario de registro----*/
router.get('/register', usersController.register);
router.post('/register', usersController.create);

/* LIST*/
router.get("/list", usersController.userList);
router.delete("/delete/:id", usersController.delete);



/*----Ruta para info de perfil de usuario-----*/


/*----Ruta para cerrar sesion-----*/


//Validaciones
 //de formulario de registro

/*const validateRegister = [
    body('user')
        .isLength({min: 4}).withMessage('Debes colocar un nombre válido'),
    body('lastname')
        .isLength({min: 4}).withMessage('Debes colocar un apellido válido'), 
    body('email')
        .isEmail().withMessage('Debes colocar email válido'),    
    body('password')
        .isStrongPassword({minSymbols: 0, minLength: 8}).withMessage('Escribe una contraseña válido')    
];
//Validar que la contraseña y la confirmacion de la contraseña coincidan
 /*const validatePassword = [ 
     body('passwordConfirm').custom(( value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas introducidas no coinciden');
    }
    return true;
  })];

//Configuramos carpeta para guardar imagenes de usuarios
const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) =>{
        let folder = path.join(__dirname, `../../public/img/users`);
        callback(null,folder);
    },
    filename: (req, file, callback) => {
        let userName = req.body.user;
        const imageName = `img-${userName.toLowerCase().replace(/ /g, '-')}-${Date.now().toString().slice(8)}${path.extname(file.originalname)}`;
        callback(null,imageName);
    }
})*/

// de que el archivo recibido es una imagen
/*const fileUpload = multer({
    storage: multerDiskStorage,
    fileFilter: function (req, file, callback) {
        const errors = validationResult(req)
        const ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            req.fileValidationError = {
                msg: 'Debes subir un archivo de imagen válido'
            }
            return callback(null, false, new Error('no es válido el formato'));
        } else {
            callback(null, true)
        }
    }
})*/






module.exports = router;