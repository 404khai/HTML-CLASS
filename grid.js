function solution(n, m, figures) {
    let arr = new Array(n); // Create an array for the rows

    for (let i = 0; i < n; i++) {
        arr[i] = new Array(m).fill(0); // Create an array for each row and fill with a default value (e.g., 0)
    }
    return arr;
}


    // Example usage:
solution1 = solution(4, 4, [D, B, A, C]); // Creates a 3x4 matrix filled with zeros
    

// }