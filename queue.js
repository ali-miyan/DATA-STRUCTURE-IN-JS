//////////////////////////////////////queue using list///////////////////////////////////////////////////

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class qList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(data){
    const nodeData = new Node(data)
    if(this.head == null){
      this.head = nodeData
      this.tail = nodeData
    }else{
      this.tail.next = nodeData
      this.tail = nodeData
    }
    this.size++
  }

  dequeue(){
    this.head = this.head.next
    this.size--
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size
  }

  print(){
    let curr = this.head
    while(curr){
      console.log(curr.data);
      curr = curr.next
    }
  }
  peek(){
    return this.head.data
  }

}

const listQ = new qList()

listQ.enqueue(10)
listQ.enqueue(12)
listQ.enqueue(13)
listQ.dequeue()


console.log(listQ.isEmpty());
console.log(listQ.getSize(),'size');
console.log(listQ.peek(),'peek');

listQ.print()


////////////////////////////////////////queue using object///////////////////////////////////////////////////

class queueObj{
  constructor(){
    this.items = {}
    this.front = 0
    this.back = 0
  }

  enqueue(val){
    this.items[this.back] = val
    this.back++
  }

  dequeue(){
    delete this.items[this.front]
    this.front++

  }

  print() {
    console.log(this.items);
}
}

const que = new queueObj()

que.enqueue(1)
que.enqueue(2)
que.enqueue(3)

que.dequeue()


console.log(que.size());
que.print()


//////////////////////////////////////////////////////////////queue using array///////////////////////////////


class Queue{
  constructor(){
    this.items = []
  }

  enqueue(val){
    this.items.push(val)
  }

  dequeue(){
    return this.items.shift()
  }

  isEmpty(){
    return this.items.length === 0
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items);
  }

  reverse(){
    if(this.size() === 0){
      return 
    }

    let frontElement = this.dequeue()

    this.reverse()
    this.enqueue(frontElement)
  }
}


const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

// q.dequeue()

console.log('emty?', q.isEmpty());
console.log('size:', q.size());
q.print()

q.reverse()

q.print()
