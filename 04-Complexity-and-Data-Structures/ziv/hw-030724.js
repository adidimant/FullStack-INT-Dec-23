"use strict";
// returns boolean indicates the removal success/failure. or the root, in case the value to be removed is the root - then we return the new root
function removeFromBST(root, value) {
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
            lowestNodeInRight === null || lowestNodeInRight === void 0 ? void 0 : lowestNodeInRight.setLeft(left);
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
        return removeFromBST(root.getLeft(), value);
    }
    return removeFromBST(root.getRight(), value);
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
