/**
 * @param {string} s
 * @return {number}
 */



var firstUniqChar = function(s) {

    let sArray = Array.from(s)
    let storage = new Map()

    // iterate through array
    for (let i=0; i<sArray.length; i++){
        if(!storage.has(sArray[i])){
            storage.set(sArray[i],1)
        }else{
            let value = storage.get(sArray[i])
            storage.set(sArray[i], value+1)
        }
    }

    // iterate again and look for values
    for (let i=0; i<sArray.length; i++){
        if(storage.get(sArray[i]) === 1) return i
    }
    return -1

};





// OPTIMIZED STORAGE AND RUNTIME SMALL
var firstUniqCharOptimized = function(s) {

    const charCount = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (charCount[s.charCodeAt(i) - ('a'.charCodeAt(0) || 97)] === 1) {
            return i;
        }
    }
    
    return -1;

};