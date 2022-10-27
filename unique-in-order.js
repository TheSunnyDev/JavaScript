// mplement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

Solution:
var uniqueInOrder=function(iterable){
    let uniques = [];
    
    for (let i = 0; i < iterable.length; i++){
      let curr = iterable[i];
      let next = iterable[i + 1];
      if (curr !== next){
        uniques.push(curr);
      }
    }
    return uniques;
  }