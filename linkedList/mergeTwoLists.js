// LeetCode: 21. 合并两个有序链表

import { createList } from "./common";

var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;
    if (l1 && !l2) return l1;
    if (!l1 && l2) return l2;

    var p1 = l1, p2 = l2, p, head;
    while (p1 || p2) {
        var bool = (p1 ? p1.val : 0) > (p2 ? p2.val : 0);
        if (!head) {
            head = !bool ? p1 : p2;
            p = head;
        } else {
            p1 && p2 && (p.next = !bool ? p1 : p2);
            p1 && !p2 && (p.next = p1);
            !p1 && p2 && (p.next = p2);
            p = p.next;
        }

        if (p1 && p2) {
            !bool && (p1 = p1.next);
            bool && (p2 = p2.next);
        } else break;
    }
    return head;
};

var l1 = createList([1, 2, 4]);
var l2 = createList([1, 3, 4]);
var result = mergeTwoLists(l1, l2);
console.log(result);