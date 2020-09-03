// Add your functions here

function map(source, callback) {
  let result = []
  for (let i = 0; i < source.length; i++) {
    result.push(callback(source[i]))
  }
  return result;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  //if the starting point exists/is truthy, let r equal the starting point. else it's equal to the first element in the array. 
  
  let i = (!!starting) ? 0 : 1
  //if starting exists, let i = 0. else, let it equal 1. 

  for (; i < src.length; i++) { //see how i is defined above. 
    r = cb(src[i], r)
    //reduce needs a callback function that takes an array and a function 
  }

  return r;
}
