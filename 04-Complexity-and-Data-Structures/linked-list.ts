// Each Node in the list has the basic two fields: data (/value), next - which is the next Node (same class type)
class ListNode<T> {
  private data: T;
  private next: ListNode<T> | null;

  constructor(data: T, next: ListNode<T> | null) {
    this.data = data;
    this.next = next;
  }

  getData(): T {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }

  getNext(): ListNode<T> | null {
    return this.next;
  }

  setNext(next: ListNode<T> | null): void {
    this.next = next;
  }
}
const node7 = new ListNode<number>(1, null);
const node6 = new ListNode<number>(12, node7);
const node5 = new ListNode<number>(10, node6);
const node4 = new ListNode<number>(5, node5);
const node3 = new ListNode<number>(3, node4);
const node2 = new ListNode<number>(6, node3);
const node1 = new ListNode<number>(5, node2);

node1.getData(); // 5

// 5 -> 6 -> 3 -> 5 -> 10 -> 12 -> 1

// HW - implement insertAt & removeFrom - write the complexity of each method
// insertAt - receives data: T and insert it after a specific index in the list
// removeItem - removes an item in specific index
// removeFrom - receives an index in the list and removes all the list items from this index until the end
// Implmenet class DoublyList - and inside this class implement: insertItem, removeItem
// please cover all the edge cases

class List<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertItem(data: T): void {
    const newNode = new ListNode<T>(data, null); // O(1)
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
   let currentNode: ListNode<T> | null = this.head;
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
  insertAt(data: T, index: number) {
		if (index < 0) return `index must be greater than 0`;
		const newNode = new ListNode<T>(data, null);
		let currentNode: ListNode<T> | null = this.head;
		let counter = 0;
		while (currentNode) {
			if (counter == index) {
				newNode.setNext(currentNode.getNext());
				currentNode.setNext(newNode);
				return;
			}
			currentNode = currentNode.getNext();
			counter++;
		}
	} // O(n)

	removeItem(index: number) {
		if (index < 0) return `index must be greater than 0`;
		let currentNode: ListNode<T> | null = this.head;
		let counter = 0;
		let prevNode: ListNode<T> | null = null;
		while (currentNode) {
			if (counter == index) {
				const nextNode = currentNode.getNext();
				if (nextNode && prevNode) { // check that where not in the head / tail
					prevNode.setNext(nextNode);
					currentNode.setNext(null);
				}
				else if(prevNode){ // this case covers that the desired node to remove is the last
					prevNode.setNext(null);
					this.tail = prevNode;
					return;
				}
				else { // this case covers that the desired node to remove is the first
					this.head = currentNode.getNext();
					currentNode.setNext(null);

				}
				return;
			}
			prevNode = currentNode;
			currentNode = currentNode.getNext();
			counter++;
		}
	} // O(n)

	removeFrom(index: number) {
		if (index < 0) return `index must be greater than 0`;
		let currentNode: ListNode<T> | null = this.head;
		let counter = 0;
		while (currentNode) {
			if (counter == index) {
				currentNode.setNext(null);
				this.tail = currentNode;
				return;
			}
			currentNode = currentNode.getNext();
			counter++;
		}
	} // O(n)

  // In total: O(1) + O(1) + O(n) => O(n)
}

const linkedList = new List();
linkedList.insertItem(5);
linkedList.insertItem(6);
linkedList.insertItem(3);




class DoublyListNode<T> {
  private data: T;
  private next: ListNode<T> | null;
  private prev: ListNode<T> | null;

  constructor(data: T, next: ListNode<T> | null, prev: ListNode<T> | null) {
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

  getNext(): ListNode<T> | null {
    return this.next;
  }

  setNext(next: ListNode<T> | null): void {
    this.next = next;
  }

  getPrev(): ListNode<T> | null {
    return this.prev;
  }

  setPrev(prev: ListNode<T> | null): void {
    this.prev = prev;
  }
}
