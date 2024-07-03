// https://www.simplilearn.com/tutorials/data-structure-tutorial/trees-in-data-structure

// Complexity of inserting an element to a tree - O(logn)
// Complexity of searching for an element in a tree - O(logn)

class TreeNode<T> {
  private value: T;
  private right: TreeNode<T> | null;
  private left: TreeNode<T> | null;

  constructor(value: T, left: TreeNode<T> | null, right: TreeNode<T> | null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }

  getRight(): TreeNode<T> | null {
    return this.right;
  }

  setRight(newRight: TreeNode<T> | null) {
    this.right = newRight;
  }

  getLeft(): TreeNode<T> | null {
    return this.left;
  }

  setLeft(newLeft: TreeNode<T> | null) {
    this.left = newLeft;
  }
}

// create a binary tree:
// note that this tree is a binary tree, but isn't a binary-search-tree (BST)
const treenode7 = new TreeNode<number>(7, null, null);
const treenode6 = new TreeNode<number>(6, null, null);
const treenode5 = new TreeNode<number>(5, null, null);
const treenode4 = new TreeNode<number>(4, null, null);
const treenode3 = new TreeNode<number>(3, treenode6, treenode7);
const treenode2 = new TreeNode<number>(2, treenode4, treenode5);
const root = new TreeNode<number>(1, treenode2, treenode3);

// Creaing a binary-search-tree
// Binary search tree - a binary tree, that for each node - all of its right sub-tree have a bigger values than the node, and all the left sub-tree have a smaller values than the node

// This is a BST:
const treenode7_2 = new TreeNode<number>(7, null, null);
const treenode5_2 = new TreeNode<number>(5, null, null);
const treenode3_2 = new TreeNode<number>(3, null, null);
const treenode1_2 = new TreeNode<number>(1, null, null);
const treenode2_2 = new TreeNode<number>(2, treenode1_2, treenode3_2);
const treenode6_2 = new TreeNode<number>(6, treenode5_2, treenode7_2);
const root_2 = new TreeNode<number>(4, treenode2_2, treenode6_2);

// Question - where will be the node with the lowest value in a BST?
// Answer - We go left and left and left until we reach null - this is the node with the lowest value

function getLowestValueInTree<T>(root: TreeNode<T>): T | null {
  if (root.getValue() == null) {
    return null;
  }

  const left = root.getLeft();

  if (left == null) {
    return root.getValue();
  } else {
    return getLowestValueInTree(left);
  }
}

function getLowestNodeInTree<T>(root: TreeNode<T>): TreeNode<T> | null {
  if (root.getValue() == null) {
    return null;
  }

  const left = root.getLeft();

  if (left == null) {
    return root;
  } else {
    return getLowestNodeInTree(left);
  }

  // In total: logn
}

// Implement the same answer, but this time return also the path to the lowest value:

function getLowestValueInTreeWithPath<T>(root: TreeNode<T>, path: string = ''): [T | null, string] {
  if (root.getValue() == null) {
    return [null,'-'];
  }

  const left = root.getLeft();

  if (left == null) {
    return [root.getValue(), path];
  } else {
    return getLowestValueInTreeWithPath(left, path + '->' + root.getValue());
  }
}

getLowestValueInTreeWithPath(root_2);

function findNodeInTree<T>(root: TreeNode<T> | null, value: T): TreeNode<T> | null {
  if (!root) {
    return null;
  }

  if (root.getValue() == value) {
    return root;
  }

  if (root.getValue() > value) {
    return findNodeInTree(root.getLeft(), value);
  }
  return findNodeInTree(root.getRight(), value);
  // In total: logn (since we divide the options by two in every search iteration)
}

function insertIntoBST<T>(root: TreeNode<T> | null, value: T): boolean {
  if (!root) {
    return false;
  }

  if (root.getValue() == value) {
    return false;
  }

  if (root.getValue() > value) {
    if (!root.getLeft()) {
      root.setLeft(new TreeNode<T>(value, null, null));
      return true;
    }
    return insertIntoBST(root.getLeft(), value);
  }
  if (!root.getRight()) {
    root.setRight(new TreeNode<T>(value, null, null));
  }
  return insertIntoBST(root.getRight(), value);
  // In total: logn
}

// returns boolean indicates the removal success/failure. or the root, in case the value to be removed is the root - then we return the new root
function removeFromBST<T>(root: TreeNode<T> | null, value: T): boolean {
  if (!root) {
    return false;
  }

  // 1) needs to delete the root
  // 2) needs to delete a middle node - that has two children nodes
  // 3) needs to delete a middle node - that has only 1 child (left or right)
  // 4) needs to delete a node that doesn't have any children nodes

  if (root.getValue() == value) {
    let right = root.getRight();
    let left = root.getLeft();

    if (!right && !left) {
      root = null;
      return true;
    }

    if (right && left) {
      const lowestNodeInRight = getLowestNodeInTree(right);
      lowestNodeInRight?.setLeft(left);
      root = right;
      return true;
    }

    if (right) {
      root = right;
      return true;
    }

    if (left) {
      root = left;
      return true;
    }
  }

  if (root.getValue() > value) {
    return removeFromBST<T>(root.getLeft(), value);
  }
  return removeFromBST<T>(root.getRight(), value);
}

// HW:
// 1) Implement a search in a BST (a "find" function that gets a root and a value - and return the node where it exists)
// 2) Implement a BST insertion function (called insert()): accepting a root, and a value, and insert the value to the proper place in the tree
    // Note - the tree should remain a BST!
    // Note - you can assume that there are no duplicates in the tree
// 3) Implement a BST removal function (called remove()): accepting a root, and a value, and removes the node which has this value from the BST
    // Note - the tree should remain a BST!

/* for next lesson:
  1)
  2) Learn about logn, cover shortly about sorting and why it's n*logn

*/


function searchItemInSortedArray(arr: number[], value: number) {
  let right = arr.length-1;
  let left = 0;
  let middleIndex = (right+left)/2;

  while(middleIndex != right && middleIndex != left) {
    if (arr[middleIndex] == value) {
      return middleIndex;
    }

    if (value > arr[middleIndex]) {
      left = middleIndex;
    } else {
      right = middleIndex;
    }
    middleIndex = Math.ceil((right + left) / 2);
  }
  return middleIndex;

  // In total: logn - since in every iteration we divide the options by 2
}

/*
  // assuming we are searching for the floor of the egg to be broken, this is the algorithm:

  let top = lastIndex;
  let bottom = 0;
  let middleIndex = (top + bottom)/2;

  while (middleIndex != top && middleIndex != bottom) {
    const isBroken = throwEgg();

    if (isBroken) {
      top = middleIndex;
    } else {
      bottom = middleIndex;  
    }
    middleIndex = Math.ceil((top + bottom) / 2);
  }

  return middleIndex;


  100 -> 50 -> 25 -> 12 -> 6 -> 3 -> 1

  1 -> 2 -> 4 -> 8 -> 16 -> 32 -> 64 -> 128

  log2_n -> how much can i divide n by 2, until i reach 1
    Or: how much should i multiply 1 by 2, until i reach n
/*

m=50
m=75


*/

100


75

72

72

71

70

69

63

50


25


0