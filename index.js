const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.send('Привіт, світ!');
});

app.get('/json', (req, res) => {
    res.json({ "message": "Це JSON-відповідь" });
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send("Користувач з ID: ${id})");
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Пошук за запитом: ${query}`);
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});
