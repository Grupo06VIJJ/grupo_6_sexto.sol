const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
/*const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));*/
let mainController = {
    //Pagina principal
  /* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */


    home: (req, res) => {
        res.render(path.join(__dirname, '../views/home.ejs'));
     res.render('home');
    

    },
    service: (req, res) => {
        res.render('service');
    },
}
module.exports = mainController;