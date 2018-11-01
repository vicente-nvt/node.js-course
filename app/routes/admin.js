module.exports = (application) => {
    application.get("/admin/adicionarNoticia", (req, res) => { 
        application.app.controllers.admin.formularioDeCadastroDeNoticia(res);
    });

    application.post("/admin/adicionarNoticia", (req, res) => {
        application.app.controllers.admin.adicionarNoticia(application, req, res);
    });
}