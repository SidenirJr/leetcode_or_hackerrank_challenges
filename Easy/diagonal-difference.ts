//Link: https://www.hackerrank.com/challenges/diagonal-difference/problem

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][n - i - 1];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}