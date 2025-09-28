class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray) {
        this.addVertex(node);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of this.nodes) {
        if(node.adjacent.has(vertex)) {
            node.adjacent.delete(vertex);
        }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let visitStack = new Set();
    let result = [];
    
    function traverse (vertex) {
        if (!vertex) {
            return null;
        }
        visitStack.add(vertex);
        result.push(vertex.value);
        vertex.adjacent.forEach(neighbor => {
            if (!visitStack.has(neighbor)) {
                return traverse(neighbor);
            }
        });
    }
    
    traverse(start);

    return result;
    }
  

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start];
    let result = [];
    let seen = new Set ();
    let currValue;

    seen.add(start);

    while (queue.length) {
        currValue = queue.shift();
        result.push(currValue.value);

        currValue.adjacent.forEach(neighbor => {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                queue.push(neighbor);
            }
        });        
    }
    return result;
  }

  shortestPath(start, end) {
    if (start === end) {
        return [start.value];
    }

    let queue = [start];
    let seen = new Set();
    let path = [];
    let parent = {};

    while (queue.length) {
        let currValue = queue.shift();
        if (currValue === end) {
            let stop = parent[end.value];
            while(stop) {
                path.push(stop);
                stop = parent[stop];
            }
            path.unshift(start.value);
            path.reverse();
            return path;
        }

        seen.add(currValue);
        for(let vertex of currValue.adjacent) {
            if (!seen.has(vertex)) {
                parent[vertex.value] = currValue.value;
                queue.push(vertex);
            }
        }
    }
  }

  hasCycle() {
    let seen = new Set();
    let recursion = new Set();

    for (const vertex of this.adj.keys()) {
        if (!seen.has(vertex)) {
            if(this.depthFirstSearch(vertex, seen, recursion)) {
                return true;
            }
        }
    }

    return false;
  }
}

module.exports = {Graph, Node}