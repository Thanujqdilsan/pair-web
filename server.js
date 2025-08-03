// pair-web/server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/qr', (req, res) => {
  const qrPath = path.join(__dirname, 'public', 'qr.png');
  if (fs.existsSync(qrPath)) {
    res.sendFile(qrPath);
  } else {
    res.status(404).send('QR code not found.');
  }
});

app.listen(PORT, () => {
  console.log(`QR Web Pair server running on http://localhost:${PORT}/qr`);
});
