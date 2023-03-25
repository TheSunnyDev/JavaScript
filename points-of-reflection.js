// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

// Solution:
function symmetricPoint(p, q) {
    const [xp,yp] = p;
    const [xq,yq] = q;
    const xDistance = (xp - xq)* -1;
    const yDistance = (yp - yq)* -1;
    return[
      xq + xDistance,
      yq + yDistance
    ]
    
  }