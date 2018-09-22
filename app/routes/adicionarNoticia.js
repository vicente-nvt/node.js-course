module.exports = (app) => {
    app.get('/adicionarNoticia', (req, res) => { 
        res.render("admin/form_add_noticia"); 
    });
}



