// leetCode: 622 设计循环队列

var MyCircularQueue = function(k) {
    var _front = 0, _rear = 0;    // 私有属性
    this.queue = new Array(k);   // 创建长度为 k 的队列
    this.front = function () { return _front; };  // 访问头指针
    this.rear = function () { return _rear; };    // 访问尾指针
    this.handleFront = function (value) { _front = value; };  // 操作头指针
    this.handleRear = function (value) { _rear = value; };    // 操作尾指针
};

// 访问头指针指向元素
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.front()];
};

// 访问尾指针指向元素
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.rear() - 1 < 0 ? (this.queue.length - 1) : (this.rear() - 1)];
};

// 插入元素
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;

    var position = this.rear();
    this.queue[position] = value;
    this.handleRear((position + 1) % this.queue.length);
    return true;
};

// 删除元素
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;

    var position = this.front();
    this.queue[position] = '';
    this.handleFront((position + 1) % this.queue.length);
    return true;
};

// 队列是否为空
MyCircularQueue.prototype.isEmpty = function() {
    return this.front() === this.rear() && !this.queue[this.front()];
};

// 队列是否已满
MyCircularQueue.prototype.isFull = function() {
    return (this.front() === this.rear()) && (!!this.queue[this.front()] || this.queue[this.front()] === 0);
};

var queue = new MyCircularQueue(4); // 初始化队列

console.log(queue.queue, queue.isEmpty(), queue.isFull()); // 检查队列

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.queue, queue.isEmpty(), queue.isFull(), queue.front(), queue.Front(), queue.rear(), queue.Rear()); // 检查队列

console.log(queue.enQueue(4));
console.log(queue.enQueue(5));
console.log(queue.queue, queue.isEmpty(), queue.isFull(), queue.front(), queue.Front(), queue.rear(), queue.Rear()); // 检查队列

queue.deQueue();
queue.enQueue(5);
console.log(queue.queue, queue.isEmpty(), queue.isFull(), queue.front(), queue.Front(), queue.rear(), queue.Rear()); // 检查队列

console.log(queue.deQueue());
console.log(queue.deQueue());
console.log(queue.queue, queue.isEmpty(), queue.isFull(), queue.front(), queue.Front(), queue.rear(), queue.Rear()); // 检查队列

queue.enQueue('浅色星河');
console.log(queue.queue, queue.isEmpty(), queue.isFull(), queue.front(), queue.Front(), queue.rear(), queue.Rear()); // 检查队列

queue.deQueue();
queue.deQueue();
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log(queue.queue, queue.isEmpty(), queue.isFull(), queue.front(), queue.Front(), queue.rear(), queue.Rear()); // 检查队列





