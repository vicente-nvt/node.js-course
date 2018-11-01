module.exports.obterNoticia = (app, res) => {
    var connection = app.config.dbConnection();
    var noticiasDao = new app.app.models.NoticiasDAO(connection);

    noticiasDao.getNoticia((error, result) => {
        if (error) res.send(error);
        res.render("noticias/noticia", { noticia : result });
    });
}

module.exports.obterTodasAsNoticias = (app, res) => {
    var connection = app.config.dbConnection();
    var noticiasDao = new app.app.models.NoticiasDAO(connection);
    
    noticiasDao.getNoticias((error, result) => {
        if (error)
            res.send(error);
        res.render("noticias/noticias", { noticias : result });
    });
}