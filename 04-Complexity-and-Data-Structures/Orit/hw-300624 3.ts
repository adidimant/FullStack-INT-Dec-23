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

  function findInBST<T>(root: TreeNode<T> | null, searchFor: T): TreeNode<T> | null | undefined { //why does it need undefined?
    if (root == null) {
        return null;
    }
    if (root.getValue() == searchFor) {
        return root;
    }

    if (searchFor < root.getValue()) {
        return findInBST(root.getLeft(), searchFor);
    }  
    return findInBST(root.getRight(), searchFor)
}

function insertIntoBST<T>(root: TreeNode<T> | null, value: T): boolean {
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
            root.setLeft(new TreeNode<T>(value, null, null))
        }
        return insertIntoBST(root.getLeft(), value);
    }
    if (!root.getRight) {
        root.setRight(new TreeNode<T>(value, null, null))
    }
    return insertIntoBST(root.getRight(), value);
}

function removeFromBST<T>(root: TreeNode<T> | null, value: T): boolean {
    if (!root) {
        return false;
    }
    if (root.getValue() == value) {
        // do something
        return true;
    }
    if (root.getLeft() && root.getLeft()?.getValue() == value) {
        root.getLeft().s  
    }
    if (root.getValue() > value){
        if () {}
        return removeFromBST(root.getLeft(, value))
    }
}







// HW:
// 3) Implement a BST removal function (called remove()): accepting a root, and a value, and removes the node which has this value from the BST
    // Note - the tree should remain a BST!
