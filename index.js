function map(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        newArr.push(func(el))
    }
    return newArr;
}
  
  function reduce(arr, func, start){
    let r = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
    for(i; i < arr.length; i++) {
      r = func(arr[i], r)
    }
  
    return r;
  }