const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// app.use(bodyParser);
app.get('/ping', (_req, res) => res.status(200).json({ message: 'Pong' }));

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
