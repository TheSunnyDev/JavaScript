// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

Solution:
function arrayDiff(a, b) {
    let unique = [];
    
    if (a.length === 0){
      return [];
    }
    
    for (let i = 0; i < a.length; i++){
      if (b.indexOf(a[i]) === -1){
        unique.push(a[i]);
      }
    }
    for (let i = 0; i < b.length; i++){
      if (a.indexOf(b[i]) === -1){
        unique.push(b[i]);
      }
    }
    return unique
  }