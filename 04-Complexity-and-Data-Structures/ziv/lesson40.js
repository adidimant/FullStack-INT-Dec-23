"use strict";
insertAt(data, T, index, number);
boolean;
{
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) { // O(n)
        if (counter == index) {
            const nextNode = currentNode.getNext(); //(O(1))
            const newNode = new DoublyListNode(data, nextNode, currentNode);
            currentNode.setNext(newNode);
            if (nextNode) {
                nextNode.setPrev(newNode);
            }
            return true;
        }
        currentNode = currentNode.getNext();
        counter++;
    }
    return false;
}
// O(n)
//----------------------------------------------------------------//
removeItem(index, number);
boolean;
{
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) { // O(n)
        if (counter == index) {
            const prevNode = currentNode.getPrev();
            const nextNode = currentNode.getNext();
            prevNode === null || prevNode === void 0 ? void 0 : prevNode.setNext(nextNode);
            nextNode === null || nextNode === void 0 ? void 0 : nextNode.setPrev(prevNode);
            if (!nextNode) { // updating the tail in case currentNode was the last node (since nextNode is null)
                this.tail = prevNode;
            }
            if (!prevNode) { // updating the hail in case currentNode was the first node (since prevNode is null)
                this.head = nextNode;
            }
            currentNode.setNext(null);
            currentNode.setPrev(null);
            return true;
        }
        currentNode = currentNode.getNext();
        counter++;
    }
    return false;
}
/*

זמן: O(n)
*/
//----------------------------------------------------------------//
insertItem(data, T);
{ // o(1)
    // create a new node, with next - null (this is going to be the new last node)
    // tail.setNext(newNode), then - tail = newNode
    const newNode = new DoublyListNode(data, null, this.tail);
    if (this.tail) {
        this.tail.setNext(newNode);
    }
    this.tail = newNode;
}
