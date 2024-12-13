const express = require('express');
const bodyParser = require('body-parser');
const connection = require('express-myconnection');
const mysql = require('mysql');

const dbCredentials = require('./settings.json');

const port = 8081;

const app = express();
app.use(bodyParser.json());

app.use(
    connection(mysql, {
        host: dbCredentials.host,
        user: dbCredentials.user,
        password: dbCredentials.password,
        database: dbCredentials.database
    }, 'pool')
);

app.get('/api/angajati', (req, res) => {
    req.getConnection((err, connection) => {
        if (err) {
            res.status(500).json({"error": "Database error"});
            return;
        }

        connection.query('SELECT ID_Angajat, Nume, Prenume, Functie FROM angajati', (err, results) => {
            if (err) {
                res.status(500).json({"error": "Query error."});
                return;
            }

            res.json(results);
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});