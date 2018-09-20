var express = require('express');
var app = express();

app.set('view engine','ejs');

app.listen(3000, () => {console.log("Servidor rodando com Express")});

app.get('/', (req, res) => { 
    res.render("home/index"); 
});

app.get('/adicionarNoticia', (req, res) => { 
    res.render("admin/form_add_noticia"); 
});

app.get('/noticias', (req, res) => { 
    res.render("noticias/noticias"); 
});