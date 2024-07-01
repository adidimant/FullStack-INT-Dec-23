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