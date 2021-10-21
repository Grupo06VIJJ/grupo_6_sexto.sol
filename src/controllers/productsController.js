const path = require('path');
const fs = require("fs");

let productsController = {
    /*Carrito de compras*/
    // carrito
    cart: (req, res) => {
        res.render('products/cart');
    },
    detail: (req, res) => {
        res.render('products/detail');
    },
    //Pantalla de creacion de productos + logica de guardado
    newProductView: (req, res) => {
        res.render('products/newProduct');
    },
    productSave: (req, res) =>{
        
        let productListJSON = fs.readFileSync(path.resolve(__dirname,"../db/products.json"), {encoding: "utf-8"});
        let productList = [];
        if (productListJSON == ""){
            productList = [];
        }else{
            productList = JSON.parse(productListJSON);
        };
        let product = {
            name: req.body.productName,
            desc: req.body.productDescription,
            img: req.body.productFile,
            category: req.body.productCategory,
            size: req.body.productSize,
            price: req.body.productPrice,
            id: productList.length +1,
        };       
        productList.push(product);
        productJSON = JSON.stringify(productList);
        fs.writeFileSync(path.resolve(__dirname,"../db/products.json"), productJSON);
        res.redirect('/products/list');
    },
    //Listado de los productos existentes
    productList: (req,res)=>{
        let productListJSON = fs.readFileSync(path.resolve(__dirname,"../db/products.json"), {encoding: "utf-8"});
        if (productListJSON != ""){
            let productList = JSON.parse(productListJSON);
            res.render('products/list', {"productList" : productList});
        }else{
            
            res.render('products/list',{"productList" : ""});
        }
        
    },
    //Eliminacion de productos
    productDelete: (req,res) =>{
        let productListJSON = fs.readFileSync(path.resolve(__dirname,"../db/products.json"), {encoding: "utf-8"}); 
        let productList = JSON.parse(productListJSON);
        for(let i =0; i < productList.length; i++){
            if(productList[i].id == req.params.id){
                for(j=i; j<productList.length; j++){
                    productList[j].id = productList[j].id -1
                }
                productList.splice(i,1);
                
            }
        };
        productListJSON = JSON.stringify(productList)
        fs.writeFileSync(path.resolve(__dirname,"../db/products.json"), productListJSON);

        res.redirect('/products/list');
    },
    //Actualizar producto
    productUpdateView: (req, res) => {
        let productListJSON = fs.readFileSync(path.resolve(__dirname,"../db/products.json"), {encoding: "utf-8"});
        let boxValue = JSON.parse(productListJSON);
        for(i= 0;i < boxValue.length; i++){
            if (boxValue[i].id == req.params.id){
                let id = boxValue[i].id -1;
                res.render("products/updateProduct",{"boxValue" : boxValue, "id": id,});
            }            
        }
    },
    productUpdate: (req, res) =>{
        let product = {
            name: req.body.productName,
            desc: req.body.productDescription,
            img: req.body.productFile,
            category: req.body.productCategory,
            size: req.body.productSize,
            price: req.body.productPrice,
            id: req.body.id,
        };
        let productListJSON = fs.readFileSync(path.resolve(__dirname,"../db/products.json"), {encoding: "utf-8"});
        

        let productList = JSON.parse(productListJSON); 

        for(let i =0; i < productList.length; i++){
            if(productList[i].id == product.id){
                productList.splice(i,1,product);
            }
        };
        productListJSON = JSON.stringify(productList);
        fs.writeFileSync(path.resolve(__dirname,"../db/products.json"), productListJSON);
        res.redirect('/products/list');

    },

}
    

    module.exports = productsController;
   