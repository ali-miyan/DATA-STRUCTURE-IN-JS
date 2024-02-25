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


    removeRoot() {
        if (this.arr.length === 0) {
            return null; // Heap is empty
        }
        
        const root = this.arr[0]; // Store the root element to return later
        const lastElement = this.arr.pop(); // Remove the last element and store it
        
        if (this.arr.length > 0) {
            this.arr[0] = lastElement; // Move the last element to the root
            this.heapifyDown(0); // Restore the heap property by heapifying down from the root
        }
        
        return root; // Return the original root element
    }
    
    heapifyDown(index) {
        let largest = index;
        const left = this.getLeftChild(index);
        const right = this.getRightChild(index);
    
        if (left < this.arr.length && this.arr[left] > this.arr[largest]) {
            largest = left;
        }
    
        if (right < this.arr.length && this.arr[right] > this.arr[largest]) {
            largest = right;
        }
    
        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
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