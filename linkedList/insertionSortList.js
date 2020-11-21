// LeetCode: 147. 对链表进行插入排序 / 148. 排序链表
import { createList } from "./common";

var insertionSortList = function(head) {
    if (!head) return null;
    var p = head, q = p.next;

    // 插入节点
    var insertNode = function (node, head) {
        var temp = head;
        while (1) {
            if (node.val < temp.val) {    // node 插入表头前门
                node.next = temp;
                head = node;
                break;
            } else if (node.val >= temp.val && node.val < temp.next.val) {  // node 插入中间
                node.next = temp.next;
                temp.next = node;
                break;
            } else temp = temp.next;
        }
        return head;
    };

    // 前后两值相比较
    while (q) {
        if (q.val >= p.val) {
            p = p.next;
            q = q.next;
        } else {
            p.next = q.next;
            head = insertNode(q, head);
            q = p.next;
        }
    }
    return head;
};

var list = createList([4, 2, 1, 3]);
var result = insertionSortList(list);
console.log(result);