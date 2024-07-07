//hw

class ListNode1<T> {
    private data: T;
    private next: ListNode1<T> | null;
  
    constructor(data: T, next: ListNode1<T> | null) {
      this.data = data;
      this.next = next;
    }
  
    getData(): T {
      return this.data;
    }
  
    setData(data: T): void {
      this.data = data;
    }
  
    getNext(): ListNode1<T> | null {
      return this.next;
    }
  
    setNext(next: ListNode1<T> | null): void {
      this.next = next;
    }
}
  
node1.getData(); // 5



class List1<T> {
    head: ListNode1<T> | null;
    tail: ListNode1<T> | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    insertItem(data: T): void {
      const newNode = new ListNode1<T>(data, null); // O(1)
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
     let currentNode: ListNode1<T> | null = this.head; 
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

    insertAt(data: T, index: number): void{
        const newNode = new ListNode1<T>(data, null);
        if(index < 0){
            throw new Error('The index entered is invalid');
        }
        else if (this.head == null && index == 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let currentNode: ListNode1<T> | null = this.head;
            let count = 0;
            while (currentNode != null) {
                if(count != index){
                    currentNode = currentNode.getNext();
                    count ++;
                }  
                else{
                    newNode.setNext(currentNode.getNext());
                    currentNode.setNext(newNode);
                }
            }
            if(currentNode == null)
                throw new Error ('The inserted index is larger than the list');
        }
    };
    // in total: O(n);

    removeItem(index: number): void{
        if(index < 0 || this.head == null)
            throw new Error ('The index entered is invalid or the list is empty');
        else if(index == 0)
            this.head = this.head.getNext();
        else {
            let currentNode: ListNode1<T> | null = this.head;
            let count = 0;
            while(currentNode != null){
                if(index != count){
                    currentNode = currentNode.getNext();
                    count ++;
                }
                else{
                    let nodeToRemove = currentNode.getNext();
                    currentNode.setNext(nodeToRemove);
                }
            }
            if(currentNode == null)
                throw new Error ('The inserted index is larger than the list');
        }
    };
    // in total: O(n);

    removeFrom(index: number): void{
        if(index < 0 || this.head == null)
            throw new Error ('The index entered is invalid or the list is empty');
        else if(index == 0){
            this.head == null;
            this.tail == null;
        }
        else{
            let currentNode: ListNode1<T> | null = this.head;
            let count = 0;
            while (currentNode != null) {
                if(count != index){
                    currentNode = currentNode.getNext();
                    count ++;
                }
                else{
                    currentNode.setNext(null);
                    this.tail == currentNode;
                }
            }
            if(currentNode == null)
                throw new Error ('The inserted index is larger than the list');
        }
    };
    // in total: O(n);
};


class DoublyListNode1<T> {
    private data: T;
    private next: ListNode1<T> | null;
    private prev: ListNode1<T> | null;
  
    constructor(data: T, next: ListNode1<T> | null, prev: ListNode1<T> | null) {
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
  
    getNext(): ListNode1<T> | null {
      return this.next;
    }
  
    setNext(next: ListNode1<T> | null): void {
      this.next = next;
    }
  
    getPrev(): ListNode1<T> | null {
      return this.prev;
    }
  
    setPrev(prev: ListNode1<T> | null): void {
      this.prev = prev;
    }
};

// class DoublyLinkedList<T> {
//     private head: DoublyListNode<T> | null = null;
//     private tail: DoublyListNode<T> | null = null;


// }

