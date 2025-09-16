class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) return false;

    function cousinFinder(nodeFinder, currentNode, level = 0, data = { level: 0, parent: null}) {
        if (data.parent) return false;
        if (currentNode.left === nodeFinder || currentNode.right === nodeFinder) {
            data.level = level + 1;
            data.parent = currentNode;
        }
        if(currentNode.left) {
            cousinFinder(nodeFinder, currentNode.left, level + 1, data);
        }    
        if(currentNode.right) {
            cousinFinder(nodeFinder, currentNode.right, level + 1, data);
        }
        return data;
    }

    let node1Info = cousinFinder(node1, this.root);
    let node2Info = cousinFinder(node2, this.root);

    let sameLevel = node1Info && node1Info.level === node2Info.level;
    let differentParents = node1Info && node2Info && node1Info.parent !== node2Info.parent;
    return sameLevel && differentParents;
  }


  static serialize(tree) {
    const values = [];

    function traverseTree(node) {
        if (node) {
            values.push(node.val);
            traverseTree(node.left);
            traverseTree(node.right);
        } else {
            values.push ("#")
        }
    }
    traverseTree(tree.root);
    return values.join('');    
  }

  static deserialize(stringTree) {
    if (!stringTree) return null;

    const values = stringTree.split('');

    function binaryTree() {
        if (values.length) {
            const current = values.shift();

            if (current === '#') return null;

            let currentNode = new BinaryTreeNode(+current);
            currentNode.left = binaryTree();
            currentNode.right = binaryTree();

            return current;
        }
    }

    const tree = binaryTree();
    return new BinaryTree(tree);

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

    lowestCommonAncestor(node1, node2, currentNode=this.root) {
    if (currentNode === null) return null;

    if (currentNode === node1 || currentNode === node2) return currentNode;

    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    if (left !== null && right !== null) return currentNode;

    if (left !== null || right !== null) return left || right;

    if (left === null && right === null) return null;
    
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function lowestCommonAncestor(root, a, b) {
  if (root === null) {
    return null;
  }

  if (root === a || root === b) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, a, b);

  const right = lowestCommonAncestor(root.right, a, b);

  if (left !== null && right !== null) {
    return root;
  }
  else if (left !== null || right !== null) {
    return left || right;
  }
  else if (left === null && right === null) {
    return null;
  }
}


 

module.exports = { TreeNode, lowestCommonAncestor };
module.exports = { BinaryTree, BinaryTreeNode };
