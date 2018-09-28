var mySql = require('mysql');

module.exports = () => {
    return mySql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "portal_noticias"
    });
}