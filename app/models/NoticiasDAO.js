class NoticiasDAO {
    constructor(connection) {
        this._connection = connection;
    }
    getNoticia(callback) {
        var sql = "SELECT * FROM noticias where idNoticia = 2";
        this._connection.query(sql, callback);
    }
    getNoticias(callback) {
        var sql = "SELECT * FROM noticias";
        this._connection.query(sql, callback);
    }
    addNoticia(noticia, callback) {
        var sql = "insert into noticias set ?";
        this._connection.query(sql, noticia, callback);
    }
}

module.exports = () => {
    return NoticiasDAO;
 }