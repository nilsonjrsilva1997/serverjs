var app = require('./config/express')();

app.listen(4200, function() {
    console.log("servidor rodando");
});