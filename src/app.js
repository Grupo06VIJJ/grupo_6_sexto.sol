const express = require('express');
const path = require('path');
const app = express();
const methoOverride = require("method-override");
const usersRoutes = require("./routes/usersRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const mainRoutes = require("./routes/mainRoutes.js");

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methoOverride("_method"))

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/", mainRoutes);

app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});