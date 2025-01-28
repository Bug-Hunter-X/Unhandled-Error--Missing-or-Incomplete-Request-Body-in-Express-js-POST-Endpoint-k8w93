const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required fields: name and email' });
  }
  // ...further processing of user data...
  res.status(201).json({ message: 'User created', user });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});