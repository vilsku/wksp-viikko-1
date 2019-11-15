'use strict';
const express = require('express')
const app = express()
const port = 3000

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static('public'));

app.get('/', (req, res) => {
  const uiContent = {
    title: 'Example',
    heading: 'Click on the cat',
  };
  res.render('index', uiContent);
});

app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  };
  res.json(cat);
});