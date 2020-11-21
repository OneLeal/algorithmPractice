// LeetCode: 2. 两数相加
import { createList, ListNode } from "./common";

var addTwoNumbers = function(l1, l2) {
    var p1 = l1, p2 = l2, flag = 0, sum = 0, head, p; // 指针、进位符、和值
    while (p1 || p2) {
        sum = flag + (p1 ? p1.val : 0) + (p2 ? p2.val : 0);   // 求和
        sum >= 10 ? (sum = sum % 10, flag = 1) : (flag = 0);  // 是否进位
        head && (p.next = new ListNode(sum), p = p.next);
        !head && (head = new ListNode(sum), p = head);
        p1 && (p1 = p1.next);
        p2 && (p2 = p2.next);
    }
    !p1 && !p2 && flag && (p.next = new ListNode(flag));  // 兼容进位
    return head;
};

var l1 = createList([3, 4, 2]);
var l2 = createList([4, 6, 5]);
var result = addTwoNumbers(l1, l2);
console.log(result);