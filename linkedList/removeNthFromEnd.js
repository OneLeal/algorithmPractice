// LeetCode: 19. 删除链表的倒数第N个节点
import { createList } from "./common";

var removeNthFromEnd = function(head, n) {
    if (!head) return null;
    if (n === 0) return head;

    // 寻找删除的节点
    var findNode = function (node, n) {
        var p = node;
        while (n) {
            p = p.next;
            n--;
        }
        return !p;
    };

    if (findNode(head, n)) return head.next ? head.next : null;  // 兼容删除头结点的情况

    var p = head;
    while (p) {
        var flag = findNode(p.next, n);
        if (flag) {
            var temp = p.next;
            p.next = temp.next;
            temp = null;
            break;
        }
        p = p.next;
    }
    return head;
};

var list = createList([1, 2, 3, 4, 5]);
var result = removeNthFromEnd(list, 2);
console.log(result);