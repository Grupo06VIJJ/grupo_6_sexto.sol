const path = require('path');
let productsController = {
    //Carrito de compras
    cart: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/cart.html'));
    },
}
module.exports = productsController;