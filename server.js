const express = require('express');
const port = 5000;
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + './build'));

app.get('/.*/', (req, res) => res.sendFile(__dirname + './build/index.html'));

app.get('/api', (req, res) => {
  res.json({
    name: 'Daily web coding',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port  ${port} 🚀`);
});
