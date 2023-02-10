module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return []
  } else 
  if (matrix.length > 0) {
   return matrix.map((el, index) => index % 2 === 0 ? el : el.reverse()).flat();
  } else
  if (matrix.length === 0) {
    return []
  }
  

  



}






console.log(module.exports())

console.log(module.exports( [
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
]))
  console.log(module.exports([ [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]]))