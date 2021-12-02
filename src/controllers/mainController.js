let mainController = {
    //Pagina principal
    home: (req, res) => {
        res.render('home')
    },
    service: (req, res) => {
        res.render('service');
    },
}
module.exports = mainController;