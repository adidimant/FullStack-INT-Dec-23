"use strict";
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function removeItemFromBST(root, key) {
    // בסיס המקרה
    if (root === null) {
        return root;
    }
    // אם המפתח להסרה קטן מהמפתח של השורש, חפש בתת-העץ השמאלי
    if (key < root.val) {
        root.left = removeItemFromBST(root.left, key);
    }
    // אם המפתח להסרה גדול מהמפתח של השורש, חפש בתת-העץ הימני
    else if (key > root.val) {
        root.right = removeItemFromBST(root.right, key);
    }
    // אם המפתח להסרה שווה למפתח של השורש
    else {
        // צומת עם ילד אחד או ללא ילדים
        if (root.left === null) {
            return root.right;
        }
        else if (root.right === null) {
            return root.left;
        }
        // צומת עם שני ילדים: מצא את המינימום בתת-העץ הימני
        let temp = findMinValueNode(root.right);
        // העתק את תוכן המינימום לצומת זה
        root.val = temp.val;
        // הסר את המינימום בתת-העץ הימני
        root.right = removeItemFromBST(root.right, temp.val);
    }
    return root;
}
function findMinValueNode(node) {
    let current = node;
    // מצא את העלה השמאלי ביותר
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}
