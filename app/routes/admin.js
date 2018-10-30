module.exports = (app) => {
    app.get("/admin/adicionarNoticia", (req, res) => { 
        res.render("admin/form_add_noticia", {validacao : {}, noticia : {}}); 
    });

    app.post("/admin/adicionarNoticia", (req, res) => {
        var noticia = req.body;

        req.assert('nomeDoAutor','É obrigatório informar o autor').notEmpty();
        req.assert('titulo','É obrigatório informar o título').notEmpty();
        req.assert('resumo','É obrigatório informar o resumo').notEmpty();
        req.assert('resumo','O resumo deve ter entre 10 e 100 caracteres').len(10, 100);
        req.assert('dataDaNoticia','É obrigatório informar a data da notícia').notEmpty();
        req.assert('conteudo','É obrigatório informar o conteúdo').notEmpty();

        var erros = req.validationErrors();

        console.log(noticia);

        if (erros){
            res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
            return;
        }

        var dbConnection = app.config.dbConnection();
        var noticiasDao = new app.app.models.NoticiasDAO(dbConnection);

        noticiasDao.addNoticia(noticia, () => { res.redirect("/noticias");});
    });
}