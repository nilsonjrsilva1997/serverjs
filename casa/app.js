var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/produtos', function(request, response) {
    response.render("produtos/lista");
});

app.listen(4200, function() {
    console.log("servidor rodando");
});