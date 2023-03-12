const express = require('express');
const app = express();
const route = require('./route')

app.use(express.json());

app.use('/', route)

// app.post('/find-paths', (req, res) => {
//   let data = req.body.data;
//   let start = req.body.start;
//   let end = req.body.end;
//   let paths = findAllPaths(data, start, end);
  
//   res.json({ paths: paths });
// });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
