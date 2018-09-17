var express = require('express');
var app = express();

app.set('view engine','ejs');

app.listen(3000, () => {console.log("Servidor rodando com Express")});

app.get('/', (req, res) => { 
    res.send('<html><body>Portal de Notícias</body></html>'); 
});
app.get('/tecnologia', (req, res) => { 
    res.send('<html><body>Notícias de Tecnologia</body></html>'); 
});

app.get('/beleza', (req, res) => { 
    res.send('<html><body>Notícias de Beleza</body></html>'); 
});

app.get('/moda', (req, res) => { 
    res.send('<html><body>Notícias de Moda</body></html>'); 
});

