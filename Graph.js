class Graph{
    constructor() {
        this.list = {}
    }

    addVertex(data){
        if(!this.list[data]){
            this.list[data] = new Set()
        }
    }

    addEdge(data1,data2){
        if(!this.list[data1]){
            this.addVertex(data1)
        }
        if(!this.list[data2]){
            this.addVertex(data2)
        }
        this.list[data1].add(data2)
        this.list[data2].add(data1)
    }

    remove(vertex, edge){
            this.list[edge].delete(vertex);
            this.list[vertex].delete(edge);
    }

    deleteVertex(vertex){
        if(!this.list[vertex]){
            return
        }
        for(let val of this.list[vertex]){
            this.remove(vertex,val)
        }
        delete this.list[vertex]
    }
    

    display(){
        for(let val in this.list){
            console.log(val + '-->' + [...this.list[val]]);
        }
    }
}

const g = new Graph()

g.addVertex(1)
g.addVertex(2)
g.addEdge(1,2)
g.addEdge(2,3)
// g.remove('a' , 'o')
g.deleteVertex(2)

g.display()

