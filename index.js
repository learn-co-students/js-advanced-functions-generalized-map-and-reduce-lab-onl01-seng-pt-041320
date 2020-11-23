// Add your functions here

function map(array, callBackFunc) {
    return array.map(a => callBackFunc(a));
}


// function map(array) {
//     return array.map(a => a);
// }

// function map(array) {
//     return array.map(a => a * 2);
// }

// function map(array) {
//     return array.map( a => a ** 2);
// }


function reduce(sourceArray, a, startingPoint){
    let e = startingPoint ? startingPoint : sourceArray[0]
    let i = startingPoint ? 0 : 1
  
    for (; i < sourceArray.length; i++) {
      e = a(sourceArray[i], e);
    }
  
    return e ;
  }