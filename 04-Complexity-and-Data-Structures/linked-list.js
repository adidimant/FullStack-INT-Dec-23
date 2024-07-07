"use strict";
// Each Node in the list has the basic two fields: data (/value), next - which is the next Node (same class type)
class ListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getNext() {
        return this.next;
    }
    setNext(next) {
        this.next = next;
    }
}
const node7 = new ListNode(1, null);
const node6 = new ListNode(12, node7);
const node5 = new ListNode(10, node6);
const node4 = new ListNode(5, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(6, node3);
const node1 = new ListNode(5, node2);
node1.getData(); // 5
// 5 -> 6 -> 3 -> 5 -> 10 -> 12 -> 1
// HW - implement insertAt & removeFrom - write the complexity of each method
// insertAt - receives data: T and insert it after a specific index in the list
// removeItem - removes an item in specific index
// removeFrom - receives an index in the list and removes all the list items from this index until the end
// Implmenet class DoublyList - and inside this class implement: insertItem, removeItem
// please cover all the edge cases
class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertItem(data) {
        var _a;
        const newNode = new ListNode(data, null); // O(1)
        if (this.head == null) { // O(1)
            this.head = newNode;
            this.tail = this.head;
            return;
        }
        (_a = this.tail) === null || _a === void 0 ? void 0 : _a.setNext(newNode); // O(1)
        this.tail = newNode; // O(1)
        // In total => O(1)
    }
    searchItem(data) {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode != null) { // i can write also just: `while(currentNode) {...}`
            if (currentNode.getData() == data) {
                return counter;
            }
            currentNode = currentNode.getNext();
            counter++;
        }
        return -1;
    }
}
const linkedList = new List();
linkedList.insertItem(5);
linkedList.insertItem(6);
linkedList.insertItem(3);
class DoublyListNode {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getNext() {
        return this.next;
    }
    setNext(next) {
        this.next = next;
    }
    getPrev() {
        return this.prev;
    }
    setPrev(prev) {
        this.prev = prev;
    }
}
