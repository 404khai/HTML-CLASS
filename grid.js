// Shape definitions
let A = [ [1] ];
let B = [ [1, 1, 1] ];
let C = [
    [1, 1],
    [1, 1]
];
let D = [
    [1,0],
    [1,1],
    [1,0]
];
let E = [
    [0,1,0],
    [1,1,1]
];

function solution(n, m, figures) {
    // Create empty grid
    let grid = Array.from({ length: n }, () => Array(m).fill(0));

    // Helper to check if a shape fits at (row, col)
    function canPlace(shape, row, col) {
        for (let i = 0; i < shape.length; i++) {
            for (let j = 0; j < shape[0].length; j++) {
                if (shape[i][j] === 1) {
                    let r = row + i, c = col + j;
                    if (r >= n || c >= m || grid[r][c] !== 0) return false;
                }
            }
        }
        return true;
    }

    // Place shape at (row, col) with shapeNumber
    function place(shape, row, col, shapeNumber) {
        for (let i = 0; i < shape.length; i++) {
            for (let j = 0; j < shape[0].length; j++) {
                if (shape[i][j] === 1) {
                    grid[row + i][col + j] = shapeNumber;
                }
            }
        }
    }

    // Iterate over figures and place them
    for (let f = 0; f < figures.length; f++) {
        let shape = figures[f];
        let shapeNum = f + 1; // number for this shape

        let placed = false;
        for (let i = 0; i < n && !placed; i++) {
            for (let j = 0; j < m && !placed; j++) {
                if (canPlace(shape, i, j)) {
                    place(shape, i, j, shapeNum);
                    placed = true;
                }
            }
        }
    }

    return grid;
}

// Example run
let grid1 = solution(4, 4, [D, B, A, C]);

// console.log("Final Grid with shape numbers:");
// console.log(grid1.map(r => JSON.stringify(r)).join("\n"));

// Also print with 0s for empty spots
console.log("\nGrid with 0s as empty:");
console.log(grid1.map(r => r.join(" ")).join("\n"));
