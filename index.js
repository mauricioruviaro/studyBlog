const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PostsRouter = require('./routes/Posts.js');
const UsersRouter = require('./routes/Users.js');
const TagsRouter = require('./routes/Tags.js');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/posts', PostsRouter);
app.use('/users', UsersRouter);
app.use('/tags', TagsRouter);

app.get('/ping', (_req, res) => res.status(200).json({ message: 'Pong' }));

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
