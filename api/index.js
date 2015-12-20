import express from 'express';
import players from './routes/players';
import board from './routes/board';
import bodyParser from 'body-parser';
import './db';

const app = express();
const root = __dirname + '/../';

app.use(bodyParser.json())
app.use(express.static(root + 'dist'));
app.use('/api/players', players);
app.use('/api/board', board);

app.get('/', (req, res) => {
  res.sendFile('index.html', { root });
});

let server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});  