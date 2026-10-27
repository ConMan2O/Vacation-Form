
import express from 'express';

const app = express();
const PORT = 3006;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post('/submit', (req, res) =>{
res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at 
        http://localhost:${PORT}`);
});
