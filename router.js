const X = require('express');
const GO = X.Router();

GO.route('/').all((req, res) => {
    res.send("OK !!!!!")
})

module.exports = GO;