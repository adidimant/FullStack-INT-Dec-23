HW 260524:
1) implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K
2) implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS
3) Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed
4) Consider the following interface:
interface MachineInterface {
  turnOn: () => void;
  turnOff: () => void;
  reportTo: string;
  warnLevel: 0 | 1 | 2 | 3;
  owner: string;
}
Implement this interface in any machine that we have created (lesson 5-6 ts file)
5) Understand the recursive solution we have implemented in class - calculateObjDeep