module.exports = (app) => {
    app.get("/admin/adicionarNoticia", (req, res) => { 
        res.render("admin/form_add_noticia"); 
    });

    app.post("/admin/adicionarNoticia", (req, res) => {
        
        var dbConnection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        var noticia = req.body;

        noticiasModel.addNoticia(noticia, 
            dbConnection, 
            () => { res.redirect("/noticias");});
    });
}