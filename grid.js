function solution(n, m, figures){
    function create2DArray(numRows, numCols) {
  let arr = new Array(numRows); // Create an array for the rows

  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array(numCols).fill(0); // Create an array for each row and fill with a default value (e.g., 0)
  }
  return arr;
}

// Example usage:
let myMatrix = create2DArray(3, 4); // Creates a 3x4 matrix filled with zeros
console.log(myMatrix);
/*
Output:
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
*/
}