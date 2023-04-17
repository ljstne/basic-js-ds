const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    // this.length = 0;
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
   if (this.head === null) {
    this.head = new ListNode(value);
   }else {
    let curr = this.head;

   
   while (curr.next) {
    curr = curr.next;
     }


     curr.next = new ListNode(value);
    }

    //  this.length++
  }

  dequeue() {
    const curr = this.head.value;
    // this.length--;
    this.head = this.head.next;
    return curr
  }
}

const que = new Queue();
que.enqueue(5);
que.enqueue(6);
que.enqueue(7);
console.log(que);

console.log(que.dequeue());

module.exports = {
  Queue
};
