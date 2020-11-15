// Add your functions here
function map(sourceArray, func){
  let newArr = []
  sourceArray.forEach((i)=>{
    newArr.push(func(i))
  })
  return newArr
}

function reduce(sourceArray, func, startingPoint){
  let total = sourceArray[0]
  if (startingPoint){
    total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
      total = func(total, sourceArray[i]) 
    }
  } else {
    for (let i = 1; i < sourceArray.length; i++){
      total = func(total, sourceArray[i]) 
    }
  }
  return total
}