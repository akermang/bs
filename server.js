const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const apiBoards = require('./server/routes/api.boards');
const internalApi = require('./server/routes/internal');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/boards', apiBoards);
app.use('/internal', internalApi);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

/* eslint-disable */
server.listen(port, () => console.log(`API running on localhost:${port}`));
/* eslint-disable */
