const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause an error if the user doesn't send a header
  const userAgent = req.headers['user-agent'];
  res.send(`Your user agent is: ${userAgent}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});