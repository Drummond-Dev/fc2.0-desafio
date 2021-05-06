const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const conn = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'dd4417',
    database: 'pfa'
});

conn.connect((err) => {
    if (err) {
        console.log('Error when try to connect on MySQL Container.');
        return;
    }
    console.log('Connect established with MySQL Container');
});

app.get('/', (_, res) => {
    conn.query('DELETE FROM peoples', (err, result) => {
        if (err) {
            console.log('An error occurred while deleting records from the database.');
            return;
        }
        console.log(`Deleted: ${result.affectedRows} row(s)`);
    });

    const peoples = { name: 'Daniel Drummond' };

    conn.query('INSERT INTO peoples SET ?', peoples, (err, res) => {
        if (err) {
            console.log('There was an error inserting data into the database.');
            return;
        }
        console.log(`Last insert ID: ${res.insertId}`);
    });

    conn.query('SELECT name FROM peoples ORDER BY id DESC', (err, rows) => {
        if (err) {
            console.log('An error occurred while reading data from database.');
            return;
        }

        rows.forEach((row) => {
            res.send(`
                <h1>Hello ${row.name}!! Full Cycle Rocks!!</h1>
            `);
        });
        console.log('Everything worked as expected.');
    });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
