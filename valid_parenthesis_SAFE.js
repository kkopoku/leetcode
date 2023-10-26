/**
 * 
 * @param {String} s - String to be used
 * @return {Boolean}
*/


var isValid = function (s) {

    const sArray = Array.from(s)
    var parenPairs = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    var stack = []

    if(sArray.length === 0) return false;
    if(sArray.length % 2 !==0) return false


    for (let i=0 ; i<sArray.length; i++){

        // check for any other values, saves time
        if (sArray[i] === '{' || '(' || '[' || '}' || ')' || ']') return false

        if(sArray[i] === '{' || '(' || '['){
            stack.push(s[i]);
        }

        if (sArray[i] === '}' || ')' || ']'){
            if (stack.length === 0) return false;
            // pop the last element from the stack
            var stackEnd = stack.pop()
            // check if the last element's value in parenPairs in the stack is the same as the current element
            if (parenPairs[sArray[i]] == stackEnd){   //error is coming from this comparison, parenPairs[sArray[i]] is showing undefined, you can improve that later
                continue
            }else return false
        }

    }

    return stack.length === 0;

}

const data = "{}"
// isValid(data)
console.log(isValid(data))