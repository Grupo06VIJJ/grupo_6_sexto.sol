const path = require('path');
const fs = require("fs");

let productsController = {


    cart: (req, res) => {
        res.render('products/cart');
    },


    detail: (req, res) => {
        res.render('products/detail');
    },


    newProductView: (req, res) => {
        res.render('products/create');
    },


    productSave: (req, res) => {

        let productListJSON = fs.readFileSync(path.resolve(__dirname, "../db/products.json"), { encoding: "utf-8" });
        let productList = [];

        if (productListJSON == "") {
            productList = [];
        } else {
            productList = JSON.parse(productListJSON);
        };

        let product = {
            id: productList.length + 1,
            name: req.body.productName,
            price: req.body.productPrice,
            category: req.body.productCategory,
            desc: req.body.productDescription,
            img: req.body.productFile,
        };

        productList.push(product);
        productJSON = JSON.stringify(productList);
        fs.writeFileSync(path.resolve(__dirname, "../db/products.json"), productJSON);
        res.redirect('/products/list');
    },

    productList: (req, res) => {
        let productListJSON = fs.readFileSync(path.resolve(__dirname, "../db/products.json"), { encoding: "utf-8" });

        if (productListJSON != "") {
            let productList = JSON.parse(productListJSON);

            res.render('products/list', { "productList": productList });
        } else {

            res.render('products/list', { "productList": "" });
        }
    },


    productDelete: (req, res) => {

        let productListJSON = fs.readFileSync(path.resolve(__dirname, "../db/products.json"), { encoding: "utf-8" });
        let productList = JSON.parse(productListJSON);

        for (let i = 0; i < productList.length; i++) {
            if (productList[i].id == req.params.id) {
                for (j = i; j < productList.length; j++) {
                    productList[j].id = productList[j].id - 1
                }
                productList.splice(i, 1);

            }
        };
        productListJSON = JSON.stringify(productList)
        fs.writeFileSync(path.resolve(__dirname, "../db/products.json"), productListJSON);

        res.redirect('/products/list');
    },


    productUpdateView: (req, res) => {
        let productListJSON = fs.readFileSync(path.resolve(__dirname, "../db/products.json"), { encoding: "utf-8" });
        let boxValue = JSON.parse(productListJSON);
        for (i = 0; i < boxValue.length; i++) {
            if (boxValue[i].id == req.params.id) {
                let id = boxValue[i].id - 1;
                res.render("products/edit", { "boxValue": boxValue, "id": id, });
            }
        }
    },

    productUpdate: (req, res) => {
        let product = {
            id: productList.length + 1,
            name: req.body.productName,
            price: req.body.productPrice,
            category: req.body.productCategory,
            desc: req.body.productDescription,
            img: req.body.productFile,
        };
        let productListJSON = fs.readFileSync(path.resolve(__dirname, "../db/products.json"), { encoding: "utf-8" });

        let productList = JSON.parse(productListJSON);

        for (let i = 0; i < productList.length; i++) {
            if (productList[i].id == product.id) {
                productList.splice(i, 1, product);
            }
        };
        productListJSON = JSON.stringify(productList);
        fs.writeFileSync(path.resolve(__dirname, "../db/products.json"), productListJSON);
        res.redirect('/products/list');

    },

}


module.exports = productsController;