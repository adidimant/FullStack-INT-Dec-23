console.log(1); // O(1)

const arr = [6,4,7,675,2445];  // n items

for (let i=0; i<arr.length; i++) { // O(n)
  console.log(arr[i]);
}

// rule #1 - if you multiply in a constant the order of operations - you'll get the same order of operations
// example:
for (let i=0; i<3; i++) { // O(3) => O(1)
  console.log(i);
}

// example 2:
for (let i=0; i<arr.length; i++) { // O(3n) => O(3*n) => O(n)
  console.log(arr[i]);
  console.log(arr[i]);
  console.log(arr[i]);
}

// O(1) - finite number of operations - can be 1, can be 100,000 => it is still O(1)
// O(n) - The number of operations is linear with n, it means that the order of operations is n or n * some constant number



// O(n^2)

