// 1) Implement a search in a BST (a "find" function that gets a root and a value - and return the node where it exists)
// 2) Implement a BST insertion function (called insert()): accepting a root, and a value, and insert the value to the proper place in the tree
    // Note - the tree should remain a BST!
    // Note - you can assume that there are no duplicates in the tree//
// 3) Implement a BST removal function (called remove()): accepting a root, and a value, and removes the node which has this value from the BST
    // Note - the tree should remain a BST!


class TreeNode1 {
    val: number;
    left: TreeNode1 | null;
    right: TreeNode1 | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TreeNode1 | null;

    constructor() {
        this.root = null;
    }

    // Function to find a value in the BST
    find(value: number): TreeNode1 | null {
        return this._findNode(this.root, value);
    }

    private _findNode(node: TreeNode1 | null, value: number): TreeNode1 | null {
        if (node === null || node.val === value) {
            return node;
        } else if (value < node.val) {
            return this._findNode(node.left, value);
        } else {
            return this._findNode(node.right, value);
        }
    }

    // Function to insert a value into the BST
    insert(value: number): void {
        this.root = this._insertNode(this.root, value);
    }

    private _insertNode(node: TreeNode1 | null, value: number): TreeNode1 {
        if (node === null) {
            return new TreeNode1(value);
        }

        if (value < node.val) {
            node.left = this._insertNode(node.left, value);
        } else {
            node.right = this._insertNode(node.right, value);
        }

        return node;
    }

    // Function to remove a value from the BST
    remove(value: number): void {
        this.root = this._removeNode(this.root, value);
    }

    private _removeNode(node: TreeNode1 | null, value: number): TreeNode1 | null {
        if (node === null) {
            return null;
        }

        if (value < node.val) {
            node.left = this._removeNode(node.left, value);
        } else if (value > node.val) {
            node.right = this._removeNode(node.right, value);
        } else {
            // Found the node to remove
            if (node.left === null && node.right === null) {
                // Case 1: No children
                return null;
            } else if (node.left === null) {
                // Case 2: One child (right)
                return node.right;
            } else if (node.right === null) {
                // Case 2: One child (left)
                return node.left;
            } else {
                // Case 3: Two children
                // Find the minimum value node in the right subtree
                let minRight = this._findMin(node.right);
                node.val = minRight.val;
                node.right = this._removeNode(node.right, minRight.val);
            }
        }

        return node;
    }

    private _findMin(node: TreeNode1): TreeNode1 {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }
}

// Usage example:
let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log(bst.find(5)); // Output: TreeNode { val: 5, left: TreeNode { val: 3, ... }, right: TreeNode { val: 7, ... } }
bst.remove(7);
console.log(bst.find(7)); // Output: null (node with value 7 is removed from the BST)

/*
הסבר על הקוד:
מחלקת TreeNode: מייצגת צומת בעץ עם ערך (val) ושני צמתים ילדים (left ו־right).

מחלקת BinarySearchTree:

בניית עץ (constructor): אתחול השורש ל־null.

פונקציה find: מחפשת את הערך בעץ ומחזירה את הצומת אם מצאה אותו, אחרת מחזירה null.

פונקציה insert: מכניסה את הערך למקום המתאים בעץ תוך שמירה על תכונת ה-BST.

פונקציה remove: מסירה את הצומת המכיל את הערך מה-BST ומבצעת את כל המקרים האפשריים (אין ילדים, ילד אחד, שני ילדים).

פונקציות פרטיות:

_findNode: פונקציה רקורסיבית לחיפוש ערך בעץ מהשורש הנתון.
_insertNode: פונקציה רקורסיבית להכנסת ערך לעץ מהשורש הנתון.
_removeNode: פונקציה רקורסיבית להסרת צומת מה-BST מהשורש הנתון.
_findMin: פונקציה למציאת הצומת המינימלית בתת עץ שמאלי.

*/




