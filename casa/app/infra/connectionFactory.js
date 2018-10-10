var mysql = require('mysql');

function createDbConnection() {
    var config = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'house'
    };
    
    return mysql.createConnection(config);
}

// wrapper
module.exports = function() {
    return createDbConnection;
}