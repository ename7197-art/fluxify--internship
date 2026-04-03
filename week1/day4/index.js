const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const db = require('./db'); // ensure this db supports promises or we wrap it

dotenv.config();
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

/* ------------------- PROMISIFY DB QUERY ------------------- */
const util = require('util');
const query = util.promisify(db.query).bind(db);

/* ------------------- TASK 1 & 2: REST API FOR BOOKS ------------------- */

// 1. GET /books — Return all records
app.get('/books', async (req, res, next) => {
    try {
        const results = await query('SELECT * FROM Books');
        res.status(200).json(results);
    } catch (err) {
        next(err);
    }
});

// 2. GET /books/:id — Return a single record
app.get('/books/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const results = await query('SELECT * FROM Books WHERE id = ?', [id]);
        if (results.length === 0) {
            return res.status(404).json({ error: "Igitabo ntacyo tubonye (Book not found)" });
        }
        res.status(200).json(results[0]);
    } catch (err) {
        next(err);
    }
});

 


// 3. POST /books — Insert a new record (With Validation)
app.post('/books', async (req, res, next) => {
    const { title, author, category, stock_quantity } = req.body;

    if (!title || !author || !category || stock_quantity == null) {
        return res.status(400).json({ error: "Buri field irakenewe: title, author, category, stock_quantity" });
    }

    try {
        const sql = 'INSERT INTO Books (title, author, category, stock_quantity) VALUES (?, ?, ?, ?)';
        const result = await query(sql, [title, author, category, stock_quantity]);
        res.status(201).json({ message: 'Book added successfully', bookId: result.insertId });
    } catch (err) {
        next(err);
    }
});

// 4. PUT /books/:id — Update an existing record
app.put('/books/:id', async (req, res, next) => {
    const { id } = req.params;
    const { title, author, category, stock_quantity } = req.body;

    if (!title || !author || !category || stock_quantity == null) {
        return res.status(400).json({ error: "Buri field irakenewe: title, author, category, stock_quantity" });
    }

    try {
        const sql = 'UPDATE Books SET title = ?, author = ?, category = ?, stock_quantity = ? WHERE id = ?';
        const result = await query(sql, [title, author, category, stock_quantity, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Nta gitabo dufite kuri iyo ID yo kuvugurura" });
        }
        res.status(200).json({ message: "Igitabo cyavuguruwe neza!" });
    } catch (err) {
        next(err);
    }
});

// 5. DELETE /books/:id — Delete a record
app.delete('/books/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await query('DELETE FROM Books WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Nta gitabo gihari cyo gusibwa kuri iyo ID" });
        }
        res.status(200).json({ message: "Igitabo cyasibwe burundu!" });
    } catch (err) {
        next(err);
    }
});

/* ------------------- TASK 2: GLOBAL ERROR HANDLING ------------------- */
app.use((err, req, res, next) => {
    console.error("Internal Server Error:", err.stack);
    res.status(500).json({
        error: "Habaye ikosa muri Server (Internal Server Error)",
        message: err.message
    });
});

/* ------------------- SERVER START ------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server yaka kuri: http://localhost:${PORT}`);
    console.log(`✅ REST API ikora kuri Resource: Books`);
});