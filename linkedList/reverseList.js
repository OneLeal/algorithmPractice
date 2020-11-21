// LeetCode: 206. 反转链表 / 剑指 Offer 24. 反转链表
import { createList } from "./common";

var reverseList = function(head) {
    if (!head) return null;
    if (!head.next) return head;

    var front = head, mid = head.next, rear = head.next.next;
    while (mid) {
        mid.next = front;
        front = mid;
        mid = rear;
        rear && (rear = rear.next);
    }
    head.next = null;
    return front;
};

var list = createList([1, 2, 3, 4, 5]);
var result = reverseList(list);
console.log(result);