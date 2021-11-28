const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const session = require('express-session');
const bcrypt = require('bcrypt');

/* formularios */
const methodOverride = require("method-override");

/* templates */
app.set('view engine', 'ejs');

/* vistas */
app.set('views', path.resolve(__dirname, 'views'));

/* formularios y json */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"))

/* public */
app.use('/', express.static(path.resolve(__dirname, '../public')));

/* rutas */
const usersRoutes = require("./routes/usersRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const mainRoutes = require("./routes/mainRoutes.js");

/* rutas */
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/", mainRoutes);

/* error 404 */
app.use((req, res, next) => {
    res.status(404).render("pagina-no-encontrada")
});

/* PORT o 3000 (heroku y local) */
app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});