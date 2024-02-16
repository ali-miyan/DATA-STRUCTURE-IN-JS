
//////////////////////////////////////SINGLY LINKED LIST///////////////////////////////////////////////////

class node{
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class linkedList{
  constructor(){
    this.head = null
    this.tail = null
  }

  insertData(data){
    const nodeData = new node(data)
    if (this.head == null) {
      this.head = nodeData
      this.tail = nodeData
      console.log('added to head');
    }else{
      nodeData.next = this.head
      this.head = nodeData

      // this.tail.next = nodeData
      // this.tail = nodeData
      
    }
  }

  search(val){
    let curr = this.head
    while(curr){
      if(curr.data == val){
        console.log(curr.data == val);
      }
      curr = curr.next
    }
    return console.log(false);
  }

  deleteFirst(){
    if(this.head == null){
      console.log('nothing to delete');
      return
    }
    if(this.head.next == null){
      this.head = null
    }
    this.head = this.head.next
  }

  deleteLast(){
    let curr = this.head
    while(curr.next.next){
        curr = curr.next
      }
      curr.next = null
  }

  deleteVal(val){
    if(this.head.data == val){
      this.head =this.head.next
      console.log('value is in head');
      return
    }
    let curr = this.head
    while(curr.next && curr.next.data != val){
      curr = curr.next
    }
    if(curr.next){
      const removed = curr.next
      curr.next = removed.next
    }
  }

  findMiddle(){
    if(this.head == null){
      console.log('list is empty');
      return
    }
    let one = this.head
    let two = this.head
    while(two && two.next !==null ){
      one = one.next
      two = two.next.next
    } 
    console.log(one.data,'middle man');
  }

  print(){
    let curr = this.head
    while(curr){
      console.log(curr.data);
      curr = curr.next
    }
  }
}

const list = new linkedList()
list.insertData(1)
list.insertData(2)
list.insertData(3)
list.insertData(4)
list.search(22)
list.deleteVal(29)
list.findMiddle()
list.deleteLast()

list.print()



//////////////////////////////////////DOUBLY LINKED LIST////////////////////////////////////////////////////
class Node{
    constructor(data){
      this.data = data
      this.next = null
      this.prev = null
    }
  }
  
  class linkedList{
    constructor(){
      this.head = null
      this.tail = null
    }
  
  insertData(data){
    const nodeData = new Node(data)
    if(this.head == null){
      this.head = nodeData
      this.tail = nodeData
    }else{
      nodeData.next = this.head
      this.head = nodeData
    }
  }
  
    deleteFirst(){
      this.head = this.head.next
      this.head.prev = null
    }
  
    deleteLast(){
      this.tail = this.tail.prev
      this.tail.next = null
    }
  
    deleteVal(val){
      let curr = this.head
      while(curr){
        if(curr.data == val){
          curr.prev.next = curr.next
          curr.next.prev = curr.prev
        }
        curr = curr.next
      }
    }
  
  putAfter(x,data){
    const nodeData = new Node(data)
    let curr = this.head
    while(curr){
      if(curr.data == x){
        let store = curr.next
        curr.next = nodeData
        nodeData.next = store
        break
      }
      curr = curr.next
    }
  }
  
  putBefore(x,data){
    let curr = this.head
    const nodeData = new Node(data)
    while(curr){
      if(curr.data == x){
        let store = curr.prev
        curr.prev = nodeData
        nodeData.next = curr
        store.next = nodeData
        break
      }
      curr = curr.next
    }
  }
  
  printReverse(){
    let curr = this.tail
    while(curr){
      console.log(curr.data);
      curr = curr.prev
    }
  }
  
  removeDuplicate(){
    let curr = this.head
    while(curr){
      let dup = curr.next
      while(dup && curr.data == dup.data){
        dup = dup.next
      }
      if(curr.next){
        curr.next = dup
      }
      curr = curr.next
    }
  }
  
  
  delwithoutTail(){
    let curr = this.head
    while(curr.next && curr.next.next!== null){
      curr = curr.next
    }
    if(curr.next){
      curr.next = null
    }
  }
  
  middleMan(data){
    const nodeData = new Node(data)
    let one = this.head
    let two = this.head
    while(two && two.next){
      one = one.next
      two = two.next.next
    }
    let store = one.next
    one.next = nodeData
    nodeData.next = store
  
    console.log(one.data,'dat');
  
  }
  
  
  printReverseSingle(){
  let curr = this.head
  let prev = null
  while(curr){
    let store = curr.next
    curr.next = prev
    prev = curr
    curr = store
  }
  this.head = prev
  }
  
  deleteValSingle(val){
    let curr = this.head
    let prev = null
    while(curr && curr.data!==val){
      prev =curr
      curr = curr.next
    }
  
    prev.next = curr.next
  }
  
  putAfterandBefore(tar,data){
    const nodeData1 = new Node(data)
  
    let curr = this.head
    while(curr){
      if(curr && curr.data === tar){
        let store1 = curr.prev
        curr.prev = nodeData1
        nodeData1.prev = store1
        nodeData1.next = curr
        store1.next = nodeData1
      }
      curr = curr.next
    }
  }
  
  print(){
      let curr = this.head
      while(curr){
        console.log(curr.data);
        curr = curr.next
      }
    }
  }
  
  const list2 = new linkedList()
  
  
  list2.insertData(1)
  list2.insertData(2)
  list2.insertData(3)
  list2.insertData(4)
  list2.insertData(5)
  
  list2.deleteFirst()
  list2.deleteLast()
  list2.delwithoutTail()
  list2.deleteVal(3)
  list2.deleteValSingle(3)
  list2.removeDuplicate()
  
  list2.putAfter(3,100)
  list2.putAfterandBefore(3,500)
  list2.putBefore(3,120)
  list2.insertMiddle(100)
  list2.middleMan(99)
  
  list2.printReverse()
  
  
  list2.print()
  console.log('reversed');
  list2.printReverseSingle()
  list2.print()


  //////////////////////////////////////////////////////////////////////////////////////////////////////////