class Graph {
    constructor() {
        this.list = {};
    }

    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set();
        }
    }

    addEdge(vertex, edge) {
        this.addVertex(vertex);
        this.addVertex(edge);

        this.list[vertex].add(edge);
        // For bidirectional
        // this.list[edge].add(vertex);
    }


    remove(vertex, edge) {
        this.list[vertex].delete(edge);
        // For bidirectional
        // this.list[edge].delete(vertex);
    }

    removeVertex(vertex) {
        for (let val of this.list[vertex]) {
            this.remove(vertex, val);
        }
        delete this.list[vertex];
    }

    dfs(start) {
        let stack = [];
        let visited = {};

        stack.push(start);
        while (stack.length) {
            let vertex = stack.pop();

            if (!visited[vertex]) {
                visited[vertex] = true;
                console.log(vertex);

                let nearData = this.list[vertex];

                for (let val of nearData) {
                    if (!visited[val]) {
                        stack.push(val);
                    }
                }
            }
        }
    }

    bfs(start){
    let queue = []
    let visited = {}
    queue.push(start)
    
    while(queue.length){
        const vertex = queue.shift()
        console.log(vertex)
        
        if(!visited[vertex]){
            visited[vertex] = true
        
        const nearData = this.table[vertex]
        
        for(let val of nearData){
            if(!visited[val]){
                queue.push(val)
                }
            }
        }
    }
}


    findLargestKey() {
        let max = 0;
        let largest = 0;
        for (let val in this.list) {
            if (this.list[val]) {
                let count = this.list[val].size;
                if (count > max) {
                    max = count;
                    largest = val;
                }
            }
        }
        return largest;
    }

    display() {
        for (let val in this.list) {
            console.log(val + "--->" + [...this.list[val]]);
        }
    }
}

const graph = new Graph();

graph.addEdge(1, 3);
graph.addEdge(1, 2);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

// graph.remove(1, 2);
// graph.removeVertex(5);

graph.dfs(1);
console.log('/////////////////////////////////////////////');
graph.bfs(1);


graph.display();

console.log(graph.findLargestKey());
