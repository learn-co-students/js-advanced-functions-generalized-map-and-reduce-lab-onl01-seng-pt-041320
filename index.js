function map(array, funcCallback) {
    let newArr = []
    array.forEach(element => newArr.push(funcCallback(element)))
    return newArr;
}

function reduce(array, funcCallback, start) {
    let accumulator = start ? start : array[0];
    let i = start ? 0 : 1;
  
    for (; i < array.length; i++) {
      accumulator = funcCallback(array[i], accumulator);
    }
  
    return accumulator;
  }