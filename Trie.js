class Node {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root
        for (let val of word) {
            if (!curr.children[val]) {
                curr.children[val] = new Node()
            }
            curr = curr.children[val]
        }
        curr.isEnd = true
    }

    startWithPrefix(word) {
        let curr = this.root
        for (let val of word) {
            if (!curr.children[val]) {
                return 'no matching prefix'
            }
            curr = curr.children[val]
        }
        this.display(curr, word)

    }

    display(root, prefix = '') {
        if (root.isEnd) {
            console.log(prefix)
        }
        for (let val in root.children) {
            this.display(root.children[val], prefix + val)
        }
    }

    delete(word) {
        this.deleteHelper(this.root, word, 0)
    }

    deleteHelper(root, word, level) {
        if (root == null) {
            return true
        }

        if (word.length == level) {
            if (root.isEnd) {
                root.isEnd = false
            }
            return Object.keys(root.children).length == 0
        }

        let child = root.children[word[level]]
        let deleted = this.deleteHelper(child, word, level + 1)

        if (deleted) {
            delete root.children[word[level]]
        }
        return false
    }

    search(word) {
        let curr = this.root
        for (let val of word) {
            if (!curr.children[val]) {
                return false
            }
            curr = curr.children[val]
        }

        if (curr.isEnd)return true
        else return false
    }
}

const trie = new Trie()

trie.insert('apple')
trie.insert('banana')
trie.insert('app')

console.log(trie.search('apple'));
// console.log(trie.search('app'))

// trie.delete('app')
// trie.startWithPrefix('b')

trie.display(trie.root)