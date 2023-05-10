// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Solution:

function quadrant(x, y) {
    const area = [
      [2,1],
      [3,4]
    ]
    
    const xa = x > 0 ? 1 : 0
    const ya = y > 0 ? 0 : 1
    
    return area[ya][xa]
  }