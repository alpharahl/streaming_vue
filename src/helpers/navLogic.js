const reconstructPath = function(cameFrom, current){
  console.log("Reconstructing!!!!")
  window.cf = cameFrom
  window.c = current
  var finalPath = [current]
  while (typeof cameFrom[current] !== 'undefined'){
    current = cameFrom[current]
    finalPath.push(current)
  }
  return finalPath
}



const heuristic_estimate = function(a, b){
  // determine estimate of distance between two points
  // a and b are expected to be [ax,ay] and [bx,by] respectively
  let xdiff = Math.abs(a[0] - b[0])
  let ydiff = Math.abs(a[1] - b[1])
  return Math.sqrt(xdiff*xdiff + ydiff*ydiff)
}

const removeCurrentFromOpen = function(current, openSet){
  for (var coords in openSet){
    if (current[0] == openSet[coords][0] && current[1] == openSet[coords][1]){
      openSet.splice(coords,1)
    }
  }
  return openSet
}

const getNeighbors = function(current, cells){
  var neighbors = []
  for (var x = -1; x < 2; x++){
    for (var y = -1; y < 2; y++){
      // check all surrounding cells for 'walkable' cells
      if ( !(y == 0 && x == 0)){
        let gridx = current[0] + x
        let gridy = current[1] + y
        if (cells[gridy][gridx]["walkable"]){
          neighbors.push([gridx,gridy])
        }
      }
    }
  }
  return neighbors
}

const neighborInSet = function(neighbor, nodeSet){
  for (var i in nodeSet){
    if(neighbor[0] == nodeSet[i][0] && neighbor[1] == nodeSet[i][1]){
      return true
    }
  }
  return false
}

const getNodeInOpenSetWithLowestFScore = function(openSet, fScore){
  var lowestNode = openSet[0]
  for (var i in openSet){
    if (fScore[openSet[i]] < fScore[openSet[0]]){
      lowestNode = openSet[i]
    }
  }
  return lowestNode
}

const goalCheck = function(current, goal){
  if ( current[0] == goal[0] && current[1] == goal[1] ) {
    return true
  }
  return false
}

export function navigate(start, goal, cells){
  console.log("Navigate to", goal)
  console.log("from", start)

  // Already evaluated nodes
  var closedSet = []

  // Discovered nodes, not yet evaluated
  var openSet = [start]

  // Came from will store data about the most effecient path somewhere
  var cameFrom = {}

  // cost of getting to a spot
  var gScore = {}

  gScore[start] = 0

  // fscore is the total cost of getting from start to goal via this node
  var fScore = {}

  fScore[start] = heuristic_estimate(start, goal)
  
  var count = 0;
  while (openSet.length != 0){
    let current = getNodeInOpenSetWithLowestFScore(openSet, fScore)

    console.log("Comparing", current, goal)
    if (goalCheck(current,goal)){
      return reconstructPath(cameFrom, current)
    }

    openSet = removeCurrentFromOpen(current, openSet)
    closedSet.push(current)

    var neighbors = getNeighbors(current, cells)
    for (var n in neighbors){
      var neighbor = neighbors[n]
      if (neighborInSet(neighbor, closedSet)){
        continue
      }

      if (!neighborInSet(neighbor, openSet)){
        openSet.push(neighbor)
      }

      var tGScore = gScore[current] + 1
      if (tGScore >= gScore[neighbor]){
        continue // not a better path
      }

      cameFrom[neighbor] = current
      gScore[neighbor] = tGScore
      fScore[neighbor] = gScore[neighbor] + heuristic_estimate(neighbor, goal)
    }
    // for each neighbor of current
    //         if neighbor in closedSet
    //             continue		// Ignore the neighbor which is already evaluated.

    //         if neighbor not in openSet	// Discover a new node
    //             openSet.Add(neighbor)
            
    //         // The distance from start to a neighbor.
    //         // The "dist_between" function may vary as per the solution requirements.
    //         tentative_gScore := gScore[current] + dist_between(current, neighbor)
    //         if tentative_gScore >= gScore[neighbor]
    //             continue		// This is not a better path.

    //         // This path is the best until now. Record it!
    //         cameFrom[neighbor] := current
    //         gScore[neighbor] := tentative_gScore
    //         fScore[neighbor] := gScore[neighbor] + heuristic_cost_estimate(neighbor, goal)

    // console.log(current, fScore, gScore, closedSet, openSet.length)
    // console.log("current is: ", current, "openSet is: ", openSet, "closedSet:", closedSet)
    count++

    if (count > 100){
      openSet = []
    }

  }
}

