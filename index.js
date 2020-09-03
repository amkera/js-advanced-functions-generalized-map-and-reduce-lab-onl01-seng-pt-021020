// Add your functions here

function map(source, callback) {
  let result = []
  for (let i = 0; i < source.length; i++) {
    result.push(callback(source[i]))
  }
  return result;
}

function reduce(sourceArray, callback, startingPoint) {
  let startingPoint
}