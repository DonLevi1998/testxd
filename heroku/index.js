// mensaje-4-backend/index.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'message.html'));
});

app.listen(5004, () => console.log('Mensaje 4 en http://localhost:5004'));
