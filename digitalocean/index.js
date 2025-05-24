// mensaje-3-backend/index.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'message.html'));
});

app.listen(5003, () => console.log('Mensaje 3 en http://localhost:5003'));
