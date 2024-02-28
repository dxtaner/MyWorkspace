function GraphChallenge(strArr) {
  var numNodes = parseInt(strArr[0]);

  var graph = {};

  for (var i = 1; i <= numNodes; i++) {
    graph[strArr[i]] = [];
  }

  for (var j = numNodes + 1; j < strArr.length; j++) {
    var connection = strArr[j].split("-");
    graph[connection[0]].push(connection[1]);
    graph[connection[1]].push(connection[0]);
  }

  var startNode = strArr[1];
  var endNode = strArr[numNodes];

  var queue = [[startNode]];
  var visited = {};

  while (queue.length > 0) {
    var path = queue.shift();
    var node = path[path.length - 1];

    if (!visited[node]) {
      var neighbors = graph[node];

      for (var k = 0; k < neighbors.length; k++) {
        var newPath = path.slice();
        newPath.push(neighbors[k]);

        if (neighbors[k] === endNode) {
          return newPath.join("-");
        }

        queue.push(newPath);
      }

      visited[node] = true;
    }
  }

  return -1;
}

// Test cases
console.log(
  GraphChallenge([
    "5",
    "A",
    "B",
    "C",
    "D",
    "F",
    "A-B",
    "A-C",
    "B-C",
    "C-D",
    "D-F",
  ])
); // Output: A-C-D-F
console.log(GraphChallenge(["4", "X", "Y", "Z", "W", "X-Y", "Y-Z", "X-W"])); // Output: X-W
