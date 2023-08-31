/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    filteredArray = [];
    for(let i=0 ; i<arr.length ; i++){
        if(fn(arr[i],i) != false || fn(arr[i],i) != 0)
            filteredArray.push(arr[i]);
    }
    return filteredArray;
};