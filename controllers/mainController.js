const path = require('path');

let mainController = {
    //Pagina principal
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/index.html"))
    },

}

module.exports = mainController;