/////////////////////////////////////////////////////// HASH TABLE //////////////////////////////////

class hashTable{
  constructor(size){
    this.items = Array(size)
    this.size = size
  }

  hash(key){
    let hashKey = key.toString()
    let hashedVal = 0
    for(let i = 0; i < hashKey.length; i++){
      hashedVal += hashKey.charCodeAt(i)
    }
    return hashedVal % this.size
  }

  set(key,val){
    const index = this.hash(key)
    this.items[index] = val
  }

  get(key){
    const index = this.hash(key)
    return this.items[index]
  }

  remove(key){
    const index = this.hash(key)
    delete this.items[index]
  }

  print(){
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i]){
        console.log(i,this.items[i]);

      }
    }
  }

}

const hash = new hashTable(50)

hash.set('ali','miyan')
console.log( hash.get('ali'));
hash.print()

let arr = [1,3,4,4,4,5,122,4,6,7]
let ind = 0
for (let i = 0; i < arr.length; i++) {
  if(!hash.get(arr[i])) {
    hash.set(arr[i],true)
    arr[ind] = arr[i]
    ind++
  } 
}
arr.length = ind
console.log(arr);


hash.set('name','ali')
hash.set('age',87)
console.log( hash.get('name'));
console.log( hash.get('age'));
hash.print()




/////////////////////////////////////////////// MAP QUESTIONS///////////////////////////////////

const map = new Map()
const result = []

let arr = ['a','a','a','l','d','f']

for(let i = 0; i < arr.length; i++){
  if(!hash.get(arr[i])){
    hash.set(arr[i],true)
    result.push(arr[i])
  }
}


let index = 0
for(let i = 0; i < arr.length; i++){
  if(!map.has(arr[i])){
    map.set(arr[i])
    arr[index] = arr[i]
    index++
  }
}

arr.length = index
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if(map.has(arr[i])){
    map.set(arr[i],map.get(arr[i])+1)
  }else{
    map.set(arr[i],1)
  }
}
console.log(map);