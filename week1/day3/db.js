const mysql = require('mysql2');
require('dotenv').config();

// Guhuza na MySQL muri XAMPP
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.root,
    password: process.env.DB_PASSWORD,
    database: process.env.fluxify_db,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Gukoresha promises kugira ngo bitworohere gukoresha async/await muri index.js
module.exports = pool.promise();