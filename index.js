// Add your functions here
function map(sourceArray, fn) {
    let newArray = []
    for (let i = 0; i<sourceArray.length; i++) {
        newArray.push(fn(sourceArray[i]))
    }
    return newArray
}

function reduce(sourceArray, fn, startingPoint) {
    let t = startingPoint ? startingPoint : sourceArray[0]
    let i = startingPoint ? 0 : 1
    for (; i<sourceArray.length; i++) {
        t = fn(sourceArray[i], t)
    }
    return t
}
