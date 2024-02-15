import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World')
})

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
