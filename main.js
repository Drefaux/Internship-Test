// 1 . findMax5([3,4,5,3,2,3,10,11]) => [11,10,5,4,3]

var arr = [3, 4, 5, 3, 2, 3, 10, 11];
function getMaxValues(arr,n){
    return arr.sort(function(a,b){return b-a}).slice(0,n);
}
console.log(getMaxValues(arr,5))

// 2 . findMax5([14,12,38,17,10,36,12,29,45,34,48,22]) => [48, 45, 38, 36, 34]

var arr = [14,12,38,17,10,36,12,29,45,34,48,22];
function getMaxValues(arr,n){
    return arr.sort(function(a,b){return b-a}).slice(0,n);
}
console.log(getMaxValues(arr,5))


// 3 . findMax5([10,11,2,30,22,6,8,9,11,12,22]) => [30, 22, 22, 12, 11]

var arr = [10,11,2,30,22,6,8,9,11,12,22];
function getMaxValues(arr,n){
    return arr.sort(function(a,b){return b-a}).slice(0,n);
}
console.log(getMaxValues(arr,5))


//  4 . findFrequent([3, 7, 3]) ➞ 3

var arr = [3 , 7, 3];
var findFrequent = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
var duplicateElements = findFrequent(arr);
console.log(duplicateElements);

// 5 . findFrequent([null, "hello", true, null]) ➞ null

var arr = [null, "hello", true, null];
var findFrequent = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
var duplicateElements = findFrequent(arr);
console.log(duplicateElements);

// 6 . findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false

var arr = [false, "up", "down", "left", "right", true, false];
var findFrequent = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
var duplicateElements = findFrequent(arr);
console.log(duplicateElements);



