const express = require('express');
const app = express();
const route = require('./src/route')
const cors = require('cors')
app.use(express.json());

app.use('/', route)
app.use(cors())
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
