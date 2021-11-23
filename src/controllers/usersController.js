
const fs = require("fs");
const { json } = require('express');
const path = require('path');
const { stringify } = require('querystring');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

let usersController = {
    // pantalla de login
    login: (req, res) => {
        res.render('users/login');
    },
    /*pantalla desp de loguearse, falta el if si ya se logueó*/
    logged: (req, res) => {
        res.render('users/logged');
    },
    
    //listado de todos los usuarios
    userList: (req,res) =>{

        let userListJSON = fs.readFileSync(path.resolve(__dirname,"../db/usuarios.json"), {encoding: "utf-8"});
        if (userListJSON != ""){
            let userList = JSON.parse(userListJSON);
            res.render('users/list', {"userList" : userList});
        }else{
            
            res.render('users/list',{"userList" : ""});
        }
        
    },
    //formulario de registro
    register: (req, res) => {
        res.render('users/register');
    },
    create: (req, res) => {
        let user= {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        };
        let userListJSON = fs.readFileSync(path.resolve(__dirname,"../db/usuarios.json"), {encoding: "utf-8"});
        let userList = [];
        if (userListJSON == ""){
            userList = [];
        }else{
            userList = JSON.parse(userListJSON);
        };        
        userList.push(user);
        userJSON = JSON.stringify(userList);
        fs.writeFileSync(path.resolve(__dirname,"../db/usuarios.json"), userJSON);
        res.redirect('/users/list');
    },
    delete: (req,res) =>{
        let userListJSON = fs.readFileSync(path.resolve(__dirname,"../db/usuarios.json"), {encoding: "utf-8"}); 
        userList = JSON.parse(userListJSON);
        for(let i =0; i < userList.length; i++){
            if(userList[i].name == req.params.id){
                userList.splice(i,1);
            }
        }        
        userListJSON = JSON.stringify(userList)
        fs.writeFileSync(path.resolve(__dirname,"../db/usuarios.json"), userListJSON);
        res.redirect('/users/list');
    },
    update: (req, res) =>{
        let userListJSON = fs.readFileSync(path.resolve(__dirname,"../db/usuarios.json"), {encoding: "utf-8"}); 
        userList = JSON.parse(userListJSON);
        for(let i =0; i < userList.length; i++){
            if(userList[i].email == req.params.id){
                userList[i].name = req.body.name;
            }
        }
        
        userListJSON = JSON.stringify(userList)
        fs.writeFileSync(path.resolve(__dirname,"../db/usuarios.json"), userListJSON);

        res.redirect('/users/list');
    },
    // Login (POST) - Session de usuario
   /* processLogin: (req, res) => {

        // Verifico si el usuario está registrado
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                // Guardo al usuario en Session pero borro su contraseña
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                // Creo una cookie para guardar el email, si el usuario opto por ser recordado
                if (req.body.remember) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60})
                }

                return res.redirect('/')
            }   
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Email o contraseña inválida'
                    }
                }
            })     
        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Email no registrado'
                }
            }
        })
    },
    profile: (req, res) => {
		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}*/
} 


module.exports = usersController;