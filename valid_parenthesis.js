const isValid = function(s) {

    const sArray = Array.from(s)
    const stack = [];
    const bracketPairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let i = 0; i < sArray.length; i++) {
        const char = sArray[i];

        if (bracketPairs[char]) {
            // It's an open bracket, push it onto the stack
            stack.push(char);
        } else {
            // It's a close bracket
            if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
                return false; // Mismatch or stack underflow
            }
        }
    }

    // If the stack is empty at the end, it means all brackets were matched
    return stack.length === 0;
};

console.log(isValid ("{(})")) 