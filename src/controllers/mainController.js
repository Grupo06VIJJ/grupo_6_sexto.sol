const path = require('path');
let mainController = {
    //Pagina principal
    home: (req, res) => {
        res.render('index.ejs')
    },
}
module.exports = mainController;