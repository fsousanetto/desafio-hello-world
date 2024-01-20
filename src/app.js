import express from 'express';

const app = express();

const msg = { messagem: 'Olá, Mundo!' };

app.use(express.json());

app.get('/', (req, res) => {
    res.json(msg).status(200);
});

app.listen(3333, () => console.log('Server started on port 3333 🚀'));
