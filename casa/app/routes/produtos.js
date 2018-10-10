module.exports = function(app) {
    app.get('/produtos', function(request, response) {
        var connection = app.infra.connectionFactory;

        connection.query('select id, titulo, descricao, preco from livros', function(err, res) {
            response.render('produtos/lista', {lista: res});
        });
        connection.end();
    });
}