module.exports = (app) => {
    app.get('/noticia', (req, res) => { 
        var connection = app.config.dbConnection();
        var noticiasDao = new app.app.models.NoticiasDAO(connection);

        noticiasDao.getNoticia((error, result) => {
            if (error) res.send(error);
            res.render("noticias/noticia", { noticia : result });
        });
    });
}