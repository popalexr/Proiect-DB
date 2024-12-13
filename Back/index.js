const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = require('express-myconnection');
const cors = require('cors');

const dbCredentials = require('./settings.json');

const app = express();
app.use(bodyParser.json());
app.use(cors());

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

app.get('/api/angajati/:id', (req, res) => {
    req.getConnection((err, connection) => {
        if (err) {
            res.status(500).json({"error": "Database error"});
            return;
        }

        connection.query('SELECT ID_Angajat, Nume, Prenume, Functie FROM angajati WHERE ID_Angajat = ?', [req.params.id], (err, results) => {
            if (err) {
                res.status(500).json({"error": "Query error."});
                return;
            }

            if (results.length === 0) {
                res.status(404).json({"error": "Not found."});
                return;
            }

            res.json(results[0]);
        });
    });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});