const path = require('path');

let productsController = {
    /*Carrito de compras*/
    // carrito
    cart: (req, res) => {
        res.render('./products/cart.ejs');
    },
    detail: (req, res) => {
        res.render('./products/detail.ejs');
    },
    //Cargar y mostrar el listado de producto
    newproduct: (req, res) => {
        res.render('./products/newproduct.ejs');
    },
    /*Actualizar el listado de productos*/
    edicion: (req,res)=> {
        res.render('products/updateproduct.ejs');
    },
   /* updateproduct: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/updateproduct.ejs'));
    },*/
}
    module.exports = productsController;
   