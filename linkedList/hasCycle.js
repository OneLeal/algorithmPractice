// LeetCode: 141. 环形链表

var hasCycle = function(head) {
    var fast = slow = head, flag = false;
    if (!head || !head.next) return false;
    while (slow && fast) {
        fast = fast.next?.next;  // 兼容 null
        slow = slow.next;        // 慢指针走 1 步，快指针走 2 步
        if (slow === fast) {
            flag = true;
            break;
        }
    }
    return flag;
};