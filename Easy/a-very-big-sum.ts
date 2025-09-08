//Link: https://www.hackerrank.com/challenges/a-very-big-sum/problem

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar: number[]): number {
    let total = 0;
    
    for(let i = 0; i < ar.length; i++) {
        total += ar[i];
    }
    
    return total
}