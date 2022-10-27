// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Solution:
function nearestSq(n){
    let numberToSquare = 1;
    let squared = Math.pow(numberToSquare, 2);
    while (squared < n ) {
      numberToSquare  += 1;
      squared = Math.pow(numberToSquare, 2);
    }
    const prevSquared = Math.pow(numberToSquare-1, 2);
    const diff = Math.abs(n - squared);
    const prevDiff = Math.abs(n - prevSquared);
    if (diff > prevDiff) return prevSquared;
    return squared;
}