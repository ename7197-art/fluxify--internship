const express = require('express');
const morgan = require('morgan');
const db = require('./db'); // Ihamagara ya dosiye twakoze yo guhuza na MySQL
require('dotenv').config();

const app = express();

// 1. MIDDLEWARE (Utubuto dufasha server gutunganya amakuru)
app.use(morgan('dev'));      // Ituma ubona "logs" muri terminal igihe cyose hari uwasuye server
app.use(express.json());     // Ituma server ishobora gusoma amakuru ya JSON yo muri POST requests

// 2. ROUTES (Inzira amakuru anyuramo)

// GET / - Message yoikaze (Task 1.2)
app.get('/', (req, res) => {
    res.json({ message: "Murakaza neza kuri Express Server ya mbere!" });
});

// GET /users - Kuzana amakuru muri MySQL (Task 2.3)
app.get('/users', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM users");
        res.json({
            success: true,
            data: rows
        });
    } catch (err) {
        // Handle connection errors (Task 2.4)
        console.error(err);
        res.status(500).json({ error: "Habaye ikibazo mu guhuza na database" });
    }
});

// POST /test - Kwakira amakuru (Task 1.3)
app.post('/test', (req, res) => {
    const data = req.body;
    res.json({
        message: "Amakuru yakiriwe neza!",
        receivedData: data
    });
});

// GET /users/:id - URL Parameter (Task 1.3)
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Uri kureba umukoresha ufite ID: ${userId}` });
});

// 3. START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ikora neza kuri http://localhost:${PORT}`);
});