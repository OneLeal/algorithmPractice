export class ListNode{
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export const createList = (arr) => {
    if (!arr || !arr.length) return null;
    const head = new ListNode(arr.shift());
    let p = head;
    arr.forEach(item => {
       p.next = new ListNode(item);
       p = p.next;
    });
    return head;
};