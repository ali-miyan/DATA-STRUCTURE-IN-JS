
class Node{
    constructor() {
        this.children = {}
        this.end = false
    }
}

class Trie{
    constructor() {
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let val of word){
            if(!curr.children[val]){
                curr.children[val] = new Node()
            }
            curr = curr.children[val]
        }
        curr.end = true
    }

    show(search){
        let curr = this.root
        for(let val of search){
            if(!curr.children[val]){
                return false
            }
            curr = curr.children[val];
        }
        return true
    }

    printAllWords(node, prefix = '') {
       if(node.end){
        console.log(prefix); 
       } 
       for(let char in node.children){
            this.printAllWords(node.children[char] , prefix + char)
       }
    } 

    printWordsStartingWith(prefix) {
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children[char]){
                console.log('not matching any word');
                return
            }
            curr = curr.children[char]
        }
        this.printAllWords(curr,prefix)
    }
}



const trie = new Trie();
trie.insert("apple");  
trie.insert("ali");  
trie.insert("appoooo"); 
// trie.insert("orange"); 
// trie.show()/
console.log(trie.show("www"));   // Output:

trie.printAllWords(trie.root)
trie.printWordsStartingWith('app')
// console.log(trie.search("app"));     // Output: false
// trie.insert("app");
// console.log(trie.search("app"));     // Output: true