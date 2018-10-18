var mySql = require('mysql');

var mySqlConnection = () => {
    return mySql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "portal_noticias"
    });
}

module.exports = () => {
    return mySqlConnection;
}