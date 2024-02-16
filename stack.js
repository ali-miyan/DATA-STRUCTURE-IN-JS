///////////////////////////////////////////////////STACK USING LIST/////////////////////////////////

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class listStack{
  constructor(){
    this.top = null
    this.bottom = null
    this.size = 0
  }

  push(data){
    const nodeData = new Node(data)
    if(this.bottom == null){
      this.top = nodeData
      this.bottom = nodeData
    }else{
      nodeData.next = this.top
      this.top = nodeData
    }
    this.size++
  }

  pop(){
    this.top = this.top.next
  }

  peek(){
    return this.top.data
  }

  print(){
    let curr = this.top
    while(curr){
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const stackList = new listStack()

stackList.push(10)
stackList.push(12)
stackList.push(13)
stackList.push(14)
stackList.push(15)
stackList.pop()


console.log(stackList.peek(),'peek');

stackList.print()




//////////////////////////////////////////////////////STACK USING ARRAY/////////////////////////////////////

class stack{
  constructor() {
    this.items = []
  }

  push(val){
    this.items.push(val)
  }

  pop(){
    return this.items.pop()
  }

  peek(){
    return this.items[this.items.length-1]
  }

  print(){
    console.log(this.items);
  }

}


const stak = new stack()

stak.push(11)
stak.push(12)
stak.push(13)
stak.push(14)

console.log(stak.peek())

stak.pop()

stak.print()