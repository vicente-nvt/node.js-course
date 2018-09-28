var dbConnection = require("../../config/dbConnection");

module.exports = (app) => {
    app.get('/noticias', (req, res) => { 
         getData((error, result) => {
            if (error) res.send(error);
            res.render("noticias/noticias", { noticias: result });
        });
    });
}

function getData(callback) {
    var sql = "SELECT * FROM noticias";
    var connection = dbConnection();
    connection.query(sql, (error, result) => { callback(error, result) });
}
