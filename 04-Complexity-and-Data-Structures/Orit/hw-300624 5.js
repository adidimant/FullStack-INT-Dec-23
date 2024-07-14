"use strict";
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
function findInBST(root, searchFor) {
    if (root == null) {
        return null;
    }
    if (root.getValue() == searchFor) {
        return root;
    }
    if (searchFor < root.getValue()) {
        return findInBST(root.getLeft(), searchFor);
    }
    return findInBST(root.getRight(), searchFor);
}
function insertIntoBST(root, value) {
    if (!root) {
        return false;
    }
    if (root.getValue() == value) {
        return false;
    }
    /*if (root.getValue() == null) {
        root.setValue(value);
    }*/
    if (root.getValue > value) {
        if (!root.getLeft) {
            root.setLeft(new TreeNode(value, null, null));
        }
        return insertIntoBST(root.getLeft(), value);
    }
    if (!root.getRight) {
        root.setRight(new TreeNode(value, null, null));
    }
    return insertIntoBST(root.getRight(), value);
}
function removeFromBST(root, value) {
    var _a;
    if (!root) {
        return false;
    }
    if (root.getValue() == value) {
        // do something
        return true;
    }
    if (root.getLeft() && ((_a = root.getLeft()) === null || _a === void 0 ? void 0 : _a.getValue()) == value) {
        root.getLeft().s;
    }
    if (root.getValue() > value) {
        if () { }
        return removeFromBST(root.getLeft(value));
    }
}
// HW:
// 3) Implement a BST removal function (called remove()): accepting a root, and a value, and removes the node which has this value from the BST
// Note - the tree should remain a BST!
