function findAllPaths(data, start, end, path = []) {
  path.push(start);
  
  if (start === end) {
    return [path];
  }
  
  let paths = [];
  for(let node in data){
    if(data.hasOwnProperty(start)){
    let newPaths = findAllPaths(data, node, end, path.slice());
    paths.push(...newPaths);
    }
  }
//   data[start].forEach(node => {
//     if (!path.includes(node)) {
//       let newPaths = findAllPaths(data, node, end, path.slice());
//       paths.push(...newPaths);
//     }
//   });
  
  return paths;
}

// Example usage:
// let data = {
//   1: [2, 3, 4, 5],
//   2: [6],
//   3: [6, 7],
//   4: [7, 8],
//   5: [8]
// };

// let paths = findAllPaths(data, 1, 8);
// console.log(paths); // [[1, 2, 6, 8], [1, 3, 6, 8], [1, 3, 7, 8], [1, 4, 7, 8], [1, 4, 8], [1, 5, 8]]

module.exports = findAllPaths