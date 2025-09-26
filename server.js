const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Tech Evangelism Platform! We are excited to have you join our community!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});