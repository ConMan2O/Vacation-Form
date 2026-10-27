// ===== 1. IMPORT EXPRESS =====
import express from 'express';
// ===== 2. CREATE APP + PORT =====
const app = express();
const PORT = 3000; // CHANGE if quiz gives a port
// Array to store form submissions (in memory)
const submissions = [];
// ===== 3. MIDDLEWARE (must be BEFORE routes) =====
app.use(express.static('public')); // serves /public (css, js, images)

app.use(express.urlencoded({ extended: true })); // form data -> req.body

// ===== 4. GET ROUTES — copy one block per page =====
app.get('/', (req, res) => {
res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/about', (req, res) => { // CHANGE route
res.sendFile(`${import.meta.dirname}/views/about.html`); // CHANGE file
});

app.get('/contact', (req, res) => {
res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

app.get('/confirm', (req, res) => {
res.sendFile(`${import.meta.dirname}/views/confirm.html`);
