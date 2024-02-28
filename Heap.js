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
        let temp = this.arr[i]
        this.arr[i] = this.arr[j]
        this.arr[j] = temp
    }

    insert(key){
        this.arr[this.arr.length] = key
        this.heapifyUp()
    }
    


    heapifyUp(){
        let ind = this.arr.length-1
        while(this.arr[ind] > this.arr[this.getParent(ind)]){
            this.swap(ind,this.getParent(ind))

            ind = this.getParent(ind)
        }
    }


    removeRoot(){
        if(this.arr.length == 0 ){
            return null
        }
        let root = this.arr[0]
        let last = this.arr.pop()

        if(this.arr.length > 0){
            this.arr[0] = last
            this.heapifyDown(0)
        }
        
        return root
    }
    heapifyDown(index) {
        let largest = index
        let left = this.getLeftChild(largest)
        let right = this.getRightChild(largest)

        if(left < this.arr.length && this.arr[left] > this.arr[largest]){
            largest = left
        }

        if(right < this.arr.length && this.arr[right] > this.arr[largest]){
            largest = right
        }

        if(largest !== index){
            this.swap(index,largest)
            this.heapifyDown(largest)
        }

    }
}

const h = new heap(10)

h.insert(25)
h.insert(5)
h.insert(40)
h.insert(70)
h.insert(3)
h.removeRoot()
// h.insert(90)
// h.insert(44)
console.log(h.arr);