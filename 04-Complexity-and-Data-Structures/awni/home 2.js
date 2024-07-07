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
// HW:
// 1) Implement a search in a BST (a "find" function that gets a root and a value - and return the node where it exists)
function find(root, value) {
    if (root.getValue() == value) {
        return root;
    }
    if (root.getValue() < value) {
        const right = root.getRight(); // the value is bigger than the root value - so we need to search in the right sub-tree
        if (right == null) {
            return null; // no right sub-tree - the value doesn't exist in the tree 
        }
        else {
            return find(right, value); // search in the right sub-tree recursively 
        }
    }
    else {
        const left = root.getLeft(); // the value is smaller than the root value - so we need to search in the left sub-tree
        if (left == null) {
            return null; // no left sub-tree - the value doesn't exist in the tree 
        }
        else {
            return find(left, value); // search in the left sub-tree recursively  
        }
    }
}
// 2) Implement a BST insertion function (called insert()): accepting a root, and a value, and insert the value to the proper place in the tree
// Note - the tree should remain a BST!
// Note - you can assume that there are no duplicates in the tree
/**
 In a Binary Search Tree (BST), the nodes are organized in a specific way to allow for efficient searching and sorting.
 The rule is that for any given node, all the values in its left subtree are smaller than the node's value, and all the values in its right subtree are greater than the node's value.

This organization allows us to quickly search for a specific value in the tree. When searching for a value,
we start at the root node and compare the value we're looking for with the current node's value. If the value is smaller,
we move to the left subtree. If the value is greater, we move to the right subtree. We continue this process until we find the value or reach a leaf node (a node with no children).

By following this rule, we can eliminate half of the remaining nodes at each step of the search,
making the search process very efficient. This is similar to how we search for a word in a dictionary by flipping through the pages, starting from the middle.

Here's a simple example to illustrate this:

Let's say we have the following values: [5, 3, 7, 2, 4, 6, 8]

If we insert these values into a BST one by one, the resulting tree would look like this:

```
        5
       / \
      3   7
     / \ / \
    2  4 6  8
```

As you can see, the smaller values are on the left side of each node, and the larger values are on the right side.
 This organization allows us to efficiently search for values in the tree
 */
function insert(root, value) {
    if (root.getValue() == null) { // the root is empty - insert the value to the root  
        root.setValue(value);
        return;
    }
    if (root.getValue() < value) { // the value is bigger than the root value - so we need to insert it to the right sub-tree  
        const right = root.getRight();
        if (right == null) {
            root.setRight(new TreeNode(value, null, null)); // no right sub-tree - insert the value to the right  
        }
        else {
            insert(right, value); // insert the value to the right sub-tree recursively   
        }
    }
    else {
        const left = root.getLeft(); // the value is smaller than the root value - so we need to insert it to the left sub-tree  
        if (left == null) {
            root.setLeft(new TreeNode(value, null, null)); // no left sub-tree - insert the value to the left  
        }
        else {
            insert(left, value); // insert the value to the left sub-tree recursively  
        }
    }
}
function remove(root, value) {
    if (root === null) {
        return null; // value not found in the tree
    }
    if (value < root.getValue()) {
        root.setLeft(remove(root.getLeft(), value)); // search in the left sub-tree recursively
    }
    else if (value > root.getValue()) {
        root.setRight(remove(root.getRight(), value)); // search in the right sub-tree recursively
    }
    else {
        // Case 1: No child or only one child
        if (root.getLeft() === null) {
            return root.getRight();
        }
        else if (root.getRight() === null) {
            return root.getLeft();
        }
        // Case 2: Two children
        const minValue = getLowestValueInTree(root.getRight());
        root.setValue(minValue); // replace the value of the node with the lowest value in the right sub-tree
        root.setRight(remove(root.getRight(), minValue)); // remove the node with the lowest value in the right sub-tree
    }
    return root;
}
const newRoot = remove(root_2, 5);
/* for next lesson:
 
  2) Learn about logn, cover shortly about sorting and why it's n*logn

*/
