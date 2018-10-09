var app = require('./config/express')();

app.get('/produtos', function(request, response) {
    console.log('listando');
    response.render("produtos/lista");
});

app.listen(4200, function() {
    console.log("servidor rodando");
});