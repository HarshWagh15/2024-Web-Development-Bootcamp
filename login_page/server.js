const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Read users data
const userData = JSON.parse(fs.readFileSync('users.json', 'utf8'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = userData.users.find(u => u.username === username && u.password === password);

  if (user) {
    res.send({ success: true, message: 'Login successful' });
  } else {
    res.send({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
