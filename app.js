const express=require('express')
const path=require('path')
const app =express();
app.use ('/' , express.static(path.resolve(__dirname ,'./public')));


app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.get("/ofertas", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
/* Register */
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.post('/register', (req,res)=> {
    res.send('Ya estás registrado');
});
/* Login */
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.post('/login', (req,res)=>{
    res.sendFile(__dirname +'/views/index.html');
});
app.listen(process.env.PORT || 3000,function () {
    console.log(`Servidor corriendo en puerto 3000`)
});

