// mensaje-2-backend/index.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'message.html'));
});

app.listen(5002, () => console.log('Mensaje 2 en http://localhost:5002'));
