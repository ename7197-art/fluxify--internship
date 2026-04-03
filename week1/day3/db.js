const mysql = require('mysql2'); // Hamagara 'mysql2' rimwe gusa hano
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME,
  port: 3307 // <--- Koresha 3307 kuko niyo XAMPP yawe yafashe
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL Database on port 3307!');
});

module.exports = connection;