
const fs = require("fs");
const { json } = require('express');
const path = require('path');
const { stringify } = require('querystring');

let usersController = {
    /*login*/
    // pantalla de login
    login: (req, res) => {
        res.render('users/login');
    },
    //pantalla desp de loguearse
    logged: (req, res) => {
        res.render('users/logged');
    },
    userList: (req,res) =>{
        let userListJSON = fs.readFileSync(path.resolve("../public/usuarios.json"), {encoding: "utf-8"});
        let userList = JSON.parse(userListJSON);
        res.render('users/list', {"userList" : userList});
    },
    /*registro*/
    //formulario de registro
    register: (req, res) => {
        res.render('users/register');
    },
    //pantalla desp del registro
    create: (req, res) => {
        let user= {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        };
        let userListJSON = fs.readFileSync(path.resolve("../public/usuarios.json"), {encoding: "utf-8"});
        let userList = [];

        if (userListJSON == ""){
            userList = [];
        }else{
            userList = JSON.parse(userListJSON);
        };
        
        userList.push(user);
        userJSON = JSON.stringify(userList);
        fs.writeFileSync(path.resolve("../public/usuarios.json"), userJSON);
        res.redirect('/users/list');
    },
}
module.exports = usersController;