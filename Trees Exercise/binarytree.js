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

  minDepth() {
    if (!this.root) return 0;

    function minDepthHelp(node) {
        if (node.left === null && node.right === null) return 1;
        if (node.left === null) return minDepthHelp(node.right) + 1;
        if (node.right === null) return minDepthHelp(node.left) + 1;
        return ( Math.min(minDepthHelp(node.left), minDepthHelp(node.right)) + 1);
    }

    return minDepthHelp(this.root);
  }

  maxDepth() {
    if (!this.root) return 0;

    function maxDepthHelp(node) {
        if (node.left === null && node.right === null) return 1;
        if (node.left === null) return maxDepthHelp(node.right) + 1;
        if (node.right === null) return maxDepthHelp(node.left) + 1;
        return (Math.max(maxDepthHelp(node.left), maxDepthHelp(node.right)) + 1);
    }

    return maxDepthHelp(this.root);
  }

  maxSum() {
    let total = 0;

    function maxSumHelp(node) {
        if (node === null) return 0;
        const leftNode = maxSumHelp(node.left);
        const rightNode = maxSumHelp(node.right);
        total = Math.max(total, node.val + leftNode + rightNode);
        return Math.max(0, leftNode + node.val, rightNode + node.val);
    }

    maxSumHelp(this.root);
    return total;

  }

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let next = [this.root];
    let closest = null;

    while (next.length) {
        let current = next.shift();
        let value = current.val;
        let higherThanLowerBound  = value > lowerBound;
        let reassign = value < closest || closest === null;

        if (higherThanLowerBound && reassign) {
            closest = value;
        }

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return closest
  }
}
  
module.exports = { BinaryTree, BinaryTreeNode };
