/*const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../db/usuarios.json');

const remember = (req, res, next) => {
    if(req.cookies.remember != undefined && req.session.user == undefined) {
        const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
        const email = req.cookies.remember;
        const loggedUser = users.find(user => user.email == email);
        req.session.user = loggedUser;
    }
    next();
}*/

module.exports = router;