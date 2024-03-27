class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Function to add an element with a priority to the queue
  enqueue(item, priority) {
    const element = { item, priority };
    this.queue.push(element);
    this.heapifyUp(this.queue.length - 1);
  }

  // Function to remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const highestPriorityElement = this.queue[0];
    const lastElement = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = lastElement;
      this.heapifyDown(0);
    }

    return highestPriorityElement.item;
  }

  // Function to maintain the heap property when adding an element
  heapifyUp(index) {
    let current = index;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.queue[current].priority < this.queue[parent].priority) {
        [this.queue[current], this.queue[parent]] = [
          this.queue[parent],
          this.queue[current],
        ];
        current = parent;
      } else {
        break;
      }
    }
  }

  // Function to maintain the heap property when removing an element
  heapifyDown(index) {
    let current = index;
    while (current < this.queue.length) {
      let next = current;
      const left = 2 * current + 1;
      const right = 2 * current + 2;
      if (
        left < this.queue.length &&
        this.queue[left].priority < this.queue[next].priority
      ) {
        next = left;
      }
      if (
        right < this.queue.length &&
        this.queue[right].priority < this.queue[next].priority
      ) {
        next = right;
      }
      if (next !== current) {
        [this.queue[current], this.queue[next]] = [
          this.queue[next],
          this.queue[current],
        ];
        current = next;
      } else {
        break;
      }
    }
  }

  // Function to check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
}

// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.dequeue()); // Output: Task 3
console.log(priorityQueue.dequeue()); // Output: Task 1
console.log(priorityQueue.dequeue()); // Output: null (Queue is empty)
