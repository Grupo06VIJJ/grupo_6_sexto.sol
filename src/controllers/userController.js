
const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../data/users.json');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const userController = {
    login: (req, res) => {
        res.render('./users/login'); 
    },
    register: (req, res) => {
        res.render('./users/register'); 
    },
    procesarRegistro: (req,res)=> {

        //Logica para validar los campos recibidos
        let errorsList = validationResult(req);
        let errors = errorsList.array()
        if(errorsList.isEmpty() && !req.fileValidationError){
            //Lógica para almacenar usuarios nuevos
            const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
            let userName = req.body.user,
            lastNameUser = req.body.lastname,
            email = req.body.email,
            userImage = "",
            password = bcrypt.hashSync(req.body.password,10);

            //Asignamos el nombre del archivo o la imagen por default
            req.file ? userImage =  req.file.filename : userImage = "default-user";

            //Condicion para diferenciar usuarios o administradores
            email.search('@sextosol') != -1 ? category = "admin" : category = "user";

                //Creamos el JSON con los datos del nuevo usuario
                const newUser ={
                    id: users[users.length -1].id + 1,
                    first_name: userName,
                    last_name: lastNameUser,
                    email: email,
                    password: password,
                    category: category,
                    image: userImage
                }

                users.push(newUser);

                //Reescribiendo usuarios
                fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));

                res.redirect('/');
        }
        else{
            if(req.file){
                const imgPath = path.join(__dirname, `../../public/img/users/${req.file.filename}`)
                fs.unlink(imgPath, error => {
                    if (error) console.log(error);
                })
            }
            if(req.fileValidationError) errors.push((req.fileValidationError))
            res.render('./users/register',{errors: errors, old:req.body});
        }

    },
    logUser: (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        const users = JSON.parse(fs.readFileSync(usersPath,'utf-8')); 
        const user = users.find(user => user.email == email);
        if(user === undefined || !bcrypt.compareSync(password,user.password)){
            res.render('./users/login', {msg: 'Tu correo o tu contraseña son incorrectos'})
        }
        else {
            req.session.user = user;
            if(req.body.remember != undefined){
                res.cookie('remember', user.email, {maxAge: 60000})
            }
            res.redirect('/');
        }
    },
    profile: (req,res) => {
        if(req.session.user) {
            res.render('./users/profile', {user: req.session.user ? req.session.user : undefined});
        } else {
            res.render('./users/profile');
        }
       
    },
  
    logoff: (req, res) => {
        req.session.destroy();
        res.clearCookie('remember');
        res.redirect('/')
        
    }
}
module.exports = userController;