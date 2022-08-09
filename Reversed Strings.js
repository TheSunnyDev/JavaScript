// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let result = ''
    for (let i of str){
      result = i + result
    }
    return result
  }

