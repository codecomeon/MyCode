// 图
// 基本概念
// 顶点、边、相邻、度、路径、环、连通、权值

function Graph() {
  var vertices=[]
  var adjList=new Dictionary()

  //增加顶点
  this.addVertex=function (v) {
    vertices.push(v)
    adjList.set(v,[])
  }

  //定义边
  this.addEdge=function (v,w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  //将图转为字符串输出
  this.toString=function () {
    var s=''
    for(var i=0;i<vertices.length;i++){
      s+=vertices[i]+' -> '
      var neighbors=adjList.get(vertices[i])
      for(var j=0;j<neighbors.length;j++){
        s+=neighbors[j]+' '
      }
      s+='\n'
    }
    return s
  }

  //TODO：遍历
  // 广度优先搜索(Breadth-First Search,BFS)
  // 深度优先搜索(Depth-First Search,DFS)

  //TODO:最短路径算法
  //Dijkstra算法 贪心算法
  //Floyd-Warshall算法 动态规划算法
  //最小生成树 MST Prim算法、Kruskal算法
}

export default Graph;