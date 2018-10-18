module.exports = (app) => {
    app.get('/noticias', (req, res) => { 
        var conexao = app.config.dbConnection();

        getData(conexao, 
            (error, result) => {
                if (error) res.send(error);
                res.render("noticias/noticias", { noticias : result });
            });
    });
}

function getData(connection, callback) {
    var sql = "SELECT * FROM noticias";
    connection.query(sql, (error, result) => { callback(error, result) });
}
