// Add your functions here
function map(src, call){
    return src.map(call);
}

function reduce(src, call, start){
    if (start) {
        return src.reduce(call, start);
    } else {
        return src.reduce(call);
    }
}