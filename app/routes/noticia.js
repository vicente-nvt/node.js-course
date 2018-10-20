module.exports = (app) => {
    app.get('/noticia', (req, res) => { 
        var conexao = app.config.dbConnection();

        getData(conexao, 
            (error, result) => {
                if (error) res.send(error);
                res.render("noticias/noticia", { noticia : result });
            });
    });
}

function getData(connection, callback) {
    var sql = "SELECT * FROM noticias where idNoticia = 2";
    connection.query(sql, (error, result) => { callback(error, result) });
}
