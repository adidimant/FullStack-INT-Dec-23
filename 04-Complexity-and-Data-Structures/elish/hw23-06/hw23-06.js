"use strict";
//hw
class ListNode1 {
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
node1.getData(); // 5
class List1 {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertItem(data) {
        var _a;
        const newNode = new ListNode1(data, null); // O(1)
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
    // In total: O(1) + O(1) + O(n) => O(n)
    insertAt(data, index) {
        const newNode = new ListNode1(data, null);
        if (index < 0) {
            throw new Error('The index entered is invalid');
        }
        else if (this.head == null && index == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let currentNode = this.head;
            let count = 0;
            while (currentNode != null) {
                if (count != index) {
                    currentNode = currentNode.getNext();
                    count++;
                }
                else {
                    newNode.setNext(currentNode.getNext());
                    currentNode.setNext(newNode);
                }
            }
            if (currentNode == null)
                throw new Error('The inserted index is larger than the list');
        }
    }
    ;
    // in total: O(n);
    removeItem(index) {
        if (index < 0 || this.head == null)
            throw new Error('The index entered is invalid or the list is empty');
        else if (index == 0)
            this.head = this.head.getNext();
        else {
            let currentNode = this.head;
            let count = 0;
            while (currentNode != null) {
                if (index != count) {
                    currentNode = currentNode.getNext();
                    count++;
                }
                else {
                    let nodeToRemove = currentNode.getNext();
                    currentNode.setNext(nodeToRemove);
                }
            }
            if (currentNode == null)
                throw new Error('The inserted index is larger than the list');
        }
    }
    ;
    // in total: O(n);
    removeFrom(index) {
        if (index < 0 || this.head == null)
            throw new Error('The index entered is invalid or the list is empty');
        else if (index == 0) {
            this.head == null;
            this.tail == null;
        }
        else {
            let currentNode = this.head;
            let count = 0;
            while (currentNode != null) {
                if (count != index) {
                    currentNode = currentNode.getNext();
                    count++;
                }
                else {
                    currentNode.setNext(null);
                    this.tail == currentNode;
                }
            }
            if (currentNode == null)
                throw new Error('The inserted index is larger than the list');
        }
    }
    ;
}
;
class DoublyListNode1 {
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
;
// class DoublyLinkedList<T> {
//     private head: DoublyListNode<T> | null = null;
//     private tail: DoublyListNode<T> | null = null;
// }
