var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/altosjireh', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Conexión exitosa");
        app.listen(port, function() {
            console.log("Servidor del API REST escuchando en http://localhost:" + port);
        });
    }
})