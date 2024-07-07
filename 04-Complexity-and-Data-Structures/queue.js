"use strict";
// FIFO
// example: the first request that received in the server - the first one to handle
// another example: organizing expiration logistics in restaurants (serving food by received)
// another example: implementing Maccabi healthcare queue management
class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + ' inserted';
    }
    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }
    peek() {
        return this.items[this.frontIndex];
    }
    get printQueue() {
        return this.items;
    }
}
const queue1 = new Queue();
queue1.enqueue('Ehab');
queue1.enqueue('Ofer');
queue1.dequeue(); // Ehab
queue1.enqueue('Omar');
queue1.enqueue('Beni');
queue1.enqueue('Ita');
queue1.enqueue('Awni');
queue1.enqueue('Ran');
queue1.enqueue('Elisheva');
queue1.enqueue('Ziv');
queue1.enqueue('Orit');
queue1.enqueue('Adi');
queue1.dequeue(); // Ofer
const priorityQueue = new Queue();
priorityQueue.enqueue('Gabi');
class QueuesManager {
    constructor(regularQueue, priorityQueue) {
        this.regularQueue = regularQueue;
        this.priorityQueue = priorityQueue;
    }
    enqueue(item, isPrioritized) {
        if (isPrioritized) {
            this.priorityQueue.enqueue(item);
        }
        else {
            this.regularQueue.enqueue(item);
        }
    }
    dequeue() {
        const prioritzed = this.priorityQueue.dequeue();
        if (prioritzed) {
            return prioritzed;
        }
        return this.regularQueue.dequeue();
    }
}
const queueManager = new QueuesManager(queue1, priorityQueue);
let nextPatient = queueManager.dequeue(); // 'Gabi'
queueManager.enqueue('Itay', true);
nextPatient = queueManager.dequeue(); // 'Itay'
nextPatient = queueManager.dequeue(); // 'Omar' - from the regularQueue
// another example with urgency score (Enum):
var Urgency;
(function (Urgency) {
    Urgency["LOW"] = "low";
    Urgency["LOW_MEDIUM"] = "low_medium";
    Urgency["MEDIUM"] = "medium";
    Urgency["MEDIUM_HIGH"] = "medium_high";
    Urgency["HIGH"] = "high";
})(Urgency || (Urgency = {}));
class QueuesManagerWithUrgency {
    constructor(regularQueue, priorityQueue) {
        this.regularQueue = regularQueue;
        this.priorityQueue = priorityQueue;
    }
    enqueue(item, urgency) {
        if (urgency == Urgency.LOW) {
            this.regularQueue.enqueue(item);
        }
        else {
            this.priorityQueue.enqueue(item);
        }
    }
    dequeue() {
        const prioritzed = this.priorityQueue.dequeue();
        if (prioritzed) {
            return prioritzed;
        }
        return this.regularQueue.dequeue();
    }
}
