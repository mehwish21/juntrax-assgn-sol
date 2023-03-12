const express = require('express');
const app = express();
const route = require('./src/route')

app.use(express.json());

app.use('/', route)

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
