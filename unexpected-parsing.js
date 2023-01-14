// Here is a piece of code:

// function getStatus(isBusy) {
//   var msg = (isBusy ? "busy" : "available");
//   return 
//   {
//     status: msg
//   }
// }
// Expected Behaviour

// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// Solution:

function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
      status: msg
    }
  }