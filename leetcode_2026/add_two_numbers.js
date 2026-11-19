/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    
    const fvlength = l1.length;
    const svlength = l2.length;

    const maxvlength = Math.max(fvlength, svlength)
    
    // loop to add
    const result = []
    let carry = 0;
    
    for(let i = 0; i<=maxvlength; i++){

        // if(i === (maxvlength) && carry === 0) break;

        const addition = (l1[i] ?? 0) + (l2[i] ?? 0) + carry;
        carry = 0;

        const additionString = `${addition}`

        if (addition > 9){
            carry = Number(additionString[0])
        }

        const pushable = (additionString.length>1) ? Number(`${addition}`[1]) : addition
        result.push(pushable)

        if(i === (maxvlength-1) && carry === 0) break;

    }


    return result;
};



const l1 = [2,4,3]
const l2 = [5,6,4]

// const l1 = [9,9,9,9,9,9,9]
// const l2 = [9,9,9,9]

const result = addTwoNumbers(l1,l2)
console.log(result)