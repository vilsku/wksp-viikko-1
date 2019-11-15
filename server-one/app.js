'use strict';
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static('public'));

app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  };
  res.json(cat);
});