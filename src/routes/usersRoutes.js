const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Middlewares
/*const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const administradorMiddleware = require('../middlewares/administradorMiddleware');
const logMiddleware = require('../middlewares/logMiddleware');
/*const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');*/
/*const recordameMiddleware = require('../middlewares/recordameMiddleware');*/

// Formulario de registro
/*router.get('/register', guestMiddleware, usersController.register);*/

// Procesar el registro
/*router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);*/
// Formulario de login
/*router.get('/login', guestMiddleware, usersController.login);*/



// Perfil de Usuario
/*router.get('/profile/', authMiddleware, usersController.profile);*/

// Logout
/*router.get('/logout/', usersController.logout);*/
/*----Rutas para vista de formulario de login----*/
router.get("/login", usersController.login);
router.post('/', usersController.logged);
// Procesar el login
/*router.post('/login', usersController.loginProcess);*/
/*----Rutas para vista de formulario de registro----*/
router.get('/register', usersController.register);
router.post('/register', usersController.create);

/*----Procesar el registro-----*/
/*router.post('/register', fileUpload.single('avatar'),validations,usersController.processRegister);*/
/* LIST*/
router.get("/list", usersController.userList);
router.delete("/delete/:id", usersController.delete);



module.exports = router;