
let mainController = {
    //Pagina principal
    home: (req, res) => {
        res.render('index')
    },
    service: (req, res) => {
        res.render('service');
    },
}
module.exports = mainController;