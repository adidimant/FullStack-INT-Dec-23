// Data-structures:

/**
 data structures we know so far:
 * simple variable (boolean, number, string, undefined, null,..) 
 * array - push(), get by index ([]), pop()
 * object - get & set (by key) ; Object.values(obj), Object.keys(obj)

 Reference - https://www.geeksforgeeks.org/introduction-to-data-structures/

Stack:
 - in generally, for dealing with problems that require that the element that is getting out of the data-structure will be the last one to come in
 for example - bullets in a stack of a gun
  another one - we want to deal with alerts/emails and drop the latest
  another one - ynet, news, מבזקים 
*/

const arr: number[] = [];
arr.push(4);// O(1)
arr.push(6); // O(1)
arr.push(9);// O(1)
arr.pop();// O(1)
arr.pop();// O(1)
 
// search in a stack:
type Stack = number[];

const searchValueInStack = (stack: Stack, value: number): boolean => {
  const stackCopy = copyStack(stack);

  for (let i =0; i< stackCopy.length; i++) { // O(n)
    const lastItem = stackCopy.pop(); // O(1)
    if (lastItem == value) { // O(1)
      return true;
    }
  }
  return false;

  // In total: O(n)
}

const copyStack = (stack: Stack) => {
  const middleStack: number[] = []; // O(1)
  const newStack: number[] = []; // O(1)
  for (let i =0; i< stack.length; i++) { // O(n)
    const item = stack.pop() as number; // O(1)
    middleStack.push(item); // O(1)
  }

  for (let i =0; i< middleStack.length; i++) { // O(n)
    const item = middleStack.pop() as number;
    newStack.push(item);
    stack.push(item);
  }

  return newStack; // O(1)

  // In total: O(n) + O(n) + O(1) => O(n)
}

const arr2: number[] = [];
arr2.push(2);
arr2.push(4);
arr2.push(8);


