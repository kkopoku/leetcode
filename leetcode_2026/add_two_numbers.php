<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        print([$l1, $l2]);
        return 0;

    }

}

$l = new Solution();
$lee = [2,4,3];
$loo = [5,6,4];

print($l->addTwoNumbers($lee, $loo));