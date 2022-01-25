const path = require('path');
const fs = require('fs');
const db = require ('../database/models')

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
        res.render('servicio');
    },
    sobrenosotros: (req, res) => {
        res.render('sobrenosotros');
    },
    contacto: (req, res) => {
        res.render('contacto');
    },
        arrepentimiento: (req, res) => {
        res.render('arrepentimiento');
    },
    comocomprar:(req, res) => {
        res.render('como-comprar');
},
}
module.exports = mainController;