module.exports = function(app) {
    app.get('/produtos', function(request, response) {
        var sql = require('mssql');

        var config = {
            user: '',
            password: '',
            server: '', 
            database: ''
        };

        sql.connect(config, function(err) {
            if(err) console.log(err);

            var req = new sql.Request();

            req.query('select * from tb_usuario', function(err, recordset) {
                if(err) console.log(err)

                console.log(recordset);
            });
        });

        sql.close();
        
        response.render("produtos/lista");
    });
}