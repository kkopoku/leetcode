class MinStack {

    stack
    minStack
    min

    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length == 0){
            this.min = val
            this.minStack.push(val)
        }else{
            let min = Math.min(this.min, val)
            this.min = min
            this.minStack.push(min)
        }
        (this.stack).push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
        this.min = this.minStack.at(-1)
    }

    /**
     * @return {number}
     */
    top() {
        return (this.stack).at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}


let a = new MinStack()

a.push(1)
a.push(1)
a.push(1)
a.push(1)
a.push(1)
a.push(0)
a.push(5)
a.push(-5)
a.pop()

console.log(a)
