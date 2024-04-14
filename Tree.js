class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const nodeData = new Node(data)
        if (!this.root) {
            this.root = nodeData
            return
        }
        let curr = this.root
        while (curr) {
            if (curr.data > data) {
                if (curr.left == null) {
                    curr.left = nodeData
                    break
                } else {
                    curr = curr.left
                }
            } else {
                if (curr.right == null) {
                    curr.right = nodeData
                    break
                } else {
                    curr = curr.right
                }
            }
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }

    search(val) {
        let curr = this.root
        while (curr) {
            if (curr.data == val) return true
            else if (curr.data > val) curr = curr.left
            else curr = curr.right
        }
        return false
    }
    min(root) {
        if (!root.left) {
            return root.data
        }
        return this.min(root.left)
    }

    max(root) {
        if (!root.right) {
            return root.data
        }
        return this.max(root.right)
    }

    levelWise() {
        let queue = []
        queue.push(this.root)

        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.data)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    delete(val) {
        this.root = this.delHelper(this.root, val)
    }

    delHelper(root, val) {
        if (root == null) {
            return root
        }
        if (root.data > val) {
            root.left = this.delHelper(root.left, val)
        } else if (root.data < val) {
            root.right = this.delHelper(root.right, val)
        } else {
            if (!root.right && !root.left) {
                return null
            }
            if (!root.right) {
                return root.left
            } else if (!root.left) {
                return root.right
            }
            root.data = this.min(root.right)
            root.right = this.delHelper(root.right, root.data)
        }
        return root
    }

}

const tree = new Tree()

tree.insert(10)
tree.insert(8)
tree.insert(2)
tree.insert(9)
tree.insert(30)
tree.insert(20)
tree.insert(40)

// tree.delete(2)


// console.log(tree.search(30))

// tree.inOrder(tree.root)
// tree.preOrder(tree.root)
// tree.postOrder(tree.root)
// tree.levelWise()


// console.log(tree.min(tree.root))
// console.log(tree.max(tree.root))


///////////////////////////////////////////////LEET CODE:938. Range Sum of BST/////////////////////////////////


var rangeSumBST = function(root, low, high) {
    let sum = 0
    if(root){
            if(root.data >= low && root.data <= high) {
                sum += root.data
            }
            sum += rangeSumBST(root.left,low,high)
            sum += rangeSumBST(root.right,low,high)
        }

        return sum
};

console.log(rangeSumBST(tree.root,7,15),'range sum of bst');

////////////////////////////////////////////LEET CODE:404. Sum of Left Leaves////////////////////////////////////

var sumOfLeftLeaves = function (root) {
    let sum = 0;
    
    const traverse = (node, isLeft) => {
        if (!node) return;
        
        if (!node.left && !node.right && isLeft) {
            sum += node.val;
        }
        
        traverse(node.left, true);
        traverse(node.right, false);
    };
    
    traverse(root, false);
    
    return sum;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////