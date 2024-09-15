/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {

    // add open if open < n
    // add closing if open > closing
    // valid if closed == n == open

    let stack = []
    let result = []

    function backtrack(openN, closeN){
        if(closeN == n && openN == n){
            result.push(stack.join(""))
            return
        }

        if(closeN < openN){
            stack.push(")")
            backtrack(openN, closeN+1)
            stack.pop()
        }

        if(openN < n){
            stack.push("(")
            backtrack(openN+1, closeN)
            stack.pop()
        }
    }

    backtrack(0,0)
    return result
}

console.log(generateParenthesis(1))


// very interesting. I am still learning how to solve problems recursively