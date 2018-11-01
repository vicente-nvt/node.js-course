module.exports = (application) => {
    application.get('/noticias', (req, res) => {
        application.app.controllers.noticias.obterTodasAsNoticias(application, res);
    });

    application.get('/noticia', (req, res) => {
        application.app.controllers.noticias.obterNoticia(application, res);
    });
}