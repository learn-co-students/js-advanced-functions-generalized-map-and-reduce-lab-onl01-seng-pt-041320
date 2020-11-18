// Add your functions here
function map (array, func) {
    let newArray = []
    for (const element of array){
        newArray.push(func(element))
    }
    return newArray
}

function reduce(array, func, startingValue){
    let r = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1
  
    for (i; i < array.length; i++) {
      r = func(array[i], r)
    }
  
    return r;
  }