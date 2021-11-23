const express = require('express');
const path = require('path');
const app = express();
const session=require ('express-session');
const bcrypt =require ('bcrypt');
const methoOverride = require("method-override");
const usersRoutes = require("./routes/usersRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const mainRoutes = require("./routes/mainRoutes.js");
/*const res = require('express/lib/response');*/

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methoOverride("_method"))

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/", mainRoutes);

//hashear contraseña
/*app.use('/users/login', (req, res)=>{
    const user=req.body.user;
    const password=req.body.password;
    if (user=='admin'&& password ='12345'{
    let passwordhash= await bcrypt.hash(password,8);
        res.json({
            message:"Autenticación exitosa",
            passwordhash:passwordhash
    });
    } else {
        res.json({
            message:"Ingrese correctamente sus credenciales"
    });
    };
})
app.get ('/compare', (req,res)=>{
    let hashSaved=$2b$10$x3X.nWT.e9Q5JuNJw5Tdxuzv3eUD8TnrdskpqRHYJszd0qnk3wyV.
});
let compare= bcrypt.compareSync('12345'.hashSaved)
if (compare){
    res.json('ok');
}else{
    res.json ('No son iguales');
}
});*/

app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});