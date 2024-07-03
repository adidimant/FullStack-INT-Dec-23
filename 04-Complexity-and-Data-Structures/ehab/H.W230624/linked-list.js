"use strict";
// Each Node in the list has the basic two fields: data (/value), next - which is the next Node (same class type)
class ListNode_1 {
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
const node77 = new ListNode_1(1, null);
const node66 = new ListNode_1(12, node77);
const node55 = new ListNode_1(10, node66);
const node44 = new ListNode_1(5, node55);
const node33 = new ListNode_1(3, node44);
const node22 = new ListNode_1(6, node33);
const node11 = new ListNode_1(5, node22);
node1.getData(); // 5
// 5 -> 6 -> 3 -> 5 -> 10 -> 12 -> 1
// HW - implement insertAt & removeFrom - write the complexity of each method
// insertAt - receives data: T and insert it after a specific index in the list
// removeItem - removes an item in specific index
// removeFrom - receives an index in the list and removes all the list items from this index until the end
// Implmenet class DoublyList - and inside this class implement: insertItem, removeItem
// please cover all the edge cases
class List_1 {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertItem(data) {
        var _a;
        const newNode = new ListNode_1(data, null); // O(1)
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
    // insertAt - receives data: T and insert it after a specific index in the list
    insertAt(data, index) {
        if (index < 0) {
            console.log('The index must be a number equal to or greater than zero');
            return;
        }
        if (this.head == null) {
            console.log('The list is empty.');
            return;
            //this.head = new ListNode_1<T>(data,null);
            //this.tail = this.head;
            //return;
        }
        let currentNode = this.head;
        let counter = 0;
        while (currentNode != null) {
            if (counter == index) {
                const temp = new ListNode_1(data, currentNode.getNext());
                currentNode.setNext(temp);
                console.log('The node has been successfully added after the index: ' + index);
                return;
            }
            currentNode = currentNode.getNext();
            counter++;
        }
        console.error('The index: ' + index + ' is greater than the number of nodes in the list');
        //let last = new ListNode_1<T>(data,null);
        //this.tail?.setNext(last);
        //this.tail = last;
    }
    // In total: O(n)
    // removeItem - removes an item in specific index
    removeItem(index) {
        var _a;
        if (index < 0) {
            console.log('The index must be a number equal to or greater than zero');
            return;
        }
        if (this.head == null) {
            return;
        }
        let currentNode = this.head;
        let counter = 0;
        while (currentNode != null) {
            if (index == 0) {
                this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.getNext();
                return;
            }
            let previous = currentNode;
            currentNode = currentNode.getNext();
            counter++;
            if (counter == index && currentNode != null) {
                previous.setNext(currentNode.getNext());
                return;
            }
        }
        console.error('The index: ' + index + ' is greater than the number of nodes in the list');
    }
    // In total: O(n)
    // removeFrom - receives an index in the list and removes all the list items from this index until the end
    removeFrom(index) {
        if (index < 0) {
            console.log('The index must be a number equal to or greater than zero');
            return;
        }
        if (this.head == null) {
            return;
        }
        let currentNode = this.head;
        let counter = 0;
        while (currentNode != null) {
            if (index == 0) {
                this.head = null;
            }
            let previous = currentNode;
            currentNode = currentNode.getNext();
            counter++;
            if (currentNode == null) {
                console.error('The index: ' + index + ' is greater than the number of nodes in the list');
                return;
            }
            if (counter == index) {
                previous.setNext(null);
            }
        }
    }
}
const linkedList1 = new List_1();
linkedList1.insertItem(5);
linkedList1.insertItem(6);
linkedList1.insertItem(3);
class DoublyListNode_1 {
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
// Implmenet class DoublyList - and inside this class implement: insertItem, removeItem
class DoublyList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertItem(data) {
    }
}
// please cover all the edge cases
