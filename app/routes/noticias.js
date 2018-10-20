module.exports = (app) => {
    app.get('/noticias', (req, res) => { 
        var conexao = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.getNoticias(conexao, (error, result) => {
            if (error) 
                res.send(error);

                res.render("noticias/noticias", { noticias : result });
        });
    });
}