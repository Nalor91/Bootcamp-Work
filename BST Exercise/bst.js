class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null) {
        this.root = new Node(val)
        return this;
    }

    let value = this.root;
    while(true) {
        if(val < value.val) {
            if(value.left === null) {
                value.left = new Node (val);
                return this;
            } else value = value.left;
        } else if ( val > value.val) {
            if (value.right === null) {
                value.right = new Node (val);
                return this;
            } else value = value.right;
        }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, value = this.root) {
    if(this.root === null) {
        this.root = new Node(val)
        return this;
    }

    if(val < value.val){
        if(value.left === null) {
            value.left = new Node (val);
            return this;
        }
        return this.insertRecursively(val, value.left);
    } else {
        if (value.right === null) {
            value.right = new Node (val);
            return this;
        }
        return this.insertRecursively(val, value.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let found = false;

    if(currentNode === val) return currentNode;

    while(currentNode && !found) {
        if(val < currentNode.val) {
            currentNode = currentNode.left;
        } else if (val > currentNode.val) {
            currentNode = currentNode.right;
        } else {
            found = true;
        }
    }
    if (!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, value = this.root) {
    if (this.root === null) return undefined;

    if (val < value.left) {
        if (value.left === null) return undefined;
        return this.findRecursively(val, value.left);
    } else if (val > value.right) {
        if (value.right === null) return undefined;
        return this.findRecursively(val, value.right);
    }
    return value;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let value = this.root;

    function traverse(node) {
        data.push(node.val);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    }
    traverse(value);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let value = this.root;

    function traverse(node) {        
        node.left && traverse(node.left);
        data.push(node.val);
        node.right && traverse(node.right);
    }
    traverse(value);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let value = this.root;

    function traverse(node) {        
        node.left && traverse(node.left);        
        node.right && traverse(node.right);
        data.push(node.val);
    }
    traverse(value);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = [];
    let node = this.root;
    let bfs = [];

    bfs.push(node);

    while (bfs.length) {
        node = bfs.shift();
        data.push(node.val);
        if (node.left) {
            bfs.push(node.left);
        }
        if (node.right) {
            bfs.push(node.right);
        }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let removeNode = this.root;
    let parent;

    while (removeNode.val !== val) {
        parent = removeNode;
        if (val < removeNode.val) {
            removeNode = removeNode.left;
        } else {
            removeNode = removeNode.right;
        }
    }

    if (removeNode !== this.root) {
        if (removeNode.left === null && removeNode.right === null) {
            if (parent.left === removeNode) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        } else if ( removeNode.left !== null && removeNode.right !== null) {
            let rightParent = removeNode;
            let right = removeNode.right;
            if (right.left === null) {
                right.left = removeNode.left;
                if (parent.left === removeNode) {
                    parent.left = right;
                } else {
                    parent.right = right;
                }
            } else {
                while (right.left !== null) {
                    rightParent = right;
                    right = right.left;
                }
                if (parent.left === removeNode) {
                    parent.left.val = right.val;
                } else {
                    parent.right.val = right.val;
                }
                if (right.right !== null) {
                    rightParent.left = right.right;
                } else {
                    rightParent.left = null;
                }
            }
        } else {
            if (parent.left === removeNode) {
                if (removeNode.right === null) {
                    parent.left = removeNode.left;
                } else {
                    parent.left =removeNode.right;
                }
            } else {
                if (removeNode.right === null) {
                    parent.left = removeNode.left;
                } else {
                    parent.right = removeNode.right;
                }
            }
        }
    }

    return removeNode;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(value = this.root) {
    if (value === null) return;
    return maxDepth(value) - minDepth(value) <=1;

    function minDepth(value) {
        if (value === null) return 0;
        return 1 + Math.min(minDepth(value.left), minDepth(value.right));
    }

    function maxDepth(value) {
        if (value === null) return 0;
        return 1 + Math.max(maxDepth(value.left), maxDepth(value.right));
    }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(value = this.root) {
    if (!this.not || (!this.root.left && !this.root.right)) return; 

    while (value) {
        if(value.left && !value.right) {
            return this.findSecondHighest(value.left);
        }

        if (value.right && (!value.right.left && !value.right.right)) {
            return value.val;
        }

        value = value.right
    }
  }

  dfsInOrderIteratively () {
    let value = this.root; 
    let data = [];
    let dfs = [];
    while (data.length > 0 || value) {
        while (value) {
            data.push(value);
            value = value.left;
        }
        value = data.pop();
        if (value) {
            dfs.push(value.val);
            value = value.right;
        }
    }
    return dfs;
  }
}

module.exports = BinarySearchTree;
