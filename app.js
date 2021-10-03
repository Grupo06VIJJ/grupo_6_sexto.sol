/* APP -------------------------------- */
const express = require('express')
const path = require('path')
const app = express();
app.use('/', express.static(path.resolve(__dirname, './public')));
app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`)
});

/* INDEX -------------------------------- */

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

/* LOGIN -------------------------------- */
// login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

// logged
app.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/logged.html'));
});

/* REGISTER -------------------------------- */
// register
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

// logged
app.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registered.html'));
});

/* CART -------------------------------- */
// cart
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/cart.html'));
});
/* Shopping-cart */
app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
})
app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
})

// logged
app.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registered.html'));
});
