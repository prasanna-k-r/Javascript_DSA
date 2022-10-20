/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, rows, columns) {
    //Edge case
    let m = mat.length;
    let n = mat[0].length;
    console.log(m,n)
    if(m * n !== rows * columns) return mat;
    const newMatrix = [];
    let rowReader = 0;
    let columnReader = 0;

    for (let row = 0; row < rows; row++) {
        const newRow = [];
        
        for (let col = 0; col < columns; col++) {
            if(columnReader > mat[rowReader].length - 1) {
                columnReader = 0;
                rowReader++;
            }

            if(rowReader >= mat.length) {
                return mat;
            }

            newRow.push(mat[rowReader][columnReader++]);
        }

        newMatrix.push(newRow);
    }

    return newMatrix;
};