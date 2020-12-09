function sumRange(num){
    if(num === 1){
        return 
    }
    return num + sumRange(num-1))
}

function productOfArray(arr){
    if (arr.length === 0) return 1; 
    return arr.shift() * productOfArray(arr)
}

function contains(nestedObj, data){
    if(data){
        return true;
    }
    return contains(nestedObj, )
}