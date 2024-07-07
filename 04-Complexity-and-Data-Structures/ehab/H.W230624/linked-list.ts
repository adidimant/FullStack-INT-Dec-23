// Each Node in the list has the basic two fields: data (/value), next - which is the next Node (same class type)

class ListNode_1<T> {
  private data: T;
  private next: ListNode_1<T> | null;

  constructor(data: T, next: ListNode_1<T> | null) {
    this.data = data;
    this.next = next;
  }

  getData(): T {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }

  getNext(): ListNode_1<T> | null {
    return this.next;
  }

  setNext(next: ListNode_1<T> | null): void {
    this.next = next;
  }
}
const node77 = new ListNode_1<number>(1, null);
const node66 = new ListNode_1<number>(12, node77);
const node55 = new ListNode_1<number>(10, node66);
const node44 = new ListNode_1<number>(5, node55);
const node33 = new ListNode_1<number>(3, node44);
const node22 = new ListNode_1<number>(6, node33);
const node11 = new ListNode_1<number>(5, node22);

node1.getData(); // 5

// 5 -> 6 -> 3 -> 5 -> 10 -> 12 -> 1

// HW - implement insertAt & removeFrom - write the complexity of each method
// insertAt - receives data: T and insert it after a specific index in the list
// removeItem - removes an item in specific index
// removeFrom - receives an index in the list and removes all the list items from this index until the end
// Implmenet class DoublyList - and inside this class implement: insertItem, removeItem
// please cover all the edge cases

class List_1<T> {
  head: ListNode_1<T> | null;
  tail: ListNode_1<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertItem(data: T): void {
    const newNode = new ListNode_1<T>(data, null); // O(1)
    if (this.head == null) { // O(1)
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    this.tail?.setNext(newNode); // O(1)
    this.tail = newNode; // O(1)
    // In total => O(1)
  }

  searchItem(data: T): number { // returns the order of item in the list ("index")
   let currentNode: ListNode_1<T> | null = this.head; 
   let counter = 0;

   while(currentNode != null) { // i can write also just: `while(currentNode) {...}`
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
  insertAt(data: T, index:number): void{
    if(index <0 ){
      console.log('The index must be a number equal to or greater than zero');
      return;
    }
    if(this.head == null){
      console.log('The list is empty.');
      return
      //this.head = new ListNode_1<T>(data,null);
      //this.tail = this.head;
      //return;
    }
    let currentNode: ListNode_1<T> | null = this.head; 
    let counter = 0;
    while(currentNode != null) {
      if(counter == index){
        const temp = new ListNode_1<T>(data, currentNode.getNext());
        currentNode.setNext(temp);
        console.log('The node has been successfully added after the index: '+ index);
        return;
      }
      currentNode = currentNode.getNext();
      counter++;
    }
    console.error('The index: '+ index+' is greater than the number of nodes in the list');
    //let last = new ListNode_1<T>(data,null);
    //this.tail?.setNext(last);
    //this.tail = last;
  }
  // In total: O(n)

  // removeItem - removes an item in specific index
  removeItem(index: number): void{
    if(index <0 ){
      console.log('The index must be a number equal to or greater than zero');
      return;
    }
    if(this.head == null){
      return
    }
    let currentNode: ListNode_1<T> | null = this.head; 
    let counter = 0;
    while(currentNode != null) {
      if(index == 0){
        this.head = currentNode.getNext();
        currentNode.setNext(null);
        return;
      }
      let previous = currentNode;
      currentNode = currentNode.getNext();
      counter++;
      if(counter == index && currentNode != null){
        previous.setNext(currentNode.getNext());
        currentNode.setNext(null);
        return;
      }else if(currentNode === null){
        previous.setNext(null);
      }
    }
    console.error('The index: '+ index+' is greater than the number of nodes in the list');
  }
  // In total: O(n)

  // removeFrom - receives an index in the list and removes all the list items from this index until the end
  removeFrom(index: number): void{
    if(index <0 ){
      console.log('The index must be a number equal to or greater than zero');
      return;
    }
    if(this.head == null){
      return
    }
    let currentNode: ListNode_1<T> | null = this.head; 
    let counter = 0;
    while(currentNode != null) {
      if (index == 0){
        this.head = null;
      }
      let previous = currentNode;
      currentNode = currentNode.getNext();
      counter++;
      if(currentNode == null){
        console.error('The index: '+ index+' is greater than the number of nodes in the list');
        return;
      }
      if(counter == index){
        previous.setNext(null);
        this.tail = previous;
      }
    }
  }
  // In total: O(n)
}

const linkedList1 = new List_1();
linkedList1.insertItem(5);
linkedList1.insertItem(6);
linkedList1.insertItem(3);



class DoublyListNode_1<T> {
  private data: T;
  private next: ListNode_1<T> | null;
  private prev: ListNode_1<T> | null;

  constructor(data: T, next: ListNode_1<T> | null, prev: ListNode_1<T> | null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }

  getData(): T {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }

  getNext(): ListNode_1<T> | null {
    return this.next;
  }

  setNext(next: ListNode_1<T> | null): void {
    this.next = next;
  }

  getPrev(): ListNode_1<T> | null {
    return this.prev;
  }

  setPrev(prev: ListNode_1<T> | null): void {
    this.prev = prev;
  }
}

// Implmenet class DoublyList - and inside this class implement: insertItem, removeItem
class DoublyList_01<T>{
  private head: DoublyListNode<T> | null;
  private tail: DoublyListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }


  insertItem(data: T) {
    // create a new node, with next - null (this is going to be the new last node)
    // tail.setNext(newNode), then - tail = newNode
    const newNode = new DoublyListNode<T>(data, null, this.tail);
    if (this.tail) {
      this.tail.setNext(newNode);
    }

    this.tail = newNode;
  }
  // O(1)

  removeItem(index: number): boolean {
    let currentNode = this.head;
    let counter = 0;
  
    while (currentNode) {
      if (counter == index) {
        const prevNode = currentNode.getPrev();
        const nextNode = currentNode.getNext();
        prevNode?.setNext(nextNode);
        nextNode?.setPrev(prevNode);
  
        if(!nextNode) { // updating the tail in case currentNode was the last node (since nextNode is null)
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
  // O(n)

  insertAt(data: T, index: number): boolean {
    let currentNode = this.head;
    let counter = 0;

    while(currentNode) {
      if (counter == index) {
        const nextNode = currentNode.getNext();
        const newNode = new DoublyListNode<T>(data, nextNode, currentNode);
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
}


// please cover all the edge cases