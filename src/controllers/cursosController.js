/*const cursosController= {}
cursosController.cursos = (req,res)=>{ 
res.render ('cursos')
}*/
const path = require('path');
let cursosController = {
    //LISTADO DE CURSOS
    register: (req, res) => {
        res.render('cursos')
    },
}
module.exports = cursosController;