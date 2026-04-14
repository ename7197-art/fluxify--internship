const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// In-memory database (nta MySQL ikenerwa)
let books = [
    { id: 1, title: "Python Basics", author: "John Doe", published_year: 2023 },
    { id: 2, title: "JavaScript Guide", author: "Jane Smith", published_year: 2024 },
    { id: 3, title: "Node.js Mastery", author: "Bob Johnson", published_year: 2024 }
];

let nextId = 4;

// ============ TASK 1: REST API for Books ============

// GET /api/books - Kuzana ibitabo byose
app.get('/api/books', (req, res) => {
    res.json({
        success: true,
        count: books.length,
        data: books
    });
});

// GET /api/books/:id - Kuzana igitabo kimwe
app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    
    if (!book) {
        return res.status(404).json({ 
            success: false,
            message: `Igitabo gitangaje ID ${id} nticyabonetse.`
        });
    }
    
    res.json({
        success: true,
        data: book
    });
});

// POST /api/books - Kwandika igitabo gishya
app.post('/api/books', (req, res) => {
    const { title, author, published_year } = req.body;
    
    // Task 2: Validation
    const errors = [];
    if (!title || title.trim() === '') errors.push("Title ni ngombwa");
    if (!author || author.trim() === '') errors.push("Author ni ngombwa");
    if (published_year && (published_year < 1900 || published_year > 2025)) {
        errors.push("Published year igomba kuba iri hagati ya 1900 na 2025");
    }
    
    if (errors.length > 0) {
        return res.status(400).json({ 
            success: false,
            message: "Validation failed",
            errors: errors
        });
    }
    
    const newBook = {
        id: nextId++,
        title: title.trim(),
        author: author.trim(),
        published_year: published_year || null
    };
    
    books.push(newBook);
    
    res.status(201).json({ 
        success: true,
        message: "Igitabo cyanditswe neza!",
        data: newBook
    });
});

// PUT /api/books/:id - Guhindura igitabo
app.put('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, published_year } = req.body;
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({ 
            success: false,
            message: `Igitabo gitangaje ID ${id} nticyabonetse ngo gihindurwe.`
        });
    }
    
    // Validation
    if (!title && !author && !published_year) {
        return res.status(400).json({ 
            success: false,
            message: "Ugomba gutanga byibura ikintu kimwe uhindure (title, author, cyangwa published_year)"
        });
    }
    
    if (title && title.trim() === '') {
        return res.status(400).json({
            success: false,
            message: "Title ntishobora kuba ubusa"
        });
    }
    
    if (published_year && (published_year < 1900 || published_year > 2025)) {
        return res.status(400).json({
            success: false,
            message: "Published year igomba kuba iri hagati ya 1900 na 2025"
        });
    }
    
    // Update
    if (title) books[bookIndex].title = title.trim();
    if (author) books[bookIndex].author = author.trim();
    if (published_year) books[bookIndex].published_year = published_year;
    
    res.json({ 
        success: true,
        message: "Igitabo cyavuguruwe neza!",
        data: books[bookIndex]
    });
});

// DELETE /api/books/:id - Gusiba igitabo
app.delete('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({ 
            success: false,
            message: `Igitabo gitangaje ID ${id} nticyabonetse ngo gisibwe.`
        });
    }
    
    const deletedBook = books[bookIndex];
    books.splice(bookIndex, 1);
    
    res.json({ 
        success: true,
        message: `Igitabo "${deletedBook.title}" cyasibwe neza!`
    });
});

// Task 2: Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("LOG ERROR:", err.message);
    res.status(500).json({
        success: false,
        error: "Habaye ikosa muri Server (Internal Server Error)",
        message: err.message
    });
});

// Tangiza server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server yaka kuri: http://localhost:${PORT}`);
    console.log(`✅ REST API ikora kuri Resource: Books`);
    console.log(`\n📚 Endpoints ziriho:`);
    console.log(`   GET    http://localhost:${PORT}/api/books`);
    console.log(`   GET    http://localhost:${PORT}/api/books/:id`);
    console.log(`   POST   http://localhost:${PORT}/api/books`);
    console.log(`   PUT    http://localhost:${PORT}/api/books/:id`);
    console.log(`   DELETE http://localhost:${PORT}/api/books/:id`);
    console.log(`\n📖 Ibitabo biri muri database: ${books.length}`);
});
