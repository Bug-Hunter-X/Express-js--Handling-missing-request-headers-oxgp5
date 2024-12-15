const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Safely access the header using optional chaining and nullish coalescing
  const userAgent = req.headers['user-agent'] ?? 'Unknown';
  res.send(`Your user agent is: ${userAgent}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});