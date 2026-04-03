const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const db = require('./db'); 

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());

// CSS Style - Ibi nibyo bituma amakuru azaragara neza
const style = `
<style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 40px; background-color: #f4f7f6; }
    h1 { color: #2c3e50; text-align: center; }
    .container { max-width: 900px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
    th { background-color: #3498db; color: white; }
    tr:nth-child(even) { background-color: #f2 f2 f2; }
    tr:hover { background-color: #e1f5fe; }
    .nav { text-align: center; margin-bottom: 20px; }
    .nav a { margin: 0 15px; text-decoration: none; color: #3498db; font-weight: bold; }
    .status { color: green; font-weight: bold; text-align: center; }
</style>
`;

/* ------------------- ROUTES ------------------- */

// 1. Home Route
app.get('/', (req, res) => {
    res.send(`
        ${style}
        <div class="container">
            <h1>Library Management System 📚</h1>
            <p class="status">✅ Database Connected on Port 3307</p>
            <div class="nav">
                <a href="/books">Ibitabo (Books)</a>
                <a href="/members">Abanyamuryango (Members)</a>
            </div>
            <p style="text-align:center;">Hitamo rimwe mu mahitamo haruguru kugira ngo urebe amakuru.</p>
        </div>
    `);
});

// 2. GET /books - Kugaragaza imbonerahamwe y'ibitabo
app.get('/books', (req, res) => {
    db.query('SELECT * FROM Books', (err, results) => {
        if (err) return res.status(500).send("Database Error");

        let rows = "";
        results.forEach(book => {
            rows += `<tr>
                <td>${book.id || book.book_id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category || 'N/A'}</td>
                <td>${book.stock_quantity || 0}</td>
            </tr>`;
        });

        res.send(`
            ${style}
            <div class="container">
                <div class="nav"><a href="/">← Subira Inyuma</a></div>
                <h1>Urutonde rw'Ibitabo</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Izina ry'Igitabo</th>
                            <th>Umwanditsi</th>
                            <th>Ikiciro</th>
                            <th>Umubare</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `);
    });
});

// 3. GET /members - Kugaragaza imbonerahamwe y'abanyamuryango
app.get('/members', (req, res) => {
    db.query('SELECT * FROM Members', (err, results) => {
        if (err) return res.status(500).send("Database Error");

        let rows = "";
        results.forEach(member => {
            rows += `<tr>
                <td>${member.id || member.member_id}</td>
                <td>${member.full_name || member.name}</td>
                <td>${member.email}</td>
                <td>${member.membership_date || 'N/A'}</td>
            </tr>`;
        });

        res.send(`
            ${style}
            <div class="container">
                <div class="nav"><a href="/">← Subira Inyuma</a></div>
                <h1>Abanyamuryango ba Library</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Amazina Yuzuye</th>
                            <th>Email</th>
                            <th>Itariki yinjiye</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `);
    });
});

/* ------------------- SERVER START ------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server yaka kuri: http://localhost:${PORT}`);
});