const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const session = require('express-session');
/*const bcrypt = require('bcrypt');*/
const cookieParser = require('cookie-parser');
/* formularios */
const methodOverride = require("method-override");

/* solicitar rutas */
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const mainRoutes = require("./routes/mainRoutes.js");


// middlewares
/*const rememberUser = require('./src/middlewares/rememberMiddleware');*/

/* templates */
app.set('view engine', 'ejs');

/* vistas */
app.set('views', path.resolve(__dirname, 'views'));

/* public */
app.use('/', express.static(path.resolve(__dirname, '../public')));

/* formularios y json */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"))

//Configuración de session
app.use(session({
    secret: 'cookie_secret',
    resave: true,
    saveUninitialized: true
}));

//Configuración de cookies
app.use(cookieParser());

//verificar recordar usuario no funciona porque necesito prueba
/*app.use(rememberUser);*/


/* rutas */

app.use('/user', userRoutes);
app.use("/products", productRoutes);
app.use("/", mainRoutes);



/* error 404 */
app.use((req, res, next) => {
    res.status(404).render("pagina-no-encontrada")
});




/* PORT o 3000 (heroku y local) */
app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});