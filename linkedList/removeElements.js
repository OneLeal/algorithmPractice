// LeetCode: 203. 移除链表元素
import { createList } from "./common";

var removeElements = function(head, val) {
    if (!head) return null;
    var p = head, q = head.next;
    while (p) {
        if (p.val === val) {
            head = p.next;
            p = head;
            p && (q = p.next);
        } else {
            if (q && q.val === val) {
                p.next = q.next;
                q.next = null;
                q = p.next;
            } else {
                p = p.next;
                q && (q = q.next);
            }
        }
    }
    return head;
};

var list = createList([1, 2, 1]);
var result = removeElements(list, 1);
console.log(result);