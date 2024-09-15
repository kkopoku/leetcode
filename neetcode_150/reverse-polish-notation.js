/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  let stack = [];
  let val = 0

  for (let i = 0; i < tokens.length; i++) {
    const isArith =
      tokens[i] == "*" ||
      tokens[i] == "+" ||
      tokens[i] == "/" ||
      tokens[i] == "-";
    if (isArith) {
      let length = stack.length;
      switch (tokens[i]) {
        case "*":
          val = (parseInt(stack[length - 2]) * parseInt(stack[length - 1]));
          break;
        case "+":
          val = (parseInt(stack[length - 2]) + parseInt(stack[length - 1]));
          break;
        case "/":
          val = (parseInt(stack[length - 2]) / parseInt(stack[length - 1]));
          val = val<0 ? Math.ceil(val) : Math.floor(val)
          break;
        case "-":
          val = (parseInt(stack[length - 2]) - parseInt(stack[length - 1]));
          break;
      }
      stack.splice(length - 2, 2) //pop x2
      stack.push(val)

    } else {
      stack.push(tokens[i]);
    }
  }
  return stack[0];
}

// let test = ["1", "2", "+", "3", "*", "4", "-"];

let test =["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

// let test = ["4","-2","/","2","-3","-","-"]

console.log(evalRPN(test));
