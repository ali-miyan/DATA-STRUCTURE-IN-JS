class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new Node();
            }
            curr = curr.children[char];
        }
        curr.isEndOfWord = true;
    }

    search(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) {
                return false;
            }
            curr = curr.children[char];
        }
        return curr != null && curr.isEndOfWord;
    }


}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.show()
// console.log(trie.search("apple"));   // Output: true
// console.log(trie.search("app"));     // Output: false
// trie.insert("app");
// console.log(trie.search("app"));     // Output: true