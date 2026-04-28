const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'DevSecOps SCA Demo App',
    version: '1.0.0'
  });
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});
