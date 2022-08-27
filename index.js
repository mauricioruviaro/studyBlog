const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.get('/ping', (_req, res) => res.status(200).json({ message: 'Pong' }));

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
