/* APP -------------------------------- */
const express = require('express');
const path = require('path');
const app = express();
const methoOverride = require("method-override");
/*const session= require( "express-session");
const cookieParser = require('cookie-parser');

/*requerir rutas*/
const usersRoutes = require("./routes/usersRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const mainRoutes = require("./routes/mainRoutes.js");

//middlewares
/*const recordarUsuario = require('./src/middlewares/recordameMiddleware');*/

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.urlencoded({ extended:false}));
app.use(express.json( ));
app.use(methoOverride("_method"))


/*estilos*/
app.use('/', express.static(path.resolve(__dirname, '../public'))); 

/*Usuarios*/
app.use("/users", usersRoutes);

//Productos
app.use("/products", productsRoutes);

//Home y variados
app.use("/", mainRoutes);
/*app.use(session({secret:"secreto"}));

//Configuración de session
/*app.use(session({
    secret: 'cookie_secret',
    resave: true,
    saveUninitialized: true
}));*/

//Configuración de cookies
/*app.use(cookieParser());

//Verificando si hay cookie con usuario
/*app.use(recordarUsuario);*/


app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});
