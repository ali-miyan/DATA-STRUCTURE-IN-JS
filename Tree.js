class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root == null
    }

    insertRecursivly(data) {
        const nodeData = new Node(data)
        if (this.isEmpty()) {
            this.root = nodeData
        } else {
            this.insertFunction(this.root, nodeData)
        }
    }

    insertFunction(subRoot, node) {
        if (node.data < subRoot.data) {
            if (subRoot.left == null) {
                subRoot.left = node
            } else {
                this.insertFunction(subRoot.left, node)
            }
        } else {
            if (subRoot.right == null) {
                subRoot.right = node
            } else {
                this.insertFunction(subRoot.right, node)
            }
        }
    }

    searchRecursivly(root, val) {
        if (!root) {
            return false
        }
        if (root.data == val) {
            return true
        } else if (root.data < val) {
            return this.search(root.left, val)
        } else {
            return this.search(root.right, val)
        }
    }

    insertNormal(data) {
        const nodeData = new Node(data)
        let curr = this.root
        if(!this.root){
            this.root = nodeData
            return
        }
        while(true){
        if(curr.data > data){
            if(curr.left == null){
                curr.left = nodeData
                break
            }else{
                curr = curr.left
            }
        }else{
            if(curr.right == null){
                curr.right = nodeData
                break
            }else{
                curr = curr.right
            }
        }
                    
        }
    }

    searchNormal(val){
        let curr = this.root
        while(curr){
            if(curr.data == val){
                return true
            }
            if(curr.data > val){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        return false
    }

    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.data);
        }
    }

    levelWise(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.data);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.data
        }
        return this.min(root.left)
    }

    max(root){
        if(!root.right){
            return root.data
        }
        return this.max(root.right)
    }

    removeLeaf(root,val){
        if(!root){
            return 
        }
        let lastNode = this.removeLeaf(root.left,val)
        root.left = null
    }

        delete(val){
            this.root = this.deleteRec(this.root,val)
        }

        deleteRec(root,val){
            if(root == null){
                return root
            }
            if(val < root.data){
                root.left = this.deleteRec(root.left,val)
            }else if(val > root.data){
                root.right = this.deleteRec(root.right,val)
            }else{
                if(!root.right && !root.left){
                    return null
                }
                if (!root.left) {
                    return root.right;
                } else if (!root.right){
                    return root.left;
                }

                root.data = this.min(root.right)
                root.right = this.deleteRec(root.right,root.data)
            }
            return root
        }

}   

const tree = new Tree()
tree.insertNormal(100)
tree.insertNormal(50)
tree.insertNormal(30)
tree.insertNormal(150)
tree.insertNormal(130)
tree.insertNormal(200)


console.log(tree.searchNormal(100));
// tree.delete(150)

// tree.removeLeaf(tree.root,30)

// console.log(tree.isEmpty());

// tree.insertRecursivly(10)
// tree.insertRecursivly(20)
// tree.insertRecursivly(3)
// console.log(tree.searchRecursivly(tree.root, 100));
// console.log(tree.searchNormal(100));
// console.log('level wise');
// tree.levelWise()

// console.log('preOrder');                        ///////ROOT,LEFT,RIGHT
// tree.preOrder(tree.root) 
console.log('inOrder');                      ///////LEFT,ROOT,RIGHT
tree.inOrder(tree.root)

// console.log('postOrder');                    ///////LEFT,RIGHT,ROOT
// tree.postOrder(tree.root)

console.log('min',tree.min(tree.root),'max',tree.max(tree.root));