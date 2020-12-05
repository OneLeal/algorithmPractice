// LeetCode: 24. 两两交换链表中的节点
import { createList } from "./common";
var arr = [1, 2, 3, 4, 5, 6, 7];
var list = createList(arr);

// 三指针法求解
var swapPairs = function(head) {
    if (!head) return null;
    if (!head.next) return head;

    var prev = head, mid = head, next = head.next;
    head = head.next;             // head.next 存在至少必交换一次
    while (next && mid) {         // 终止条件：节点数为偶数，mid = null；奇数时 next = null
        mid.next = next.next;     // mid 和 next 指针两两交换
        next.next = mid;

        if (prev !== mid) {      // 兼容第一次交换
            prev.next = next;
            prev = mid;
        }

        mid = mid.next;         // 交换结束，指针前移
        mid && (next = mid.next);
    }

    return head;
};
console.log(swapPairs(list));