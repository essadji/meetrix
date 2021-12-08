const X = require('express');
const APP = X();
const PORT = 2002;

APP.listen(PORT, () => {
    console.log("Hi, I'm alive, up and running...")
})

APP.use('/', X.static(__dirname + '/FRONT'));
APP.use('/data', require('./router.js'))