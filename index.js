const map = (sourceArray, cb) => {
    let result = [];
    for (let i = 0; i < sourceArray.length; i++) {
        let callbackElement = sourceArray[i]
        result.push(cb(callbackElement))
    }
    return result 
}

const reduce = (sourceArray, cb, starting) => {
    let result = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1

    for (i; i < sourceArray.length; i++) {
        result = cb(sourceArray[i], result)
    }
    return result 
}