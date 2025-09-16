
class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumInts (node) { 
      for(let child of node.children) {
        total += child.val;
        if(child.children.length > 0){
          sumInts(child);
        }
      }
    }

    sumInts(this.root);
    return total;
  }

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensHelper(node) {
      for(let child of node.children) {
        if (child.val % 2 === 0) count++;
        if (child.children.length > 0) {
          countEvensHelper(child);
        }
      }
    } 

    countEvensHelper(this.root);
    return count;

  }

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let greaterNum = this.root.val > lowerBound ? 1:0;

    function greaterBound(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) count++;
        if (child.children.length > 0) {
          greaterBound(child);
        }
      }
    }
    
    greaterBound(this.root);
    return count;
  }
}

module.exports = {Tree, TreeNode};

