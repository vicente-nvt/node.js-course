module.exports = () => {
    this.getNoticia = (connection, callback) => {
        var sql = "SELECT * FROM noticias where idNoticia = 2";
        connection.query(sql, callback);
    }

    this.getNoticias = (connection, callback) => {
        var sql = "SELECT * FROM noticias";
        connection.query(sql, callback);
    }

    return this;
}