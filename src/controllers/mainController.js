const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');

const mainController = {
    home: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        let catProducts =[];
        for(let i = 0; i<=3; i++){
            catProducts[i]= products[i]
        }
        res.render('home', {products: catProducts, user: req.session.user ? req.session.user : undefined});        
    },
    
    service: (req, res) => {
        res.render('service');
    },
    sobrenosotros: (req, res) => {
        res.render('sobrenosotros', {user: req.session.user ? req.session.user : undefined});
    },
    contacto: (req, res) => {
        res.render('contacto', {user: req.session.user ? req.session.user : undefined});
    },
    arrepentimiento: (req, res) => {
        res.render('arrepentimiento', {user: req.session.user ? req.session.user : undefined});
    },
}
module.exports = mainController;