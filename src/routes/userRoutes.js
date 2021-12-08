const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');
const {check, body, validationResult} = require('express-validator');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const logMiddleware = require ('../middlewares/logMiddleware');

//Requerimos multer para traer archivos
const multer = require('multer');

//Campos a validar en el formulario de registro
const validateRegister = [
    body('user')
        .isLength({min: 4}).withMessage('Debes colocar un nombre válido'),
    body('lastname')
        .isLength({min: 4}).withMessage('Debes colocar un apellido válido'), 
    body('email')
        .isEmail().withMessage('Debes colocar email válido'),    
    body('password')
        .isStrongPassword({minSymbols: 0, minLength: 8}).withMessage('Escribe un formato de contraseña válido')    
];
//Validar que la contraseña y la confirmacion de la contraseña coincidan
 const validatePassword = [ 
     body('passwordConfirm').custom(( value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas introducidas no coinciden');
    }
    return true;
  })];

//Configuramos destino y nombre de archivos
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
})

//Validación de que el archivo recibido es una imagen
const fileUpload = multer({
    storage: multerDiskStorage,
    fileFilter: function (req, file, callback) {
        const errors = validationResult(req)
        const ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            req.fileValidationError = {
                msg: 'Debes subir un archivo de imagen válido'
            }
            return callback(null, false, new Error('goes wrong on the mimetype'));
        } else {
            callback(null, true)
        }
    }
})




/*----Rutas para vista de formulario de login----*/
router.get('/login', guestMiddleware, userController.login);
router.post('/', userController.logUser);

/*----Rutas para vista de formulario de registro----*/
router.get('/register', guestMiddleware, userController.register);
router.post('/register', fileUpload.single('imagenUsuario'), validateRegister, validatePassword, userController.procesarRegistro);
//router.post('/register', guestMiddleware, validateRegister, validatePassword, userController.procesarRegistro);

/*----Ruta para info de perfil de usuario-----*/
router.get('/:id/profile', logMiddleware, userController.profile);

/*----Ruta para cerrar sesion-----*/
router.put('/logoff', userController.logoff);

module.exports = router;
