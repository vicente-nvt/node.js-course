module.exports = (app) => {
    app.get('/noticias', (req, res) => { 
        var connection = app.config.dbConnection();
        var noticiasDao = new app.app.models.NoticiasDAO(connection);
        
        noticiasDao.getNoticias((error, result) => {
            if (error) 
                res.send(error);
                res.render("noticias/noticias", { noticias : result });
        });
    });
}