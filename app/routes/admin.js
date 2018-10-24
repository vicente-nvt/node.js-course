module.exports = (app) => {
    app.get("/admin/adicionarNoticia", (req, res) => { 
        res.render("admin/form_add_noticia"); 
    });

    app.post("/admin/adicionarNoticia", (req, res) => {
        
        var dbConnection = app.config.dbConnection();
        var noticiasDao = new app.app.models.NoticiasDAO(dbConnection);
        var noticia = req.body;

        noticiasDao.addNoticia(noticia, () => { res.redirect("/noticias");});
    });
}