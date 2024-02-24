class heap{
    constructor(){
        this.arr = []
    }

    getParent(i){
        return Math.floor((i-1)/2)
    }

    getLeftChild(i){
        return 2*i+1
    }

    getRightChild(i){
        return 2*i+2
    }

    swap(i,j){
        let temp = this.arr[i];
        this.arr[i] = this.arr[j]   
        this.arr[j] = temp
    }

    insert(key){
        this.arr[this.arr.length] = key
        this.heapifyUp()
    }
    
    heapifyUp(){
        let currIndex = this.arr.length-1
        while(this.arr[currIndex] > this.arr[this.getParent(currIndex)]){
            this.swap(currIndex,this.getParent(currIndex))

            currIndex = this.getParent(currIndex)
        }
    }

}

const h = new heap(10)

h.insert(25)
h.insert(5)
h.insert(40)
h.insert(70)
// h.insert(90)
// h.insert(44)
console.log(h.arr);