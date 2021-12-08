const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const session = require('express-session');
/*const bcrypt = require('bcrypt');*/
const cookieParser = require('cookie-parser');
/* formularios */
const methodOverride = require("method-override");
// 
app.set('view engine', 'ejs');

//
app.set('views', path.resolve(__dirname, 'views'));

//
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"))

// public
app.use('/', express.static(path.resolve(__dirname, '../public')));

// rutas
const userRoutes = require("./routes/userRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const mainRoutes = require("./routes/mainRoutes.js");

app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/", mainRoutes);

// error
/* error 404 */
app.use((req, res, next) => {
    res.status(404).render("pagina-no-encontrada")
});


// 
app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en puerto 3000');
});