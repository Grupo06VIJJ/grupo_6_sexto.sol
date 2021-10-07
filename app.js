/* APP -------------------------------- */
const express = require('express');
const path = require('path');
const app = express();
const routesUsers = require("./routes/users");
const routesProducts = require("./routes/products.js");
const routesMain = require("./routes/main.js");


;


app.use('/', express.static(path.resolve(__dirname, './public')));
app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});


//Usuarios
app.use("/users", routesUsers);

//Productos
app.use("/products", routesProducts);

//Home y variados
app.use("/", routesMain);
















