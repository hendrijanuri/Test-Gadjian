const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!Anakharam123',
    database: 'gadjian_employees',
    port: '3306'
});

module.exports = db