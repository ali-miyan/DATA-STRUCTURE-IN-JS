class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
    }

    insert(data){
        const nodeData = new Node(data)
        if(this.isEmpty()){
            this.root = nodeData
        }else{
            this.insertFunction(this.root,nodeData)
        }
    }

    insertFunction(subRoot,node){
        if(node.data < subRoot.data){
            if(subRoot.left == null){
                subRoot.left = node
            }else{
                this.insertFunction(subRoot.left,node)
            }
        }else{
            if(subRoot.right == null){
                subRoot.right = node
            }else{
                this.insertFunction(subRoot.right,node)
            }
        }
    }


 
    consoleValuesInOrder(node = this.root) {
        if (node !== null) {
            this.consoleValuesInOrder(node.left);
            console.log(node.data);
            this.consoleValuesInOrder(node.right);
        }
    }
}

const tree = new Tree()
console.log(tree.isEmpty());
tree.insert(10)
tree.insert(20)
tree.insert(3)
tree.consoleValuesInOrder()
