module.exports = (app) => {
    app.get('/noticia', (req, res) => { 
        var conexao = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(conexao,  (error, result) => {
            if (error) res.send(error);
            res.render("noticias/noticia", { noticia : result });
        });
    });
}