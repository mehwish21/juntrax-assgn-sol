// function for creating paths

let getPaths = function (req, res) {
  let start = req.body.start;

  let path = req.body.path
  let data = req.body.data;

  const getAllPaths = function (key, path) {

    let values = data[key];
    if (!values || values.length === 0) {
      // Base case: reached the end of the path
      return [path];
    }
    // Recursive case: explore all possible paths from this key
    let result = [];
    for (let value of values) {
      let newPath = path.concat(value);
      let subPaths = getAllPaths(value, newPath);
      result.push(...subPaths);
    }
    return result;
  }
  let ways = getAllPaths(start, path);
  res.status(200).send({ status: true, data: ways });
}

module.exports = getPaths




