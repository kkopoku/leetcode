/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {

    let temp = head;
    let stack = []

    while(head != null){
        if(head.child != null){
            if(head.next != null) stack.push(head.next)
            head.next = head.child
            head.next.prev = head;
            head.child = null;
        }else if (head.next === null && stack.length > 0){
            head.next = stack.pop()
            head.next.prev = head;
        }
        head = head.next
    }
    return temp
};