const graph = {
    Patient_Admission: { Emergency: 5, Laboratory: 2 },
    Laboratory: { Patient_Admission: 2, Emergency: 1, Surgery: 15 },
    Emergency: { Patient_Admission: 5, Laboratory: 1, Surgery: 3 },
    Surgery: { Emergency: 3, Laboratory: 15, Pharmacy: 10 },
    Pharmacy: { Emergency: 8, Surgery: 10 },
  };
  
  function dijkstra(graph, start) {
    let distances = {};
  
    let visited = new Set();
  
    let nodes = Object.keys(graph);
    for (let node of nodes) {
      distances[node] = Infinity;
    }
    distances[start] = 0;
    while (nodes.length) {
      nodes.sort((a, b) => distances[a] - distances[b]);
      let closestNode = nodes.shift();
      if (distances[closestNode] === Infinity) break;
  
      visited.add(closestNode);
  
      for (let neighbor in graph[closestNode]) {
        if (!visited.has(neighbor)) {
          let newDistance = distances[closestNode] + graph[closestNode][neighbor];
  
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
          }
        }
      }
    }
    return distances;
  }
  
  console.log(dijkstra(graph, "Laboratory"));
  