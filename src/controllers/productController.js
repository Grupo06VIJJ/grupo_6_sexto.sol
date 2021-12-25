const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');

const productController = {
    productDetail: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        const IdProduct = req.params.id;
        const product = products.find(article => article.id == IdProduct);
        res.render('./products/productDetail', {product: product, user: req.session.user ? req.session.user : undefined });     
    },
    detail: (req, res) => {
        res.render('products/detail');
    },
    productCart : (req, res) => {
        res.render('./products/productCart')
    },
    productCart : (req, res) => {
        res.render('./products/productCart', {user: req.session.user ? req.session.user : undefined});
    },
    cart : (req, res) => {
        res.render('./products/productCart', {user: req.session.user ? req.session.user : undefined});
    },
    sinflor : (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        const sinflor = products.filter(product => product.category == 'sinflor')
        res.render('./products/sinflor', {products: sinflor, user: req.session.user ? req.session.user : undefined});
    },
    conflor : (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        const conflor = products.filter(product => product.category == 'conflor');
        res.render('./products/conflor', {products: conflor, user: req.session.user ? req.session.user : undefined });
    },
    
    create: (req,res) => {
        res.render('./admin/addProduct', {user: req.session.user ? req.session.user : undefined });
    },
  

    //Pantalla de creacion de productos + logica de guardado en backup
    newProductView: (req, res) => {
        res.render('products/create');
    },
    productSave: (req, res) => {

        let productListJSON = fs.readFileSync(path.resolve(__dirname, "../data/products.json"), { encoding: "utf-8" });
        let productList = [];
        if (productListJSON == "") {
            productList = [];
        } else {
            productList = JSON.parse(productListJSON);
        };
        

        let product = {
            id: productList.length + 1,
            category: req.body.productCategory,
            name: req.body.productName,
            desc: req.body.productDescription,
            img: req.body.productFile,
            size: req.body.productSize,
            price: req.body.productPrice,

        };
        productList.push(product);
        productJSON = JSON.stringify(productList);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), productJSON);
        res.redirect('/products/list');
    },
    //Listado de los productos existentes en backup
    productList: (req, res) => {
        let productListJSON = fs.readFileSync(path.resolve(__dirname, "../data/products.json"), { encoding: "utf-8" });
        if (productListJSON != "") {
            let productList = JSON.parse(productListJSON);
            res.render('products/list', { "productList": productList });
        } else {

            res.render('products/list', { "productList": "" });
        }

    },
    store: (req,res) =>{
        //Lógica para almacenar informacion y crear producto
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        let productImages;
        const productName = req.body.name,
        productDescription = req.body.description,
        productPrice = parseFloat(req.body.price),
        productCategory = req.body.category,
        productMaterial = req.body.materials,
        productQuantS = parseInt(req.body.quantityS) || 0,
        productQuantM = parseInt(req.body.quantityM) || 0,
        productQuantL = parseInt(req.body.quantityL) || 0;

        switch(req.files.length){
            case 0:
                productImages = ["default-image.svg","default-image.svg"];
                break;
            case 1:
                if(req.files[0].fieldname == "image1"){
                    productImages = [req.files[0].filename, "default-image.svg"];
                } else {
                    productImages = ["default-image.svg", req.files[0].filename];
                }
                break;
            case 2:
                productImages = [req.files[0].filename, req.files[1].filename];
                break;
        }

        const newProduct ={
            id: products[products.length -1].id + 1,
            category: productCategory,
            name: productName,
            description: productDescription,
            price: productPrice,
          
            size: {
                S: productQuantS,
                M: productQuantM,
                L: productQuantL
            },
            images: productImages,
            material: productMaterial
        }
        products.push(newProduct)
                //Reescribiendo productos
                fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
                res.redirect('/products');
    },
    edit: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        const productID = req.params.id;
        const productToEdit = products.find( product => product.id == productID)
        res.render('./products/editProduct', {product: productToEdit, user: req.session.user ? req.session.user : undefined });
    },
    update: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        const productID = req.params.id;
        let productToEdit = products.find( product => product.id == productID)
        let productImages;

        // Ordenamos la info recibida en el formulario
        const productName = req.body.name,
                productCategory = req.body.category,
                productDescription = req.body.description,
                productPrice = parseFloat(req.body.price),
                productMaterial = req.body.materials,
                productQuantS = parseInt(req.body.quantityS) || 0,
                productQuantM = parseInt(req.body.quantityM) || 0,
                productQuantL = parseInt(req.body.quantityL) || 0;
        
        switch(req.files.length){
            case 0:
                productImages = productToEdit.images;
                break;
            case 1:
                if(req.files[0].fieldname == "image1"){
                    productImages = [req.files[0].filename, productToEdit.images[1]];
                } else {
                    productImages = [productToEdit.images[0], req.files[0].filename];
                }
                break;
            case 2:
                productImages = [req.files[0].filename, req.files[1].filename];
                break;
        }

        //Lógica para almacenar informacion y editar producto
        productToEdit ={
            id: productToEdit.id,
            category: productCategory,
            name: productName,
            description: productDescription,
            price: productPrice,
            
            size: {
                S: productToEdit.size.S + productQuantS,
                M: productToEdit.size.M + productQuantM,
                L: productToEdit.size.L + productQuantL
            },
            images: productImages,
            material: productMaterial
        }
        const newProducts = products.map( product => {
            if(product.id === productToEdit.id) {
                return product = {...productToEdit}
            } else {
                return product
            }
        })

        //Reescribiendo productos
        fs.writeFileSync(productsPath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/products');
    },
    delete: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

        //Lógica para borrar producto
         let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);
        fs.writeFileSync(productsPath, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/');

    },
    
    productos: (req,res) => {
        const allProducts = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        res.render('./products/products', { products: allProducts, user: req.session.user ? req.session.user : undefined });
    }
}

    //Actualizar producto en backup
    productUpdateView: (req, res) => {
        let productListJSON = fs.readFileSync(path.resolve(__dirname, "../data/products.json"), { encoding: "utf-8" });
        let boxValue = JSON.parse(productListJSON);
        for (i = 0; i < boxValue.length; i++) {
            if (boxValue[i].id == req.params.id) {
                let id = boxValue[i].id - 1;
                res.render("products/edit", { "boxValue": boxValue, "id": id, });
              
            }
        }
        

       
    },
   



module.exports = productController;