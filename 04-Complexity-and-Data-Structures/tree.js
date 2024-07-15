"use strict";
// https://www.simplilearn.com/tutorials/data-structure-tutorial/trees-in-data-structure
// Complexity of inserting an element to a tree - O(logn)
// Complexity of searching for an element in a tree - O(logn)
class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
    getRight() {
        return this.right;
    }
    setRight(newRight) {
        this.right = newRight;
    }
    getLeft() {
        return this.left;
    }
    setLeft(newLeft) {
        this.left = newLeft;
    }
}
// create a binary tree:
// note that this tree is a binary tree, but isn't a binary-search-tree (BST)
const treenode7 = new TreeNode(7, null, null);
const treenode6 = new TreeNode(6, null, null);
const treenode5 = new TreeNode(5, null, null);
const treenode4 = new TreeNode(4, null, null);
const treenode3 = new TreeNode(3, treenode6, treenode7);
const treenode2 = new TreeNode(2, treenode4, treenode5);
const root = new TreeNode(1, treenode2, treenode3);
// Creaing a binary-search-tree
// Binary search tree - a binary tree, that for each node - all of its right sub-tree have a bigger values than the node, and all the left sub-tree have a smaller values than the node
// This is a BST:
const treenode7_2 = new TreeNode(7, null, null);
const treenode5_2 = new TreeNode(5, null, null);
const treenode3_2 = new TreeNode(3, null, null);
const treenode1_2 = new TreeNode(1, null, null);
const treenode2_2 = new TreeNode(2, treenode1_2, treenode3_2);
const treenode6_2 = new TreeNode(6, treenode5_2, treenode7_2);
const root_2 = new TreeNode(4, treenode2_2, treenode6_2);
// Question - where will be the node with the lowest value in a BST?
// Answer - We go left and left and left until we reach null - this is the node with the lowest value
function getLowestValueInTree(root) {
    if (root.getValue() == null) {
        return null;
    }
    const left = root.getLeft();
    if (left == null) {
        return root.getValue();
    }
    else {
        return getLowestValueInTree(left);
    }
}
function getLowestNodeInTree(root) {
    if (root.getValue() == null) {
        return null;
    }
    const left = root.getLeft();
    if (left == null) {
        return root;
    }
    else {
        return getLowestNodeInTree(left);
    }
    // In total: logn
}
// Implement the same answer, but this time return also the path to the lowest value:
function getLowestValueInTreeWithPath(root, path = '') {
    if (root.getValue() == null) {
        return [null, '-'];
    }
    const left = root.getLeft();
    if (left == null) {
        return [root.getValue(), path];
    }
    else {
        return getLowestValueInTreeWithPath(left, path + '->' + root.getValue());
    }
}
getLowestValueInTreeWithPath(root_2);
function findNodeInTree(root, value) {
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
function insertIntoBST(root, value) {
    if (!root) {
        return false;
    }
    if (root.getValue() == value) {
        return false;
    }
    if (root.getValue() > value) {
        if (!root.getLeft()) {
            root.setLeft(new TreeNode(value, null, null));
            return true;
        }
        return insertIntoBST(root.getLeft(), value);
    }
    if (!root.getRight()) {
        root.setRight(new TreeNode(value, null, null));
    }
    return insertIntoBST(root.getRight(), value);
    // In total: logn
}
class Tree {
    constructor(root) {
        this.root = root;
    }
    getRoot() {
        return this.root;
    }
    setRoot(root) {
        this.root = root;
    }
}
// returns boolean indicates the removal success/failure. or the root, in case the value to be removed is the root - then we return the new root
function removeItemFromBST(tree, value) {
    let root = tree.getRoot();
    if (!root) {
        return false;
    }
    // 1) needs to delete the root
    // 2) needs to delete a middle node - that has two children nodes
    // 3) needs to delete a middle node - that has only 1 child (left or right)
    // 4) needs to delete a node that doesn't have any children nodes
    let currentNode = root;
    let previousNode = root;
    let isInRoot = true;
    while (currentNode != null) {
        if (currentNode.getValue() == value) {
            let right = root.getRight();
            let left = root.getLeft();
            if (!right && !left) {
                if (isInRoot) {
                    tree.setRoot(null);
                }
                return true;
            }
            if (right && left) {
                const lowestNodeInRight = getLowestNodeInTree(right);
                lowestNodeInRight === null || lowestNodeInRight === void 0 ? void 0 : lowestNodeInRight.setLeft(left);
                if (isInRoot) {
                    tree.setRoot(right);
                }
                else {
                    if (previousNode.getValue() > right.getValue()) {
                        previousNode === null || previousNode === void 0 ? void 0 : previousNode.setLeft(right);
                    }
                    else {
                        previousNode === null || previousNode === void 0 ? void 0 : previousNode.setRight(right);
                    }
                }
                return true;
            }
            if (right) {
                if (isInRoot) {
                    tree.setRoot(right);
                }
                else {
                    if ((previousNode === null || previousNode === void 0 ? void 0 : previousNode.getValue()) > right.getValue()) {
                        previousNode === null || previousNode === void 0 ? void 0 : previousNode.setLeft(right);
                    }
                    else {
                        previousNode === null || previousNode === void 0 ? void 0 : previousNode.setRight(right);
                    }
                }
                return true;
            }
            if (left) {
                if (isInRoot) {
                    tree.setRoot(left);
                }
                else {
                    if ((previousNode === null || previousNode === void 0 ? void 0 : previousNode.getValue()) > left.getValue()) {
                        previousNode === null || previousNode === void 0 ? void 0 : previousNode.setLeft(left);
                    }
                    else {
                        previousNode === null || previousNode === void 0 ? void 0 : previousNode.setRight(left);
                    }
                }
                return true;
            }
        }
        else {
            previousNode = currentNode;
            if (currentNode.getValue() > value) {
                currentNode = currentNode.getLeft();
            }
            else {
                currentNode = currentNode.getRight();
            }
            isInRoot = false;
        }
    }
    return false;
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
function searchItemInSortedArray(arr, value) {
    let right = arr.length - 1;
    let left = 0;
    let middleIndex = (right + left) / 2;
    while (middleIndex != right && middleIndex != left) {
        if (arr[middleIndex] == value) {
            return middleIndex;
        }
        if (value > arr[middleIndex]) {
            left = middleIndex;
        }
        else {
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
100;
75;
72;
72;
71;
70;
69;
63;
50;
25;
0;
